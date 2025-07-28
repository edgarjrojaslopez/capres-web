export const runtime = 'nodejs'; // ✅ Obligatorio

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
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Si el socio existe, recibirá un correo.',
        }),
        { status: 200 }
      );
    }

    let emailFinal = socio.Email;

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

    if (!emailFinal && correoIngresado) {
      emailFinal = correoIngresado;
      await db
        .update(socios)
        .set({ Email: correoIngresado })
        .where(eq(socios.CodSocio, cedula));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailFinal)) {
      return new Response(
        JSON.stringify({
          error: 'El correo electrónico no tiene un formato válido.',
        }),
        { status: 400 }
      );
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 3600000); // 1 hora

    // ✅ Asegúrate de que el objeto sea limpio
    const updateData = {
      reset_token: token,
      reset_token_expires: expires,
    };

    // ✅ Elimina campos undefined (por si acaso)
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    await db.update(socios).set(updateData).where(eq(socios.CodSocio, cedula));

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
  console.log('📧 Email final:', emailFinal);
  console.log('🔐 Token:', token);
  console.log('📅 Expira:', expires.toISOString());
  console.log('📦 Datos a actualizar:', updateData);
}
