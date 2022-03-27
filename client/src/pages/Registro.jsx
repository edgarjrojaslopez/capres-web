import React, { useRef } from 'react';
import Logo from '../assets/images/capres.jpg';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';

const Registro = () => {
  /* Initial Refs */
  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  /* On SignUp */
  const handleSignUp = () => {
    const registerData = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirm: passwordConfirmRef.current.value,
    };
    console.log({ registerData });
  };

  return (
    <div className=" flex w-full h-screen bg-gray-100 justify-center items-center">
      <div className="border-2 shadow-lg shadow-slate-400 prose prose-slate prose-p:my-0 prose-headings:my-1 prose-headings:text-slate-600  border-gray-300 p-6 m-4 w-1/2 rounded-md bg-slate-200">
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
          <div className="text-gray-700 pt-0 text-2xl md:text-4xl font-bold pb-10 text-heading ">
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
            <div className="bg-white mb-6 py-6 px-6 shadow rounded-lg sm:px-10">
              <form className="mb-0 space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Ingresar email"
                      required
                      ref={emailRef}
                      className="w-full border-gray-300 rounded-lg shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Usuario
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      required
                      ref={userNameRef}
                      placeholder="Número de cédula"
                      className="w-full border-gray-300 rounded-lg shadow-sm"
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
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="new-password"
                      placeholder="Contraseña"
                      ref={passwordRef}
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="passwordConfirm"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirmar Password
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      autoComplete="passwordConfirm"
                      placeholder="Confirmar contraseña"
                      ref={passwordConfirmRef}
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <Button
                    width="full"
                    font_weight="semibold"
                    onClick={handleSignUp}
                  >
                    <span className="text-sm">Registrarse</span>
                  </Button>
                </div>
                <div>
                  <span className="text-sm text-gray-600">
                    ¿Olvidaste tu contraseña?{' '}
                    <Link to="/" className="font-semibold text-blue-600">
                      Recuperar
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
