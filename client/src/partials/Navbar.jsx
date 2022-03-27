import React from 'react';
import Logo from '../assets/images/capres.jpg';
import { menuItems } from './menuItems';

const Navbar = () => {
  return (
    <div className="w-full">
      <header className="flex w-full py-2 px-7 justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" className="h-24 py-2 w-auto " />
        </div>

        <nav className="inline-flex">
          <ul className="flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="text-xl">
                <a href="/#" className="text-gray-600">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
