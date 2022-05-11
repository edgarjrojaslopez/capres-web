import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Profiles = () => {
  const [listOfProfiles, setListOfProfiles] = React.useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/profiles')
      .then((res) => setListOfProfiles(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="flex flex-col h-full">
      {listOfProfiles.map((value, key) => {
        return (
          <div className="h-screen">
            <div
              className="flex flex-col  mb-3 h-full md:flex-row md:gap-3"
              key={value.nombre}
            >
              <div className=" flex flex-wrap w-full p-2  h-full md:w-2/5 bg-gray-100">
                Nombre: {value.nombre}
                <br />
                Correo: {value.correo}
                <br />
                Tlf. Oficina: {value.telf_oficina}
                <br />
                Tlf. Habitación: {value.telf_habitacion}
              </div>
              <div className=" flex flex-col w-full p-2 h-full md:w-3/5 bg-gray-100">
                region: {value.region}
                <br />
                cargo: {value.cargo}
                <br />
                grado: {value.grado}
                <br />
                sueldo: {value.sueldo}
                <br />
                banco: {value.banco}
                <br />
                cuenta: {value.cuenta}
                <br />
                porcentaje: {value.porcentaje}
                <br />
                procesado: {value.procesado}
                <br />
                fecha de ingreso: {value.fecha}
                <br />
                capres_procesado: {value.capres_procesado}
                <br />
                capres_user: {value.capres_user}
                <br />
                capres_fecha: {value.capres_fecha}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profiles;
