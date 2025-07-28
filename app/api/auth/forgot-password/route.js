export const runtime = 'nodejs';

import { db } from '@/lib/db';
import { socios } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';
import { sendResetEmail } from '@/lib/email';

export async function POST(req) {
  try {
    const { cedula, email: correoIngresado } = await req.json();

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

    let emailFinal = socio.Email;

    // Si no tiene correo y no se proporcionó uno
    if (!emailFinal && !correoIngresado) {
      return new Response(
        JSON.stringify({
          requiresEmail: true,
          message:
            'Este socio no tiene correo registrado. Por favor, ingrésalo para continuar.',
        }),
        { status: 200 }
      );
    }

    // Si no tiene correo, pero el usuario lo ingresó
    if (!emailFinal && correoIngresado) {
      // Opción 1: Guardar temporalmente (para este flujo)
      // Opción 2: Guardar permanentemente (recomendado)
      emailFinal = correoIngresado;

      // ✅ Opcional: Actualiza el correo en la base de datos
      await db
        .update(socios)
        .set({ Email: correoIngresado })
        .where(eq(socios.CodSocio, cedula));
    }

    // Validar formato del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailFinal)) {
      return new Response(
        JSON.stringify({
          error: 'El correo electrónico no tiene un formato válido.',
        }),
        { status: 400 }
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
    await sendResetEmail(emailFinal, socio.NombreCompleto, token);

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
