import { FaCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

const Servicios = () => {
  const ServiciosData = [
    { path: '/retiro_haberes', servicio: 'Retiro de Haberes' },
    { path: '/prestamos_persona', servicio: 'Préstamos Personales' },
    { path: '/prestamos_vivienda', servicio: 'Préstamos de Vivienda' },
    { path: '/prestamos_vehiculo', servicio: 'Préstamos de Vehículos' },
    { path: '/fondo_especial', servicio: 'Fondo Especial de Programas (FEP)' },
  ];

  return (
    <div className="h-[81vh]">
      <h3>Servicios que ofrecemos a nuestros Asociados</h3>
      <p>
        A continuación se presentan los diferentes servicios que actualmente
        ofrece CAPRES:
      </p>
      <IconContext.Provider value={{ color: 'gray', size: '16px' }}>
        <ul className="list-none pl-0">
          {ServiciosData.map((servicio, index) => (
            <li key={index}>
              <Link to={servicio.path} className="no-underline">
                <span className="inline-flex items-center gap-2">
                  <FaCheck /> {servicio.servicio}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default Servicios;
