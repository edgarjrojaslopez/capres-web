const Delegados = () => {
  const DelegadosData = [
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

    { region: 'Región Capital (Plaza Venezuela)', nombre: '', telefono: '' },

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
    <>
      <h3 className="text-gray-700/80 p-2">Delegados Regionales</h3>
      <p className="p-2">
        Los Delegados son los representantes de los Asociados de CAPRES por cada
        región Administrativa, debidamente electos en Asamblea parcial de
        Asociados y acreditados ante el Consejo de Administración y de
        Vigilancia de la Asociación.
      </p>
      <h3 className="text-center text-gray-700/80 p-2">
        Delegados actuales de CAPRES
      </h3>
      <div className="px-2">
        <table>
          <thead>
            <tr>
              <th>Región Administrativa</th>
              <th>Delegado(s)</th>
              <th>Teléfono(s)</th>
            </tr>
          </thead>
          <tbody>
            {DelegadosData.map((delegado, index) => (
              <tr key={index}>
                <td>{delegado.region}</td>
                <td>{delegado.nombre}</td>
                <td>{delegado.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Delegados;
