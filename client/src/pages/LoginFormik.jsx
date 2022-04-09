import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Logo from '../assets/images/capres.jpg';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';

function LoginFormik() {
  return (
    <div className="flex w-full h-screen bg-gray-100 justify-center items-center">
      <div className="border-2 shadow-lg shadow-slate-400 prose prose-slate prose-p:my-0 prose-headings:my-1 prose-headings:text-slate-600  border-gray-500 p-6 m-4 w-1/2 rounded-md bg-slate-200">
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
          <div className="-mb-2 text-gray-700 pt-0 text-2xl md:text-4xl font-bold pb-10 text-heading ">
            Log in
          </div>
          <div className="-mt-8">
            <span className="text-sm">
              No tienes una cuenta?{' '}
              <Link to="/registro" className="text-blue-600 font-medium">
                Registrate
              </Link>
            </span>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white mb-6 py-8 px-6 shadow rounded-lg sm:px-10">
              <Formik>
                <Form className="mb-0 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <Field
                      id="inputCrearUsuario"
                      name="name"
                      placeholder="Nombre Completo"
                      className="w-full h-10 border-gray-500 bg-gray-100 rounded-lg shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cédula de Identidad
                    </label>
                    <Field
                      id="inputCrearUsuario"
                      name="username"
                      placeholder="55555555"
                      className="w-full h-10 border-gray-500 bg-gray-100 rounded-lg shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Field
                      id="inputCrearUsuario"
                      name="email"
                      placeholder="Correo Electronico"
                      className="w-full h-10 border-gray-500 bg-gray-100 rounded-lg shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      id="inputCrearUsuario"
                      name="password"
                      placeholder="Password"
                      className="w-full h-10 border-gray-500 bg-gray-100 rounded-lg shadow-sm"
                    />
                  </div>
                  <Button type="submit">Registrar</Button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormik;
