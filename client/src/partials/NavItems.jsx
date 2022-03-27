export const navItems = [
  { path: '/', name: 'Inicio', key: 'id-1' },
  {
    path: '/about',
    name: 'Nosotros',
    key: 'id-2',
    submenu: [
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
