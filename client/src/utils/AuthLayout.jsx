import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../partials/Footer';
import Footer01 from '../partials/Footer01';
import Header from '../partials/Header';

const AuthLayout = () => {
  return (
    <div className="  flex flex-col  justify-between items-center">
      <main className=" w-full grow">
        <Outlet />
        {/* main content */}
      </main>
    </div>
  );
};

export default AuthLayout;
