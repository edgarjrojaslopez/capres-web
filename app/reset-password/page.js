// app/reset-password/page.js

'use client'; // ✅ Esta línea debe estar AL INICIO del archivo
import { useState, useSearchParams } from 'react';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const data = await res.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage('Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <p className="text-center text-red-600">Token no válido o faltante.</p>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
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
            message.includes('error') || message.includes('Token')
              ? 'text-red-600'
              : 'text-green-600'
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
