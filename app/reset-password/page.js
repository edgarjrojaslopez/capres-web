// app/reset-password/page.js

'use client'; // ✅ Primera línea

import { useState } from 'react';
import { useSearchParams } from 'next/navigation'; // ✅ Correcto

// ✅ Evita prerrenderizado
export const dynamic = 'force-client';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Contraseña actualizada. Redirigiendo...');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        setMessage(data.error || 'Token inválido o expirado');
      }
    } catch (error) {
      setMessage('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow text-center">
        <h2 className="text-xl font-semibold text-red-600">Token no válido</h2>
        <p className="mt-2 text-gray-600">
          El enlace no es válido o ha expirado.
        </p>
        <a
          href="/forgot-password"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Solicitar nuevo enlace
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🔐 Restablecer Contraseña
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nueva Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Mínimo 6 caracteres"
            required
            minLength="6"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Guardando...' : 'Guardar Contraseña'}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            message.includes('éxito') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
      <div className="mt-6 text-center">
        <a href="/login" className="text-blue-600 hover:underline text-sm">
          ← Volver al inicio de sesión
        </a>
      </div>
    </div>
  );
}
