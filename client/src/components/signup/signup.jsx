import React, { useRef } from 'react';
import Logo from '../../assets/images/capres.jpg';
import { Link } from 'react-router-dom';
import Button from '../../utils/Button';

function signup(props) {
  const emailRef = useRef(null);
  const fullNameRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const handleSignUp = () => {
    console.log(
      fullNameRef.current.value,
      userNameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      passwordConfirmRef.current.value
    );
  };

  return (
    <div className=" flex w-full h-screen bg-gray-100 justify-center items-center">
      <div className=" flex flex-col min-w-full items-center">
        <div className="-mt-0 md:mt-auto">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo Capres"
              className="h-20 md:h-auto w-auto"
            />
          </Link>
        </div>
        <div className="text-gray-700 pt-8 text-2xl md:text-4xl font-bold pb-10 text-heading ">
          Registra tu cuenta
        </div>
        <div className="-mt-8">
          <span className="text-sm">
            Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-blue-600 font-medium">
              Inicia sesión
            </Link>
          </span>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <div className='className="mb-0 space-y-6'>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Ingresar nombre completo"
                    ref={fullNameRef}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Usuario
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Ingresa Numero Cedula"
                    ref={userNameRef}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="email"
                    name="correo"
                    id="correo"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Correo Electrónico"
                    ref={emailRef}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Ingreasr password"
                    ref={passwordConfirmRef}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Ingreasr password"
                    ref={passwordRef}
                  />
                </div>
              </div>

              <div>
                <button
                  className="w-full bg-blue-600 text-gray-100 px-6 py-3"
                  onClick={handleSignUp}
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
