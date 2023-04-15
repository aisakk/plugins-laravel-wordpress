import React, {useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/inertia-react";
import Alert from "./Alert/Alert";
interface RegisterInterface{
    handleForm: (form:string) => void;
}
const RegisterForm = (props:RegisterInterface) => {
   const { data, setData, post, processing, errors } = useForm({
        email_register: '',
        username: '',
        password_register: ''
   })
   const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    post('/register');
    setShowAlert(false)
  };

  const handleAlert = ()=>{
    setShowAlert(!showAlert)
        errors.email_register = ''
        errors.username = ''
        errors.password_register = ''

}

  return (
      <div className="lg:max-w-lg max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registrarse
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-3">
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={errors.email_register ? "border border-red-500 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}

                placeholder="Correo electrónico"
                value={data.email_register}
                onChange={(e) => setData('email_register', e.target.value)}
              />
              {errors.email_register && <p className='text-red-400'>{errors.email_register}</p>}
            </div>
            <div>
              <label htmlFor="username" className="sr-only">
                Nombre de usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className={errors.username ? "border border-red-500 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}
                placeholder="Nombre de usuario"
                value={data.username}
                onChange={(e) => setData('username',e.target.value)}
              />
                  {errors.username && <p className='text-red-400'>{errors.username}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={errors.password_register ? "border border-red-500 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}
                placeholder="Contraseña"
                value={data.password_register}
                onChange={(e) => setData('password_register',e.target.value)}
              />
                {errors.password_register && <p className='text-red-400'>{errors.password_register}</p>}
            </div>
          </div>

          <div className='flex flex-col space-y-4'>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {processing ? (
                                  <div className="animate-spin  rounded-full border-t-gray-700 border-4 border-t-4 border-gray-200 h-4 w-4"></div>

                ): ( <p>Registrarse</p>)}

              </button>

              <button onClick={()=> props.handleForm("login")}> Iniciar Sesion </button>
              </div>
            </form>
            {errors.email_register &&(
                        <Alert show={!showAlert} error={errors.email_register} onClose={handleAlert}/>

                )}
                {errors.password_register &&(
                         <Alert show={!showAlert} error={errors.password_register} onClose={handleAlert}/>
                )}
                {errors.username &&(
                         <Alert show={!showAlert} error={errors.username} onClose={handleAlert}/>
                )}
        </div>
    );
};

export default RegisterForm;
