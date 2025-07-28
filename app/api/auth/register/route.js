import { withErrorHandler } from '@/lib/api/handler';
import { ApiError } from '@/lib/api/error';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { hashPassword } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { randomUUID } from 'crypto'; // 👈 1. Importar el generador de UUID

async function handleRegister(req) {
  const {
    nombre: rawNombre,
    apellido: rawApellido,
    cedula: rawCedula,
    email: rawEmail,
    password: rawPassword,
    rol,
  } = await req.json();

  // Limpia los datos de entrada para asegurar la consistencia
  const nombre = rawNombre?.trim();
  const cedula = rawCedula?.trim();

  if (!nombre || !cedula || !rawPassword) {
    throw new ApiError('Faltan campos requeridos (nombre, cédula, password)', {
      code: 'MISSING_FIELDS',
      status: 400,
    });
  }

  // 1. Verificar si el usuario ya existe por su cédula
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.cedula, cedula));

  if (existingUser.length > 0) {
    throw new ApiError('La cédula ya está registrada', {
      code: 'USER_ALREADY_EXISTS',
      status: 409, // 409 Conflict es un buen código para esto
    });
  }

  // 2. Hashear la contraseña antes de guardarla
  const hashedPassword = await hashPassword(rawPassword);

  // 3. Insertar el nuevo usuario en la base de datos
  await db.insert(users).values({
    id: randomUUID(), // 👈 2. Generar y añadir el ID único
    nombre,
    apellido: rawApellido?.trim(),
    cedula,
    email: rawEmail?.trim(),
    password: hashedPassword, // Guardamos la contraseña hasheada
    rol: rol || 'socio', // 👈 3. Corregir el rol por defecto a 'socio'
  });

  // 4. Como MySQL no soporta .returning(), seleccionamos al usuario recién creado
  const result = await db
    .select({ id: users.id, cedula: users.cedula, nombre: users.nombre })
    .from(users)
    .where(eq(users.cedula, cedula));

  const newUser = result[0];

  return new Response(JSON.stringify({ success: true, user: newUser }), {
    status: 201, // 201 Created es el código correcto para un nuevo recurso
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST = withErrorHandler(handleRegister);
