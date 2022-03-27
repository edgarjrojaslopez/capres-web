import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const navItems = [
  { path: '/', name: 'Inicio', key: 'id-1' },
  {
    path: '/about',
    name: 'Nosotros',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    key: 'id-2',
    subNav: [
      { path: '/us', name: 'Acerca de', key: 'id-8' },
      { path: '/historia', name: 'Historia', key: 'id-9' },
      { path: '/junta', name: 'Junta Directiva', key: 'id-10' },
      {
        path: '/organizacion',
        name: 'Organización Administrativa',
        key: 'id-11',
      },
    ],
  },
  { path: '/socios', name: 'Socios', key: 'id-3' },
  { path: '/delegados', name: 'delegados', key: 'id-4' },
  { path: '/servicios', name: 'Servicios', key: 'id-5' },
  { path: '/descargas', name: 'Descargas', key: 'id-6' },
  { path: '/contacto', name: 'Contacto', key: 'id-7' },
];
