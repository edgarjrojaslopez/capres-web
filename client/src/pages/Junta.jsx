const Junta = () => {
  const ConsejoAdminData = [
    { cargo: 'Presidente', nombre: 'Eloy Noriega', suplente: 'Victor Ojeda' },
    {
      cargo: 'Tesorero',
      nombre: 'Maria Elena Barrios',
      suplente: 'Miguel Maneiro',
    },
    { cargo: 'Secretario', nombre: 'Ali Leon', suplente: 'Raul Lucena' },
  ];
  const ConsejoVigilData = [
    { cargo: 'Presidente', nombre: 'Dora Castillo', suplente: 'Luis Vidal' },
    {
      cargo: 'Vice-Presidente',
      nombre: 'Nestor Mendoza',
      suplente: 'Daysi Seijas',
    },
    {
      cargo: 'Secretario',
      nombre: 'Josefina Castelero',
      suplente: 'Julio Terán',
    },
  ];
  return (
    <div className="mt-24 w-full  grow bg-hero-pattern bg-repeat">
      <div className="flex flex-col px-6 md:flex-row gap-2 w-full justify-between bg-hero-pattern items-start">
        <div className="border-2 prose prose-slate prose-p:my-0 prose-headings:my-1 pros-headings:text-slate-600 max-w-none border-gray-300 p-6 m-4 w-3/4 rounded-md bg-slate-50">
          <h3 className="text-gray-700/80 p-2">Junta Directiva de CAPRES</h3>
          <p className="p-2">
            <span className="font-medium">Consejo de Administración:</span>{' '}
            Tiene a su cargo la administración y dirección de todas las
            operaciones administrativas, financieras y económicas de la
            Asociación.
          </p>
          <div className="px-2">
            <table className="table-fixed p-2">
              <thead className="prose-thead:align-center">
                <tr>
                  <th>Consejo de Administración</th>
                </tr>
                <tr>
                  <th>Cargo</th>
                  <th>Titular</th>
                  <th>Suplente</th>
                </tr>
              </thead>
              <tbody>
                {ConsejoAdminData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.cargo}</td>
                    <td>{item.nombre}</td>
                    <td>{item.suplente}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-2">
              <span className="font-medium">Consejo de Vigilancia:</span> Es el
              órgano encargado de velar por el estricto cumplimiento de la Ley
              de Cajas de Ahorro y Fondos de Ahorro, su Reglamento, Los
              Estatutos, Reglamentos Internos y las decisiones de la Asamblea
              General de Delegados, así como del correcto funcionamiento,
              administración y buen manejo de los fondos de la Asociación.
            </p>
            <div className="p-2">
              <table className="table-fixed p-2">
                <thead className="prose-thead:align-center">
                  <tr>
                    <th>Consejo de Vigilancia</th>
                  </tr>
                  <tr>
                    <th>Cargo</th>
                    <th>Titular</th>
                    <th>Suplente</th>
                  </tr>
                </thead>
                <tbody>
                  {ConsejoVigilData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nombre}</td>
                      <td>{item.cargo}</td>
                      <td>{item.suplente}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="border-2 prose prose-slate prose-p:my-0 prose-headings:my-1 pros-headings:text-slate-600 max-w-none border-gray-300 p-6 m-4 w-1/4 rounded-md bg-slate-50"></div>
      </div>
    </div>
  );
};

export default Junta;
