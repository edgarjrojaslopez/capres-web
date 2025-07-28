// components/AboutPage.jsx
// About Page Component
export default function AboutPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Historia de CAPRES</h3>
        <p className="mb-4">
          CAPRES fue creada en 1985 con el objetivo de proveer un sistema de
          ahorro y préstamo seguro y accesible para los empleados del SENIAT. A
          lo largo de estos años, hemos crecido y evolucionado para adaptarnos a
          las necesidades cambiantes de nuestros asociados.
        </p>
        <p className="mb-4">
          Nuestra trayectoria ha estado marcada por el compromiso con la
          transparencia, la responsabilidad social y el desarrollo sostenible de
          nuestros socios.
        </p>
        <p>
          Actualmente contamos con más de 10,000 socios activos y ofrecemos una
          amplia gama de productos y servicios financieros diseñados
          específicamente para el colectivo SENIAT.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Junta Directiva</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Dr. Juan Pérez',
              role: 'Presidente',
              image: 'https://placehold.co/300x300?text=Presidente',
            },
            {
              name: 'Lic. María Gómez',
              role: 'Vicepresidente',
              image: 'https://placehold.co/300x300?text=Vicepresidente',
            },
            {
              name: 'Ing. Carlos Astudillo',
              role: 'Tesorero',
              image: 'https://placehold.co/300x300?text=Tesorero',
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Organigrama</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">
            El organigrama detallado de CAPRES está disponible en formato PDF
            para su descarga desde la sección de Documentos.
          </p>
        </div>
      </section>
    </div>
  );
}
