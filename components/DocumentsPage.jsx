// components/DocumentsPage.jsx
// Documents Page Component
export default function DocumentsPage() {
  const documents = [
    {
      name: 'Formulario de Solicitud de Préstamo',
      type: 'PDF',
      size: '250 KB',
    },
    { name: 'Estatutos de la Caja de Ahorros', type: 'PDF', size: '500 KB' },
    { name: 'Manual de Procedimientos', type: 'PDF', size: '1.2 MB' },
    {
      name: 'Formato de Cancelación de Préstamo',
      type: 'DOCX',
      size: '180 KB',
    },
    { name: 'Solicitud de Afiliación', type: 'PDF', size: '300 KB' },
    { name: 'Políticas de Gestión de Riesgos', type: 'PDF', size: '800 KB' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Documentos</h2>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Descargas Disponibles</h3>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Documento
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tamaño
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{doc.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{doc.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{doc.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:underline">
                      Descargar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            ¿No encuentras el documento que buscas?
          </h3>
          <p className="mb-4">
            Si necesitas algún documento adicional o tienes preguntas sobre los
            formularios disponibles, no dudes en contactarnos.
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' }) &&
              setTimeout(() => document.getElementById('contact'), 500)
            }
          >
            Contáctanos
          </button>
        </div>
      </section>
    </div>
  );
}
