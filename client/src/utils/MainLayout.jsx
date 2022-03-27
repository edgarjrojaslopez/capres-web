import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../partials/Footer';
import Footer01 from '../partials/Footer01';
import Header from '../partials/Header';
/* import Navbar from '../partials/Navbar'; */
import Navbar from '../partials/navdrop/Navbar';

const MainLayout = () => {
  return (
    <div className="  flex flex-col  justify-between items-center">
      <div className=" grow ">
        <Header />
        {/* <Header /> */}
      </div>
      <main className=" w-full grow">
        <Outlet />
        {/* main content */}
      </main>
      <div className="bottom-0">
        {' '}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
