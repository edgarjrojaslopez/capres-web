import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';
import Logo from '../assets/images/capres.jpg';
import AuthContext from '../context/AuthProvider';

const LoginNew = () => {
  const { setAuth } = useContext(AuthContext);
  /* Referencias (Ref) */
  const userRef = useRef();
  const errRef = useRef();

  /* State */
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  /* Effects */
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <section>
          <div className=" flex w-full h-screen bg-gray-100 justify-center items-center">
            <div className="border-2 shadow-lg shadow-slate-400 prose prose-slate prose-p:my-0 prose-headings:my-1 prose-headings:text-slate-600  border-gray-300 p-6 m-4 w-1/2 rounded-md bg-slate-200">
              <div className=" flex flex-col min-w-full items-center">
                <h1>Estás logeado!!!</h1>
                <br />
                <p>
                  <Link to="/">Volver al inicio</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className=" flex w-full h-screen bg-gray-100 justify-center items-center">
            <div className="border-2 shadow-lg shadow-slate-400 prose prose-slate prose-p:my-0 prose-headings:my-1 prose-headings:text-slate-600  border-gray-300 p-6 m-4 w-1/2 rounded-md bg-slate-200">
              <div className=" flex flex-col min-w-full items-center">
                <p
                  ref={errRef}
                  className={
                    errMsg
                      ? 'bg-blue-500 text-white font-medium p-5 mb-5'
                      : 'absolute left-[9000px]'
                  }
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <div className="md:mt-auto">
                  <Link to="/">
                    <img
                      src={Logo}
                      alt="Logo Capres"
                      className="h-20 mt-2 md:h-auto w-auto"
                    />
                  </Link>
                </div>
                <h1 className="prose text-gray-700 text-2xl md:text-4xl font-bold pb-2 text-heading ">
                  Log in
                </h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="bg-white mb-6 py-8 px-6 shadow rounded-lg sm:px-10">
                    <form className="mb-0 space-y-6">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Usuario
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="username"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUser(e.target.value)}
                          value={user}
                          required
                          className="-mt-2 w-full border-gray-300 rounded-lg shadow-sm"
                        />
                      </div>

                      <label
                        htmlFor="password"
                        className="block  text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          id="password"
                          autoComplete="on"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                          className="-mt-2 w-full border-gray-300 rounded-lg shadow-sm"
                        />
                      </div>

                      <Button
                        width="full"
                        font_weight="semibold"
                        onClick={handleSubmit}
                      >
                        Log in
                      </Button>
                    </form>
                  </div>
                </div>
                <p>
                  No estás registrado?{' '}
                  <span className="line">
                    {/* put router link here */}
                    <Link to="/registro">Regístrate</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default LoginNew;
