const AcercaDe = () => {
  return (
    <div className="mt-24 w-full  grow bg-hero-pattern bg-repeat">
      <div className="flex flex-col md:flex-row gap-4 w-full justify-between bg-hero-pattern items-center">
        {/* <div className="font-content px-10 py-12 w-full container  md:w-3/4 min-h-full"> */}
        <div className="container h-full w-3/4">
          <div className="bg-gray-50 p-6 rounded-md border-2 border-gray-300/60 h-screen w-full prose max-w-none prose-p:my-2 prose-h1:mb-0 prose-h1:text-3xl prose-p:text-gray-600/80">
            <h1 className="font-medium text-gray-700/80 p-2">
              Acerca de CAPRES
            </h1>
            <p className="p-4 ">
              La Caja de Ahorros y Previsión de los Empleados del Servicio
              Nacional Integrado de Administración Aduanera y Tributaria
              (SENIAT) “CAPRES”, es una asociación civil sin fines de lucro, con
              personalidad jurídica y patrimonio propio. Su función principal es
              la de fomentar el ahorro, garantizando a sus asociados la
              satisfacción de necesidades de índole económico y social.
            </p>
            <p className="p-4  ">
              Constituida según documento inscrito en la Oficina de Registro
              Inmobiliario del Primer Circuito del Municipio Sucre del Estado
              Miranda, en fecha 21 de agosto de 1995, bajo el N° 41, Tomo 23 del
              Protocolo Primero, registrada ante la Superintendencia de Cajas de
              Ahorro del Ministerio de Finanzas bajo el N° 553, Sector Público.
            </p>
            <h1 className="font-medium text-gray-700/80 p-2">Misión</h1>
            <p className="p-4">
              Satisfacer las necesidades socio económicas, recreacionales de
              esparcimiento y demandas en general de todos los Asociados a
              través de políticas acorde con sus necesidades y el
              establecimiento de una relación transparente, confiable, eficiente
              que garantice una adecuada administración de sus ahorros y
              dedicada a satisfacer plenamente las demandas financieras de los
              asociados bajo exigentes patrones de ética y responsabilidad.
            </p>
            <h1 className="font-medium text-gray-700/80 p-2">Visión</h1>
            <p className="p-4">
              Consolidar de manera progresiva los beneficios y planes a favor de
              los asociados, mediante una administración honesta y comprometida
              con los intereses colectivos de los asociados coadyuvando en el
              mejoramiento e incremento del nivel de vida de los socios.
            </p>
            <h1 className="font-medium text-gray-700/80 p-2">Objeto</h1>
            <p className="p-4">
              <ul className="list-disc list-inside">
                <li>
                  Fomentar el ahorro sistemático y estimular hábitos de economía
                  y previsión social entre sus asociados.
                </li>
                <li>
                  Conceder préstamos en dinero en efectivo, en beneficio
                  exclusivo de sus asociados, a un interés preferencial y con
                  facilidades de pago.
                </li>
                <li>
                  Procurar para sus asociados otros beneficios socioeconómicos
                  tales como la ayuda mutua, el montepío, la extensión de
                  póliza.
                </li>
                <li>
                  Procurar el financiamiento para la adquisición, remodelación o
                  liberación de viviendas.
                </li>
                <li>
                  Procurar el financiamiento para la adquisición de vehículos, a
                  tal fin podrá celebrar contratos con las empresas fabricantes
                  o comercializadoras del ramo específico.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="font-content px-10 md:px-0 md:pr-10 py-12 w-full md:w-1/4 h-full">
          <div className="bg-gray-50 p-6 rounded-md border-2 border-gray-300/60 h-screen">
            col 2
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AcercaDe;
