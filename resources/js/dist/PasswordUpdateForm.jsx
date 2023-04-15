import React from "react";
import { useForm } from "@inertiajs/inertia-react";
const PasswordUpdateForm = () => {
    const { data, setData, post, processing, errors, transform } = useForm({
        password: '',
        passwordConfirmation: '',
        code: window.location.pathname.split('/')[2],
    });
    transform(data => ({
        ...data,
        code: window.location.pathname.split('/')[2],
    }));
    const [password, setPassword] = React.useState("");
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/password-reset/update");
    };
    return (<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Actualizar contraseña
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Nueva contraseña
                            </label>
                            <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nueva contraseña" value={data.password} onChange={(e) => setData('password', e.target.value)}/>
                              {errors && <p className="text-red-700">{errors.password}</p>}
                        </div>
                        <div>
                            <label htmlFor="passwordConfirmation" className="sr-only">
                                Confirmar contraseña
                            </label>
                            <input id="passwordConfirmation" name="passwordConfirmation" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirmar contraseña" value={data.passwordConfirmation} onChange={(e) => setData('passwordConfirmation', e.target.value)}/>
                              {errors && <p className="text-red-700">{errors.passwordConfirmation}</p>}
                        </div>
                    </div>
                    <div>

                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                               {processing ? (<div className="animate-spin  rounded-full border-t-gray-700 border-4 border-t-4 border-gray-200 h-4 w-4"></div>) : (<p> Actualizar contraseña</p>)}

                        </button>
                    </div>
                </form>
            </div>
        </div>);
};
export default PasswordUpdateForm;
