const Organizacion = () => {
  return (
    <div className="mt-24 w-full  grow bg-hero-pattern bg-repeat">
      <div className="flex flex-col px-6 md:flex-row gap-2 w-full justify-between bg-hero-pattern items-start">
        <div className="border-2 prose prose-slate prose-p:my-0 prose-headings:my-1 pros-headings:text-slate-600 max-w-none border-gray-300 p-6 m-4 w-3/4 rounded-md bg-slate-50">
          <h3>Organización Administrativa de CAPRES</h3>
          <p className="p-2">
            <span className="font-medium">Asesoría Jurídica:</span> Es la
            instancia de consulta legal en lo relativo a la interpretación de
            toda la normativa legal que rige la Caja de Ahorro, así como de las
            decisiones, acuerdos y resoluciones que adopten los Consejos de
            Administración y de Vigilancia, y la Asamblea General de Delegados.
          </p>
          <p className="p-2">
            <span className="font-medium">Gerente Ejecutivo:</span> Es designado
            por el Consejo de Administración siendo sus deberes y atribuciones:
          </p>
          <ul>
            <li>
              Coordinar y supervisar directamente al personal que ocupa las
              Jefaturas de las Divisiones de CAPRES e indirectamente al resto
              del personal de cada División.
            </li>
            <li>
              Los demás deberes y atribuciones que le establezca el Consejo de
              Administración.
            </li>
          </ul>
          <p className="p-2 font-medium">
            La Organización Administrativa de CAPRES está conformada por cinco
            (5) Divisiones:
          </p>
          <ul>
            <li>
              <span className="font-medium">División de Operaciones:</span> Su
              labor principal es la administración de la información de los
              afiliados y la prestación de los servicios que estos requieran,
              con relación a préstamos, retiros de haberes y reintegros, entre
              otros.
            </li>
            <li>
              <span className="font-medium">División de Finanzas:</span> Area
              responsable de la liquidación de los procesos generados por la
              División de Operaciones y la de Planes y Beneficios
              socio-económicos además de la elaboración, manejo y ejecución del
              presupuesto, administrar, controlar y custodiar las inversiones
              que realice CAPRES y demás valores financieros.
            </li>
            <li>
              <span className="font-medium">División de Contabilidad:</span> Es
              el área responsable del manejo de la Contabilidad y la elaboración
              y presentación del Balance General y el Estado de Pérdidas y
              Ganancias.
            </li>
            <li>
              <span className="font-medium">
                División de Planes de Inversiones y Beneficios Socio-Económicos:
              </span>
              Es la encargada de la ejecución de los programas de beneficios
              sociales que realiza CAPRES, tales como otorgamiento de Créditos
              con Garantía hipotecaria y créditos para la adquisición de
              vehículos entre otros.
            </li>
            <li>
              <span className="font-medium">División de Informática:</span>{' '}
              Responde por el asesoramiento en cuanto a Sistemas de información
              además de mantener los equipos de computación operativos, dar
              soporte al personal de CAPRES en las operaciones que éstos
              realizan.
            </li>
          </ul>
        </div>
        <div className="border-2 prose prose-slate prose-p:my-0 prose-headings:my-1 pros-headings:text-slate-600 max-w-none border-gray-300 p-6 m-4 w-1/4 rounded-md bg-slate-50"></div>
      </div>
    </div>
  );
};

export default Organizacion;
