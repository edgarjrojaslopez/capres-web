export const runtime = 'nodejs';

import { db } from '@/lib/db';
import { socios } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('❌ ERROR FATAL: JWT_SECRET no está definido');
}

export async function POST(req) {
  try {
    const { cedula, password } = await req.json();

    if (!cedula || !password) {
      return new Response(
        JSON.stringify({
          error: { message: 'Cédula y contraseña requeridas' },
        }),
        { status: 400 }
      );
    }

    const [user] = await db
      .select()
      .from(socios)
      .where(eq(socios.CodSocio, cedula));

    if (!user) {
      return new Response(
        JSON.stringify({ error: { message: 'Credenciales inválidas' } }),
        { status: 401 }
      );
    }

    let isValid = false;
    if (user.password.startsWith('$2b$')) {
      isValid = await bcrypt.compare(password, user.password);
    } else {
      isValid = password === user.password;
    }

    if (!isValid) {
      return new Response(
        JSON.stringify({ error: { message: 'Credenciales inválidas' } }),
        { status: 401 }
      );
    }

    // ✅ Verifica que JWT_SECRET exista
    if (!JWT_SECRET) {
      console.error('JWT_SECRET no está definido');
      return new Response(
        JSON.stringify({ error: { message: 'Error interno del servidor' } }),
        { status: 500 }
      );
    }

    const token = jwt.sign(
      { cedula: user.CodSocio, nombre: user.NombreCompleto },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return new Response(
      JSON.stringify({
        token,
        user: { id: user.CodSocio, nombre: user.NombreCompleto },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en login:', error);
    return new Response(
      JSON.stringify({ error: { message: 'Error interno del servidor' } }),
      { status: 500 }
    );
  }
}
