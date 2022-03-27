import Header from './partials/Header';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './utils/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Socios from './pages/Socios';
import AuthLayout from './utils/AuthLayout';
import Login from './pages/Login';
import Registro from './pages/Registro';
import AcercaDe from './pages/AcercaDe';
import Historia from './pages/Historia';
import Junta from './pages/Junta';
import Organizacion from './pages/Organizacion';
import AcercaDe01 from './pages/AcercaDe01';
import Delegados from './pages/Delegados';
import Servicios from './pages/Servicios';
import RetiroHaberes from './pages/RetiroHaberes';
import PrestamosPersona from './pages/PrestamosPersona';
import PrestamosVivienda from './pages/PrestamosVivienda';
import PrestamosVehiculo from './pages/PrestamosVehiculo';
import FondoEspecial from './pages/FondoEspecial';
import Descargas from './pages/Descargas';
import Contacto from './pages/Contacto';
import Dashboard from './pages/Dashboard';
import ContentLayout from './utils/ContentLayout';
import Signup from './components/signup/signup';
import LoginNew from './pages/LoginNew';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/acercade" element={<AcercaDe01 />} />
        <Route path="/about/historia" element={<Historia />} />
        <Route path="/about/junta" element={<Junta />} />
        <Route path="/about/organizacion" element={<Organizacion />} />

        <Route element={<ContentLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prestamos_vivienda" element={<PrestamosVivienda />} />
          <Route path="/retiro_haberes" element={<RetiroHaberes />} />
          <Route path="/prestamos_persona" element={<PrestamosPersona />} />
          <Route path="/socios" element={<Socios />} />
          <Route path="/delegados" element={<Delegados />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/prestamos_vehiculo" element={<PrestamosVehiculo />} />
          <Route path="/fondo_especial" element={<FondoEspecial />} />
        </Route>
        {/* <Route element={<DownloadsLayout />}></Route> */}
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/login-new" element={<LoginNew />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/registro" element={<Registro />} />
      </Route>
    </Routes>
  );
}

export default App;
