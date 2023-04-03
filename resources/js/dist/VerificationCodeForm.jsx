import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const VerificationCodeForm = ( { email } ) => {

      console.log( email );
  const [code, setCode] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/email-verification/verify', { email: email, verification_code: code });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Ingrese el código de verificación
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="code" className="sr-only">
                Código de verificación
              </label>
              <input
                id="code"
                name="code"
                type="text"
                inputMode="numeric"
                pattern="[0-9]{6}"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Código de verificación (6 dígitos)"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                />
                </div>
                </div>
                <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Verificar
        </button>
      </div>
    </form>
  </div>
</div>
);
};

export default VerificationCodeForm;