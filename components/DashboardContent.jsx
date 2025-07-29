// components/DashboardContent.jsx
'use client';

import { useEffect, useState } from 'react';

// Función para obtener token de cookie o localStorage
const getToken = () => {
  if (typeof window === 'undefined') return null;

  // Intentar obtener de cookie primero
  const cookieToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('token='))
    ?.split('=')[1];

  return cookieToken || localStorage.getItem('token');
};

export default function DashboardContent() {
  const [userData, setUserData] = useState(null);
  const [haberesData, setHaberesData] = useState(null);
  const [prestamosData, setPrestamosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
  const [avatar, setAvatar] = useState('/avatar-default.png');
  const [changePasswordModal, setChangePasswordModal] = useState(false);

  const token = getToken();
  const decodedToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
  const codSocio = decodedToken?.cedula || null;

  console.log('🔍 DashboardContent - Token:', token ? 'Presente' : 'Ausente');
  console.log('🔍 DashboardContent - codSocio:', codSocio);

  // Formatear fechas
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Inválida';
    return new Intl.DateTimeFormat('es-VE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  // Formatear números
  const formatNumber = (value) => {
    return new Intl.NumberFormat('es-VE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value || 0);
  };

  // Cargar datos
  useEffect(() => {
    const fetchData = async () => {
      if (!codSocio) {
        console.log('❌ No codSocio disponible');
        setLoading(false);
        return;
      }

      try {
        console.log('📡 Fetching data para codSocio:', codSocio);
        const response = await fetch(`/api/dashboard/${codSocio}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Data recibida:', data);

        setUserData(data.socio);
        setHaberesData(data.haberes);
        setPrestamosData(data.prestamos || []);
      } catch (error) {
        console.error('❌ Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [codSocio]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    try {
      const res = await fetch(`/api/socios/${codSocio}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setUserData({ ...userData, ...form });
        setEditing(false);
        alert('Datos actualizados correctamente');
      } else {
        alert('Error al actualizar los datos');
      }
    } catch (err) {
      console.error('Error al guardar:', err);
      alert('Error de conexión');
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Cargando dashboard...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">
          Error: No se pudieron cargar los datos del usuario
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Encabezado principal */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 border border-gray-100">
          {/* Avatar y nombre */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 group">
              <img
                src={avatar}
                alt="Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-blue-700 transition shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              {userData.NombreCompleto}
            </h2>
            <p className="text-gray-600 font-medium">
              Cédula: <span className="font-bold">{userData.CodSocio}</span>
            </p>
            <p className="text-sm text-gray-500">
              Ingreso: {formatDate(userData.FechaIng)}
            </p>
          </div>

          {/* Tarjetas de resumen */}
          <div className="w-full lg:w-auto flex-1 space-y-4 mt-6 lg:mt-0">
            <DashboardCard
              title="Total Haberes"
              value={formatNumber(haberesData?.totalH)}
              icon="💰"
              color="from-blue-500 to-blue-600"
              description="Tu acumulado total"
            />
            <DashboardCard
              title="Último Retiro"
              value={formatNumber(haberesData?.retiroH)}
              icon="💵"
              color="from-green-500 to-green-600"
              description="Disponible para uso"
            />
            <DashboardCard
              title="Aporte Socio"
              value={formatNumber(haberesData?.aporteS)}
              icon="🧍"
              color="from-yellow-500 to-yellow-600"
              description="Tu contribución mensual"
            />
            <DashboardCard
              title="Aporte Patrono"
              value={formatNumber(haberesData?.aporteP)}
              icon="🏢"
              color="from-purple-500 to-purple-600"
              description="Aporte de la empresa"
            />
          </div>
        </div>

        {/* Alerta de contraseña temporal */}
        {userData.password === 'password123' && (
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-6 border-yellow-500 text-yellow-800 p-5 rounded-xl shadow-md">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 text-yellow-600 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h4 className="text-lg font-semibold">
                  ¡Cambia tu contraseña!
                </h4>
                <p className="mt-1">
                  Estás usando una contraseña temporal. Por tu seguridad,{' '}
                  <button
                    onClick={() => setChangePasswordModal(true)}
                    className="text-blue-600 underline font-medium hover:text-blue-800"
                  >
                    cámbiala ahora
                  </button>
                  .
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Información personal - Full Width */}
        <section className="bg-white rounded-3xl shadow-lg p-7 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Información Personal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <DetailItem label="Cédula" value={userData.CodSocio} />
            <DetailItem
              label="Fecha de Ingreso"
              value={formatDate(userData.FechaIng)}
            />
            <DetailItem
              label="Cuenta Bancaria"
              value={userData.NroCtaBanco || 'No registrada'}
            />
            <DetailItem
              label="Teléfono"
              value={userData.Telefonos || 'No registrado'}
            />
            <DetailItem
              label="Email"
              value={userData.Email || 'No registrado'}
            />
          </div>
          <button
            onClick={() => setEditing(true)}
            className="mt-6 py-3 px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            ✏️ Editar Datos
          </button>
        </section>

        {/* Préstamos activos - Full Width */}
        <section className="bg-white rounded-3xl shadow-lg p-7 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            Préstamos Activos
          </h3>
          {prestamosData.length > 0 ? (
            <div className="space-y-6">
              {prestamosData.map((p, i) => {
                const porcentajePagado =
                  ((p.montoPrest - p.saldoPrest) / p.montoPrest) * 100;
                return (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-2xl p-6 bg-gradient-to-r from-white to-gray-50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                      <span className="font-bold text-lg text-gray-800">
                        {p.tipoPrest}
                      </span>
                      <span className="text-red-600 font-extrabold text-xl mt-2 sm:mt-0">
                        {formatNumber(p.saldoPrest)}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">
                      {formatNumber(p.montoPrest - p.saldoPrest)} pagado de{' '}
                      {formatNumber(p.montoPrest)}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${Math.max(0, porcentajePagado)}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Fecha: {formatDate(p.fechaPrest)}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-4 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h4 className="text-xl font-medium">
                No tienes préstamos activos
              </h4>
              <p className="mt-2">
                Consulta con tu delegado si puedes solicitar uno.
              </p>
            </div>
          )}
        </section>

        {/* Modal de edición */}
        {editing && (
          <EditModal
            form={form}
            setForm={setForm}
            onSave={handleSave}
            onCancel={() => setEditing(false)}
          />
        )}

        {/* Modal de cambio de contraseña */}
        {changePasswordModal && (
          <ChangePasswordModal
            onClose={() => setChangePasswordModal(false)}
            onSuccess={() => {
              setUserData({ ...userData, password: 'changed' });
              setChangePasswordModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

// Tarjeta de resumen
function DashboardCard({ title, value, icon, color, description }) {
  return (
    <div
      className={`bg-gradient-to-r ${color} text-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-102`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <p className="text-xs opacity-80 mt-1">{description}</p>
        </div>
        <div className="text-5xl opacity-90 drop-shadow-md">{icon}</div>
      </div>
    </div>
  );
}

// Detalle de información
function DetailItem({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-100 last:border-b-0 hover:bg-blue-50 hover:rounded px-2 transition">
      <span className="font-medium text-gray-600">{label}:</span>
      <span className="text-gray-800 font-medium">{value}</span>
    </div>
  );
}

// Modal de edición
function EditModal({ form, setForm, onSave, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-7">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          ✏️ Editar Datos
        </h3>
        <div className="space-y-5">
          <InputField
            label="Cuenta Bancaria"
            name="NroCtaBanco"
            value={form.NroCtaBanco}
            onChange={setForm}
          />
          <InputField
            label="Teléfono"
            name="Telefonos"
            value={form.Telefonos}
            onChange={setForm}
          />
          <InputField
            label="Email"
            name="Email"
            value={form.Email}
            onChange={setForm}
            type="email"
          />
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onCancel}
            className="px-6 py-2.5 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition shadow"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

// Campo de entrada
function InputField({ label, name, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) =>
          onChange((prev) => ({ ...prev, [name]: e.target.value }))
        }
        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition"
      />
    </div>
  );
}

// Campo de entrada simple para el modal de contraseña
function SimpleInputField({ label, name, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition"
      />
    </div>
  );
}

// Modal de cambio de contraseña
function ChangePasswordModal({ onClose, onSuccess }) {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPass !== confirm) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (newPass.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      const token = getToken();
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: current,
          newPassword: newPass,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('¡Contraseña actualizada!');
        setTimeout(() => {
          onSuccess?.();
        }, 1000);
      } else {
        setError(data.error?.message || 'Error al cambiar la contraseña');
      }
    } catch (err) {
      setError('Error de conexión');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-7">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          🔐 Cambiar Contraseña
        </h3>
        {success ? (
          <div className="text-center py-6 text-green-600 font-medium text-lg">
            ✅ {success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}
            <SimpleInputField
              label="Contraseña Actual"
              name="current"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              type="password"
            />
            <SimpleInputField
              label="Nueva Contraseña"
              name="new"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              type="password"
            />
            <SimpleInputField
              label="Confirmar Contraseña"
              name="confirm"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
            />
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition"
              >
                Cambiar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
