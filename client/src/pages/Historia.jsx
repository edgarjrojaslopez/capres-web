const Historia = () => {
  const AdministracionData = [
    {
      nombre: 'Hector Rivas P.',
      cargo: 'Presidente',
    },
    {
      nombre: 'Alicia de Uzcátegui',
      cargo: 'Vice-Presidente',
    },
    {
      nombre: 'Luis Hernándex',
      cargo: 'Tesorero',
    },
    {
      nombre: 'Claudia Rodríguez',
      cargo: 'Secretaria',
    },
    {
      nombre: 'Ender Parra',
      cargo: 'Vocal',
    },
    {
      nombre: 'Gustavo Piñango',
      cargo: 'Suplente',
    },
    {
      nombre: '  Ruben Núñez',
      cargo: 'Suplente',
    },
    {
      nombre: 'Antonio Tonelli',
      cargo: 'Suplente',
    },
    {
      nombre: 'Tibizay Valderrama',
      cargo: 'Suplente',
    },
  ];
  const VigilanciaData = [
    { nombre: 'Fernando Villasmil', cargo: 'Presidente' },
    { nombre: 'Jose Salinas', cargo: 'VicePresidente' },
    { nombre: 'Lisel Landa', cargo: 'Secretaria' },
    { nombre: 'Hernan Santamaria', cargo: 'Suplente' },
    { nombre: 'Elina Pou Ruan', cargo: 'Suplente' },
  ];
  return (
    <div className="mt-24 w-full  grow bg-hero-pattern bg-repeat">
      <div className="flex flex-col px-6 md:flex-row gap-2 w-full justify-between bg-hero-pattern items-start">
        <div className="border-2 prose prose-slate prose-p:my-0 prose-headings:my-1 pros-headings:text-slate-600 max-w-none border-gray-300 p-6 m-4 w-3/4 rounded-md bg-slate-50">
          <h3 className=" text-gray-700/80 p-2">Historia de CAPRES-SENIAT</h3>
          <p className="p-2 ">
            El día 22 de Junio de 1995, 53 funcionarios adscritos al Servicio
            Nacional Integrado de Administración Tributaria (SENIAT) se
            reunieron a objeto de constituir lo que es hoy “La Caja de Ahorro y
            Previsión de los Empleados del Servicio Nacional Integrado de
            Administración Aduanera y Tributaria SENIAT – CAPRES”; teniendo por
            objeto principal establecer y fomentar el ahorro sistemático y en
            general procurar para sus asociados toda clase de beneficios
            socioeconómicos.
          </p>
          <p className="p-2">
            La primera Junta Directiva estuvo conformada por:
          </p>
          <div className="px-2">
            <table className="table-fixed p-2">
              <thead className="prose-thead:align-center">
                <tr>
                  <th>Consejo de Administración</th>
                </tr>
              </thead>

              <tbody>
                {AdministracionData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nombre}</td>
                    <td>{item.cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-2">
            <table className="table-fixed p-2">
              <thead className="prose-thead:align-center">
                <tr>
                  <th>Consejo de Vigilancia</th>
                </tr>
              </thead>

              <tbody>
                {VigilanciaData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nombre}</td>
                    <td>{item.cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="p-2">
            En esta misma fecha fueron aprobados sus primeros estatutos, los
            cuales experimentaron su primera modificación en Asamblea
            Extraordinaria de Asociados celebrada el día 17 de Febrero de 2001
          </p>
        </div>
        <div className="border-2 prose prose-slate prose-p:my-0 prose-headings:my-1 pros-headings:text-slate-600 max-w-none border-gray-300 p-6 m-4 w-1/4 rounded-md bg-slate-50"></div>
      </div>
    </div>
  );
};

export default Historia;
