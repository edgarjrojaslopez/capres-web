// components/Footer.jsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">CAPRES</h3>
            <p className="text-sm">
              Caja de Ahorros y Previsión de los empleados del SENIAT
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:underline">
                  Préstamos
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:underline">
                  Documentos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contáctenos
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Área Privada
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                ...
              </a>
              <a href="#" className="hover:text-blue-400">
                ...
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} CAPRES - Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
