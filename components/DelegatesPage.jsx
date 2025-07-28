// components/DelegatesPage.jsx
// Delegates Page Component
export default function DelegatesPage() {
  const regions = [
    { name: 'Capital', delegates: 5 },
    { name: 'Central', delegates: 4 },
    { name: 'Andina', delegates: 6 },
    { name: 'Oriental', delegates: 4 },
    { name: 'Zuliana', delegates: 5 },
    { name: 'Insular', delegates: 3 },
  ];

  const delegates = [
    {
      name: 'Carlos Mendoza',
      region: 'Capital',
      contact: 'carlos.mendoza@capres.com',
      phone: '+58 412-1234567',
    },
    {
      name: 'Ana Rojas',
      region: 'Central',
      contact: 'ana.rojas@capres.com',
      phone: '+58 414-2345678',
    },
    {
      name: 'Luis Torres',
      region: 'Andina',
      contact: 'luis.torres@capres.com',
      phone: '+58 424-3456789',
    },
    {
      name: 'María Fernández',
      region: 'Oriental',
      contact: 'maria.fernandez@capres.com',
      phone: '+58 416-4567890',
    },
    {
      name: 'Javier Morales',
      region: 'Zuliana',
      contact: 'javier.morales@capres.com',
      phone: '+58 412-5678901',
    },
    {
      name: 'Patricia Reyes',
      region: 'Insular',
      contact: 'patricia.reyes@capres.com',
      phone: '+58 414-6789012',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Delegados Regionales</h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          Representantes por Región
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {regions.map((region, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">{region.name}</h4>
              <p className="text-gray-600">{region.delegates} delegados</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p>
            Los delegados son representantes electos por los socios para
            participar en las asambleas y reuniones de la junta directiva. Su
            función principal es defender los intereses de los socios de su
            región y servir como enlace entre los asociados y la administración.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Lista de Delegados</h3>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Región
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Correo Electrónico
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teléfono
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {delegates.map((delegate, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {delegate.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {delegate.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={`mailto:${delegate.contact}`}
                      className="text-blue-600 hover:underline"
                    >
                      {delegate.contact}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {delegate.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
