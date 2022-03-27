import { navItems } from './NavItems';
import { MdClose } from 'react-icons/md';
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

const NavMobile = ({ active, showMenu }) => {
  return (
    <div className="">
      <ul
        className={
          active
            ? 'flex-col fixed inset-0 top-28 flex min-w-full justify-center items-center'
            : 'hidden'
        }
      >
        <IconContext.Provider
          value={{
            className:
              'cursor-pointer absolute top-8 right-10  text-gray-600 text-5xl',
          }}
        >
          <MdClose onClick={showMenu} />
        </IconContext.Provider>

        <li className=" ">
          {navItems.map((item) => (
            <Link to={item.path} key={item.name} className="block mb-4">
              {item.name}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
