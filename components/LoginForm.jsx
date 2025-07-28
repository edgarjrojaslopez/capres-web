'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cedula, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // El error de la API es un objeto. Extraemos el mensaje para mostrarlo.
        // El error de React ocurre porque se intenta renderizar el objeto de error completo.
        const errorMessage =
          data.error?.message || data.error || 'Credenciales inválidas';
        setError(errorMessage);
        return;
      }

      setError(''); // Limpiamos el error si el login es exitoso
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id); // Guardamos el ID del usuario
      localStorage.setItem('userData', JSON.stringify(data.user)); // Datos adicionales si se necesitan
      router.push('/dashboard');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Hubo un problema al conectar con el servidor.'); // 👈 Mostramos un error genérico
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Área Privada</h2>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
          {/* Mostramos el mensaje de error aquí */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-400 rounded">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cédula
            </label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="Ingresa tu cédula"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Ingresando...' : 'Ingresar'}
          </button>
          <p>
            <Link href="/forgot-password" className="text-blue-600">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
