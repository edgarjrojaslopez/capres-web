// components/Jumbotron.jsx
import Link from 'next/link';

const Jumbotron = ({
  title = 'Bienvenido a CAPRES',
  subtitle = 'Regístrate como socio y accede a nuestros servicios financieros.',
  buttonText = 'Ingresa a tu cuenta',
  buttonLink = '/login',
}) => {
  return (
    <section className="bg-blue-600 text-white py-20 px-2">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4">{title}</h2>
        <p className="text-xl mb-8">{subtitle}</p>
        <Link
          href={buttonLink}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition-colors font-bold text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default Jumbotron;
