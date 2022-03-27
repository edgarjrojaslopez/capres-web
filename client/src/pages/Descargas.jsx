import { IconContext } from 'react-icons';
import Estatutos from '../assets/files/marco_legal/estatutos_2.pdf';
import LeyCajas from '../assets/files/marco_legal/ley_cajas_ahorro.pdf';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';

const Descargas = () => {
  const DownloadsItems = [
    {
      division: 'Operaciones',
      contenido: [
        {
          titulo: 'Afiliaciones',
          archivo: [
            {
              nombre: 'Afiliación',
              path: '../assets/files/operaciones/afiliacion.pdf',
            },
          ],
        },
        {
          titulo: 'Cambio de Porcentaje',
          archivo: [
            {
              nombre: 'Cambio Porcentaje',
              path: '../assets/files/operaciones/cambio_porcentaje.pdf',
            },
          ],
        },
        {
          titulo: 'Retiro de Haberes',
          archivo: [
            {
              nombre: 'Retiro Parcial',
              path: '../assets/files/operaciones/retiro_hab_parcial.pdf',
            },
            {
              nombre: 'Retiro Total.pdf',
              path: '../assets/files/operaciones/retiro_hab_total.pdf',
            },
          ],
        },
        {
          titulo: 'Préstamos Personales',
          archivo: [
            {
              nombre: 'Préstamos Persona',
              path: '../assets/files/operaciones/prestamos.pdf',
            },
          ],
        },
      ],
    },
    {
      division: 'Planes y Beneficios',
      contenido: [
        {
          titulo: 'Préstamos de Vehículos',
          archivo: [
            {
              nombre: 'Prést. Adquicision Vehículos',
              path: '../assets/files/planes/pres_esp_adq_vehiculo.pdf',
            },
            {
              nombre: 'Liberación Vehículos',
              path: '../assets/files/planes/reg_adq_veh.pdf',
            },
            {
              nombre: 'Requisitos Adquisición Vehículo',
              path: '../assets/files/planes/vehiculonuevo.pdf',
            },
            {
              nombre: 'Solicitud Cred. Resc. Vehiculo',
              path: '../assets/files/planes/pres_esp_resc_vehiculo.pdf',
            },
            {
              nombre: 'Reglamento Liberación Vehículo',
              path: '../assets/files/planes/reg_lib_veh.pdf',
            },
            {
              nombre: 'Requisitos Liberación Créd. Vehiculo ',
              path: '../assets/files/planes/rescatevehicular.pdf',
            },
            {
              nombre: 'mon_max_vehiculo.pdf',
              path: '../assets/files/planes/mon_max_vehiculo.pdf',
            },
          ],
        },
        {
          titulo: 'Préstamos de Vivienda',
          archivo: [
            {
              nombre: 'Solicitud Prést. Adq. Vivienda',
              path: '../assets/files/planes/pres_esp_adq_viv.pdf',
            },
            {
              nombre: 'Monto Máx. Adq. Vivienda',
              path: '../assets/files/planes/mon_max_vivienda.pdf',
            },
            {
              nombre: 'Reclamento Adq. Vivienda',
              path: '../assets/files/planes/reg_adq_viv.pdf',
            },
            {
              nombre: 'Solicitud Créd. Remod. Vivienda',
              path: '../assets/files/planes/pres_esp_rem_vivienda.pdf',
            },
            {
              nombre: 'Mnto. Máx. Remod. Vivienda',
              path: '../assets/files/planes/mon_max_remodelacion.pdf',
            },
            {
              nombre: 'Reglamento Remod. Vivienda',
              path: '../assets/files/planes/reg_rem_viv.pdf',
            },
            {
              nombre: 'Solicitud Créd. Resc. Vivienda',
              path: '../assets/files/planes/rescatevivienda.pdf',
            },
          ],
        },
      ],
    },
    {
      division: 'Marco Legal',
      contenido: [
        {
          titulo: 'Estatutos',
          archivo: [
            {
              nombre: 'Estatutos Capres',
              path: '../assets/files/marco_legal/estatutos_2.pdf',
            },
            {
              nombre: 'Ley Cajas de Ahorro',
              path: '../assets/files/marco_legal/ley_cajas_ahorro.pdf',
            },
          ],
        },
      ],
    },
    {
      division: 'Seguros',
      contenido: [
        {
          titulo: 'Solicitudes',
          archivo: [
            {
              nombre: 'poliza_exceso.pdf',
              path: '../assets/files/seguros/poliza_exceso.pdf',
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <section className="pl-2 md:pl-16">
        <h1 className="text-center font-body">Descarga de archivos</h1>
        <IconContext.Provider value={{ color: 'gray', size: '16px' }}>
          <div className="list-none pl-0">
            {DownloadsItems.map((item, index) => (
              <div key={index}>
                <h2>{item.division}</h2>
                {item.contenido.map((item2, index2) => (
                  <div key={index2} className="p-2">
                    <h3>{item2.titulo}</h3>
                    {item2.archivo.map((item3, index3) => (
                      <div
                        key={index3}
                        className="p-2  w-5/6 flex flex-col md:flex-row justify-between items-center"
                      >
                        <span className="ml-0">{item3.nombre}</span>

                        <a
                          href={item3.path}
                          download
                          target="_self"
                          className="no-underline px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg"
                        >
                          Descargar
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </IconContext.Provider>
      </section>
    </>
  );
};

export default Descargas;
