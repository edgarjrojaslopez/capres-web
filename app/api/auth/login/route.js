export const runtime = 'nodejs';

import { db } from '@/lib/db';
import { socios } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { SignJWT } from 'jose';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('❌ ERROR FATAL: JWT_SECRET no está definido');
}

export async function POST(req) {
  try {
    const { cedula, password } = await req.json();

    console.log('🔍 Login attempt:', {
      cedula,
      password: password ? 'PROVIDED' : 'MISSING',
    });

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

    console.log('👤 User found:', user ? 'YES' : 'NO');
    console.log('🔑 Stored password:', user?.password);

    if (!user) {
      return new Response(
        JSON.stringify({ error: { message: 'Credenciales inválidas' } }),
        { status: 401 }
      );
    }

    let isValid = false;
    if (user.password.startsWith('$2b$')) {
      console.log('🔐 Checking hashed password');
      isValid = await bcrypt.compare(password, user.password);
    } else {
      console.log('📝 Checking plain text password');
      isValid = password === user.password;
    }

    console.log('✅ Password valid:', isValid);

    if (!isValid) {
      return new Response(
        JSON.stringify({ error: { message: 'Credenciales inválidas' } }),
        { status: 401 }
      );
    }

    if (!JWT_SECRET) {
      console.error('JWT_SECRET no está definido');
      return new Response(
        JSON.stringify({ error: { message: 'Error interno del servidor' } }),
        { status: 500 }
      );
    }

    const secret = new TextEncoder().encode(JWT_SECRET);
    const token = await new SignJWT({
      cedula: user.CodSocio,
      nombre: user.NombreCompleto,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .sign(secret);

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
