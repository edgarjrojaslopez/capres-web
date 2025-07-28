export const runtime = 'nodejs'; // ✅ Obliga a usar Node.js

import { db } from '@/lib/db';
import { socios } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;

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

    // ✅ Soporte para contraseñas en texto plano y hash
    let isValid = false;
    if (user.password.startsWith('$2b$')) {
      // Es un hash bcrypt
      isValid = await bcrypt.compare(password, user.password);
    } else {
      // Es texto plano (como password123)
      isValid = password === user.password;
    }

    if (!isValid) {
      return new Response(
        JSON.stringify({ error: { message: 'Credenciales inválidas' } }),
        { status: 401 }
      );
    }

    // ✅ Genera el token
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
    console.error('Error en login:', error); // Aparecerá en los logs de Vercel
    return new Response(
      JSON.stringify({ error: { message: 'Error interno del servidor' } }),
      { status: 500 }
    );
  }
}
