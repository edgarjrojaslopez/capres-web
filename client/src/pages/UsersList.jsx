import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UsersList = () => {
  const [listOfUsuarios, setListOfUsuarios] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/usuarios').then((response) => {
      setListOfUsuarios(response.data);
    });
  }, []);
  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cedula</th>
            <th>Correo Electronico</th>
            <th>Fecha Registro</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsuarios.map((value, key) => {
            return (
              <>
                <tr key={value.id}>
                  <td>{value.name}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.registerDate}</td>
                </tr>
              </>
            );
          })}
        </tbody>
        ;
      </table>
    </div>
  );
};

export default UsersList;
