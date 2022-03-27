import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { navItems } from './NavbarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false); /* state of component */
  const showNavbar = () => setNavbar(!navbar); /* Toggle Function */

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="bg-[#15171C]">
          <Link
            to="/"
            className="ml-[2rem] text-[2rem] h-5 flex justify-center items-center"
          >
            <FaIcons.FaBars onClick={showNavbar} />
          </Link>
          <h1 className="text-center ml-[200px] text-green-500">CAPRES</h1>
        </div>
        <nav className="bg-[#15171C] w-full flex justify-center fixed top-0 z-10">
          <ul className="w-full">
            <li>
              <Link
                to={item.path}
                className="ml-[2rem] text-[2rem] h-5 flex justify-center items-center"
              >
                <AiIcons.AiOutlineClose onClick={showNavbar} />
              </Link>
              {navItems.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
