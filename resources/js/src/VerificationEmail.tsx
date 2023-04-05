// resources/js/Pages/VerificationEmailSent.js

import React from 'react';
import { Link } from '@inertiajs/inertia-react';


interface Props{
    success: string,
    errors: string
}


const VerificationEmailSent = ({success, errors}:Props) => {
    console.log(success, errors)
    return (
        <div>
                {success || errors ? (
                    <div>
                        {success && (
                              <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
                              <h1 className="text-2xl font-bold mb-6">{success}</h1>
                              <Link href="/login" className="text-blue-600 hover:text-blue-800">
                                  Regresar al inicio
                              </Link>
                          </div>
                        )}
                        {errors && (
                             <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
                             <h1 className="text-2xl font-bold mb-6">{errors}</h1>
                             <Link href="/login" className="text-blue-600 hover:text-blue-800">
                                 Regresar al inicio
                             </Link>
                         </div>
                        )}
                    </div>
                ) : (
                    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-2xl font-bold mb-6">Correo de verificación enviado</h1>
                    <p className="text-center mb-6">
                        Hemos enviado un enlace de verificación a tu correo electrónico. Por favor, revisa tu correo
                        electrónico y haz clic en el enlace para verificar tu cuenta.
                    </p>
                    <Link href="/login" className="text-blue-600 hover:text-blue-800">
                        Regresar al inicio
                    </Link>
                </div>
                )}
    </div>
    );
};

export default VerificationEmailSent;
