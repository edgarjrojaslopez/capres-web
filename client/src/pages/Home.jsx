import React from 'react';
import Hero from '../partials/Hero';
import Foo from '../partials/Foo';
import Feature from '../utils/Feature';
import HeroContent from '../partials/HeroContent';
import Content from '../partials/Content';
import ContentReverse from '../partials/ContentReverse';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=" w-full grow">
      <div className="">
        <Hero />
      </div>
      <div className=" border-b-2 pb-8 border-gray-200">
        <Feature />
      </div>
      <div className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h1 className="w-full mb-6 md:pb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Servicios que presta CAPRES a sus asociados
            </h1>
          </div>
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Retiro de haberes
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base md:pb-4 text-gray-700 md:text-lg">
                  Los asociados podrán solicitar el retiro de haberes bien sea
                  Parcial o Total
                </p>
                <p className="text-base md:pb-4 text-gray-700 md:text-lg line-clamp-3">
                  El asociado co un minimo de seis (06) meses de antigüedad
                  puede solicitar su retiro parcial, hasta un maximo del 80% de
                  sus haberes una vez deducidos los saldos pendientes del
                  asociado con CAPRES.
                </p>
                <p className="text-base md:pb-4 text-gray-700 md:text-lg">
                  El retiro total de los haberes sólo se permitirá cuando se
                  pierda legalmente la condición de asociado o por retiro
                  voluntario
                </p>
                <Button size="large" width="third" variant="primary">
                  <Link to="/retiro_haberes" className="text-white">
                    Leer mas....
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col-reverse md:grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Préstamos Personales
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base md:pb-6 text-gray-700 md:text-lg">
                  CAPRES podrá conceder a los asociados que tengan una
                  antigüedad superior a seis (6) meses las siguientes clases de
                  préstamos:
                </p>
                <div className="text-base md:pb-6 text-gray-700 md:text-lg">
                  <ul className=" pl-8 list-disc list inside">
                    <li>Préstamos a Corto Plazo</li>
                    <li>Préstamos a Mediano Plazo</li>
                    <li>Préstamos a Largo Plazo</li>
                  </ul>
                </div>
                <Button size="large" width="third" variant="primary">
                  <Link to="/prestamos_persona" className="text-white">
                    Leer mas...
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Préstamos para vivienda
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base md:pb-6 text-gray-700 md:text-lg">
                  Capres podrá otorgar a sus afiliados, previo cumplimiento de
                  los requisitos, préstamos para{' '}
                  <span>
                    <strong>adquisición </strong>
                  </span>{' '}
                  o{' '}
                  <span>
                    <strong>remodelación</strong>
                  </span>{' '}
                  de vivienda principal.
                </p>
                <Button size="large" width="third" variant="primary">
                  <Link to="/prestamos_vivienda" className="text-white">
                    Leer mas...
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col-reverse md:grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Préstamos para vehículos
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base md:pb-6 text-gray-700 md:text-lg">
                  Capres podrá otorgar a sus afiliados, previo cumplimiento de
                  los requisitos, préstamos para adquisición de o recuperación
                  de vehículos.
                </p>
                <Button size="large" width="third" variant="primary">
                  <Link to="/prestamos_vehiculo" className="text-white">
                    Leer mas...
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Fondo Especial para Programas (FEP)
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base md:pb-6 text-gray-700 md:text-lg">
                  Capres podrá otorgar a sus afiliados, previo cumplimiento de
                  los requisitos, préstamos para adquisición de o recuperación
                  de vehículos.
                </p>
                <Button size="large" width="third" variant="primary">
                  <Link to="/fondo_especial" className="text-white">
                    Leer mas...
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
