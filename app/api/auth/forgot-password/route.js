export const runtime = 'nodejs'; // ✅ Obligatorio para Date y bcrypt

import { db } from '@/lib/db';
import { socios } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';
import { sendResetEmail } from '@/lib/email';

export async function POST(req) {
  try {
    const { cedula } = await req.json();

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

    // ✅ Generar token y expiración
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 3600000); // 1 hora

    // ✅ Asegúrate de que los valores sean válidos
    const updateData = {
      reset_token: token,
      reset_token_expires: expires,
    };

    // ✅ Elimina cualquier campo undefined (por si acaso)
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    // ✅ Ejecutar actualización
    await db.update(socios).set(updateData).where(eq(socios.CodSocio, cedula));

    // ✅ Enviar correo
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
