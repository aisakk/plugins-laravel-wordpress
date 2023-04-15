import {useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/inertia-react";

interface ResetInterface{
    handleForm: (form:string) => void;
    success: string;
}

const ResetPasswordForm = (props:ResetInterface) => {
    const { data, setData, post,submit , processing, errors } = useForm({
        emailOrUsername: '',
        error_reset: false,
   })
    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      post('/password-reset')

    };

    return (
        <div className="lg:max-w-lg max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Restablecer contraseña
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="emailOrUsername" className="sr-only">
                  Correo electrónico o nombre de usuario
                </label>
                <input
                  id="emailOrUsername"
                  name="emailOrUsername"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Correo electrónico o nombre de usuario"
                  value={data.emailOrUsername}
                  onChange={(e) => setData('emailOrUsername', e.target.value)}
                />
              </div>
            </div>

            <div className='flex flex-col items-center gap-3'>
                <p className="text-green-600">{props.success}</p>
                {errors && <p className='text-red-600'>{errors.error_reset}</p>}
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {processing ? (
                                  <div className="animate-spin  rounded-full border-t-gray-700 border-4 border-t-4 border-gray-200 h-4 w-4"></div>

                ): ( <p>Enviar Enlace</p>)}
              </button>
              <button onClick={()=> props.handleForm("login")}> Iniciar Sesion </button>
            </div>

          </form>
        </div>
    );
}

export default ResetPasswordForm;
