import React, {useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/inertia-react";

interface RegisterInterface{
    handleForm: (form:string) => void;
}
const RegisterForm = (props:RegisterInterface) => {
   const { data, setData, post, processing, errors } = useForm({
        email_register: '',
        username: '',
        password_register: ''
   })

  const handleSubmit = (e:any) => {
    e.preventDefault();
    post('/register');
  };

  return (
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registrarse
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              Registrarse
              </button>

              <button onClick={()=> props.handleForm("login")}> Iniciar Sesion </button>
              </div>
            </form>
        </div>
    );
};

export default RegisterForm;
