import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../utils/Button';

const Hero = () => {
  return (
    <div className="z-10 w-full h-screen bg-blend-overlay	 bg-gray-800/60  ">
      <div className=" w-full absolute bg-hero-image bg-center mix-blend-overlay bg-cover flex justify-start items-center h-full 	"></div>
      <div>
        <div className="flex h-screen">
          <div className="my-auto ml-10 z-30 ">
            <h4 className=" pl-2 text-2xl font-semibold md:text-4xl font-content text-white">
              Bienvenido a
            </h4>
            <h1 className="  text-6xl md:text-9xl font-body font-bold md:font-extrabold uppercase text-white  ">
              capres
            </h1>
            <span className="text-xl  pl-2 font-content font-bold text-gray-100">
              tu caja de ahorros
            </span>
            <div className="mt-6">
              {/* <button className="bg-blue-500 text-base md:text-lg text-gray-100 py-2 md:py-4 px-6 md:px-10">
                No tienes una cuenta?
              </button> */}
              <Button
                variant="primary"
                width="half"
                size="large"
                className="w-max"
              >
                <Link to="/registro" className="text-base md:text-lg">
                  No tienes una cuenta?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
