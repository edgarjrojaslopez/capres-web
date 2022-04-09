import React from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import Logo from '../assets/images/capres.jpg';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';
import * as Yup from 'yup';
import axios from 'axios';

const RegistroFormik = () => {
  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    params: 'params',
  };

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/usuarios', data).then((response) => {
      console.log('Funciona!!!');
    });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(64).required('El campo es obligatorio'),
    username: Yup.string().min(3).max(64).required('El campo es obligatorio'),
    email: Yup.string()
      .email('Formato de correo inválido')
      .required('Debes ingresar una direcció de correo.'),
    password: Yup.string()
      .required()
      .min(8, 'Password es muy corto - mínimo 8 caracteres')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Debe contener mínimo 8 caracteres, una letra mayúscula, un número y un caracter especial'
      ),
  });
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
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form className="mb-0 space-y-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre Completo
                  </label>

                  <ErrorMessage name="name" component="span" />

                  <div className="mt-1">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border-gray-300 bg-gray-100 rounded-lg shadow-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cédula de Identidad
                  </label>
                  <ErrorMessage name="username" component="span" />
                  <div className="mt-1">
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className="w-full border-gray-300 bg-gray-100 rounded-lg shadow-sm"
                      placeholder="55555555"
                    />
                  </div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo Electrónico
                  </label>
                  <ErrorMessage name="email" component="span" />
                  <div className="mt-1">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border-gray-300 bg-gray-100 rounded-lg shadow-sm"
                      placeholder="aaa@aaa.com"
                    />
                  </div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <ErrorMessage name="password" component="span" />
                  <div className="mt-1">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="w-full border-gray-300 bg-gray-100 rounded-lg shadow-sm"
                      placeholder="Tu password"
                    />
                  </div>
                  <Button type="submit">Registro</Button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroFormik;
