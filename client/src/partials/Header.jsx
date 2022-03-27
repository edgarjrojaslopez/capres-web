import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/capres.jpg';
import { navItems } from './NavItems';
import { IconContext } from 'react-icons';
import NavMobile from './NavMobile';
import Button from '../utils/Button';
import { MdClose } from 'react-icons/md';
import ButtonNav from '../utils/ButtonNav';
import { Menu, Transition } from '@headlessui/react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  /* const onScroll = () => {}; */

  const onScroll = () => {
    if (window.scrollY >= 96) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', onScroll);
  return (
    <div className={navbar ? 'navBar solid' : 'navBar'}>
      <div className="md:flex py-2 md:px-10 px-7 items-center justify-between">
        <Link to="/" className="">
          <img
            src={Logo}
            alt="Logo Capres"
            className={navbar ? 'logo logo-small' : 'logo'}
          />
        </Link>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <MdClose className="close-react-icon" />
          ) : (
            <FaBars className="fabars-react-icon" />
          )}
        </div>
        <div className=" md:bg-transparent inline-flex">
          {' '}
          <ul
            className={`md:top-0  bg-blue-600 md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
            ${
              open
                ? 'top-24 opacity-100 md:bg-transparent'
                : 'top-[-490px] md:opacity-100 opacity-0'
            } `}
          >
            <li className="li-text">
              <Link to="/" className="link" onClick={() => setOpen(!open)}>
                inicio
              </Link>
            </li>
            <Menu as="li" className="li-text">
              <Menu.Button
                to="/nosotros"
                onClick={() => setOpen(!open)}
                className="hover:text-white font-medium uppercase text-blue-100"
              >
                Nosotros
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute mt-4 w-80 rounded-b-md bg-blue-700 md:bg-blue-600/60 py-4 md:mt-12">
                  <ul>
                    <li className="min-w-max py-2 px-4 text-blue-200 hover:bg-blue-700 hover:text-gray-100 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && 'bg-blue-700'}`}
                            to="/about/acercade"
                          >
                            Acerca de
                          </Link>
                        )}
                      </Menu.Item>
                    </li>
                    <li className="min-w-max py-2 px-4 text-blue-200 hover:bg-blue-700 hover:text-gray-100 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && 'bg-blue-700'}`}
                            to="/about/historia"
                          >
                            Historia
                          </Link>
                        )}
                      </Menu.Item>
                    </li>
                    <li className="min-w-max py-2 px-4 text-blue-200 hover:bg-blue-700 hover:text-gray-100 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && 'bg-blue-700'}`}
                            to="/about/junta"
                          >
                            Junta Directiva
                          </Link>
                        )}
                      </Menu.Item>
                    </li>
                    <li className="min-w-max py-2 px-4 text-blue-200 hover:bg-blue-700 hover:text-gray-100 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && 'bg-blue-700'}`}
                            to="/about/organizacion"
                          >
                            Organización administrativa
                          </Link>
                        )}
                      </Menu.Item>
                    </li>
                  </ul>
                </Menu.Items>
              </Transition>
            </Menu>
            <li className="li-text">
              <Link
                to="/socios"
                className="link"
                onClick={() => setOpen(!open)}
              >
                socios
              </Link>
            </li>
            <li className="li-text">
              <Link
                to="/delegados"
                className="link"
                onClick={() => setOpen(!open)}
              >
                delegados
              </Link>
            </li>
            <li className="li-text">
              <Link
                to="/servicios"
                className="link"
                onClick={() => setOpen(!open)}
              >
                servicios
              </Link>
            </li>
            <li className="li-text">
              <Link
                to="/descargas"
                className="link"
                onClick={() => setOpen(!open)}
              >
                descargas
              </Link>
            </li>
            <li className="li-text">
              <Link
                to="/contacto"
                className="link"
                onClick={() => setOpen(!open)}
              >
                contacto
              </Link>
            </li>

            <div>
              <ButtonNav>
                <Link to="/login">Ingresa ya</Link>
              </ButtonNav>
            </div>
          </ul>{' '}
        </div>
      </div>
    </div>
  );
};

export default Header;
