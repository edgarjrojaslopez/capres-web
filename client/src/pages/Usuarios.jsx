import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Usuarios = () => {
  const [listOfUsuarios, setListOfUsuarios] = React.useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/usuarios')
      .then((res) => setListOfUsuarios(res.data))
      .catch((err) => console.log(err));
  });
  return <>console.log({listOfUsuarios});</>;
};

export default Usuarios;
