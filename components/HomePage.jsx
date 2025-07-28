// components/HomePage.jsx

import Jumbotron from '@/components/Jumbotron';

export default function HomePage() {
  return (
    <div>
      <section className="mb-12">
        {/* <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a CAPRES</h2>
          <p className="max-w-2xl">
            La Caja de Ahorros y Previsión de los empleados del SENIAT es una
            institución financiera comprometida con el bienestar económico de
            sus socios. Ofrecemos servicios financieros seguros y confiables
            para ayudarte a alcanzar tus metas personales y familiares.
          </p>
        </div> */}
        <Jumbotron />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Nuestra Misión</h3>
          <p className="text-gray-600">
            Promover la cultura del ahorro y brindar servicios financieros
            accesibles que fortalezcan la economía de nuestros asociados.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Nuestra Visión</h3>
          <p className="text-gray-600">
            Ser la principal opción financiera para los empleados del SENIAT,
            reconociendo por nuestra solidez, innovación y servicio
            personalizado.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Valores</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Transparencia</li>
            <li>Confianza</li>
            <li>Responsabilidad</li>
            <li>Solidaridad</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Noticias Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Nueva Línea de Crédito para Vivienda',
              date: '15/03/2025',
              summary:
                'CAPRES anuncia una nueva línea de crédito para vivienda con tasas preferenciales para socios activos.',
            },
            {
              title: 'Asamblea General Ordinaria',
              date: '10/03/2025',
              summary:
                'Se informa a todos los socios sobre la celebración de la Asamblea General Ordinaria el próximo mes de abril.',
            },
          ].map((news, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <span className="text-sm text-blue-600 font-medium">
                {news.date}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.summary}</p>
              <button className="text-blue-600 hover:underline text-sm">
                Leer más →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} // ✅ Asegúrate de que esto esté presente
