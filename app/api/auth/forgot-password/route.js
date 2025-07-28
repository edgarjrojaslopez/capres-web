export const runtime = 'nodejs';

import { db } from '@/lib/db';
import { socios } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';
import { sendResetEmail } from '@/lib/email'; // Lo crearemos después

export async function POST(req) {
  try {
    const { cedula } = await req.json();

    const [socio] = await db
      .select()
      .from(socios)
      .where(eq(socios.CodSocio, cedula));

    if (!socio) {
      // No revelamos si el socio existe
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Si el socio existe, recibirá un correo.',
        }),
        { status: 200 }
      );
    }

    // Generar token único
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 3600000); // 1 hora

    // Guardar en DB
    await db
      .update(socios)
      .set({
        reset_token: token,
        reset_token_expires: expires,
      })
      .where(eq(socios.CodSocio, cedula));

    // Enviar correo
    await sendResetEmail(socio.Email, socio.NombreCompleto, token);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Si el socio existe, recibirá un correo.',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en forgot-password:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500 }
    );
  }
}
