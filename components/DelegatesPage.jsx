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
      region: 'Aduana Marítima de la Guaira',

      nombre: 'Janeth Vera',

      telefono: '(0416) 303.89.82',
    },

    {
      region: 'Aduana Aérea de Maiquetía',

      nombre: 'Gustavo Colmenares, Vigee Torres (Suplente)',

      telefono: '(0414) 232.43.98, (0414) 232.43.98',
    },

    {
      region: 'Región Capital (Los Ruices)',

      nombre: 'Lila Santos, Gladys Echenagucia (Suplente)',

      telefono: '(0414) 260.09.85, (0212) 207.25.94',
    },

    {
      region: 'Región Capital (CE)',

      nombre: 'Valentina Martínez, Irene Villamizar (Suplente)',

      telefono: '(0414) 324.52.90, (0212) 709.20.08',
    },

    {
      region: 'Mata de Coco',

      nombre: 'Nelly Mendoza, Nelsón Ramos (Suplente)',

      telefono: '(0416)634.99.87, (0212) 709.48.01',
    },

    {
      region: 'Región Central,',

      nombre: 'Dora Guillen',

      telefono: '(0414) 482.41.79',
    },

    {
      region: 'Puerto Cabello Aduana Marítima',

      nombre: 'Ana Hilda Andara',

      telefono: '(0424) 499.09.81',
    },

    {
      region: 'Sector Maracay',

      nombre: 'Luz Marina Molina, Francis Camacho (Suplente)',

      telefono: '(0416) 643.16.38, (0416) 615.80.58',
    },

    {
      region: 'Región Los Llanos',

      nombre: 'Carolina Perez',

      telefono: '(0246) 431.31.68',
    },

    {
      region: 'Región Centro Occidental',

      nombre: 'Tomas Valderrama',

      telefono: '(0412) 517.53.56',
    },

    {
      region: 'Región Zuliana (Tributos)',

      nombre: 'Gigliola D´Adosio, Maria Jose Bracho (Suplente)',

      telefono: '(0414) 668.13.55, (0261) 796.24.32',
    },

    {
      region: 'Región Zuliana (Aduana)',

      nombre: 'Ramón Segovia Feralia Toro (Suplente)',

      telefono: '(0416) 662.00.56 0261) 796.22.14',
    },

    {
      region: 'Región Los Andes',

      nombre: 'Mayra Santander, Willian Castillo (Suplente)',

      telefono: '(0414) 715.36.51',
    },

    {
      region: 'Región Nororiental',

      nombre: 'José Luis Prado, Diana Vargas (Suplente)',

      telefono: '(0416) 580.13.12, (0424) 886.22.51',
    },

    {
      region: 'Región Guayana (Tributos) Región Guayana (Aduana)',

      nombre: 'Guillermo Salazar, Marisela Fernandez',

      telefono: '(0426) 592.36.70, (0416) 987.18.35',
    },

    {
      region: 'Región Insular',
      nombre: 'Mariela Álvarez, Carlos Suarez (Suplente)',

      telefono: '(0416) 695.74.12, (0414) 787.88.68',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Delegados Regionales</h2>

      <section className="mb-8">
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
                  Región
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
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
                    {delegate.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {delegate.nombre}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {delegate.telefono}
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
