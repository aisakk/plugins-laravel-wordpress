import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import Alert from "./Alert/Alert";
import axios from "axios";

interface LoginInterface{
    handleForm: (form:string) => void;
}

const LoginForm = (props:LoginInterface) => {
    const { data, setData, post, processing, errors } = useForm({
        emailOrUsername: '',
        password: '',
        remember: false,
        error: ''
   })
   const [showAlert, setShowAlert] = useState(false);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        //axios.post("login",{ emailOrUsername, password, remember }).then(res=>console.log(res))
        post("/login");
        setShowAlert(false)
    };

    const handleAlert = ()=>{
        setShowAlert(!showAlert)

            errors.emailOrUsername = ''
            errors.password = ''
            errors.error = ''


    }

    return (
            <div className="lg:max-w-lg max-w-md  w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Iniciar sesión
                    </h2>
                </div>
                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="flex flex-col gap-2 shadow-sm -space-y-px">
                        <div>
                            <label
                                htmlFor="emailOrUsername"
                                className="sr-only"
                            >
                                Correo electrónico o nombre de usuario
                            </label>
                            <input
                                id="emailOrUsername"
                                name="emailOrUsername"
                                type="text"
                                autoComplete="email"
                                required
                                className={errors.emailOrUsername ? "border border-red-500 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}
                                placeholder="Correo electrónico o nombre de usuario"
                                value={data.emailOrUsername}
                                onChange={(e) =>
                                    setData('emailOrUsername',e.target.value)
                                }
                            />
                        {errors.emailOrUsername && <p className="text-red-400">{errors.emailOrUsername}</p>}
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
                                className={errors.password ? "border border-red-500 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}
                                placeholder="Contraseña"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                             {errors.password && <p className="text-red-400">{errors.password}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                checked={data.remember}
                                onChange={(e) => setData('remember',e.target.checked)}
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Recordar sesión
                            </label>
                            {errors.remember && <p className="text-red-400">{errors.remember}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            type="submit"
                            className="group relative w-full  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                               {processing ? (
                                  <div className="animate-spin  rounded-full border-t-gray-700 border-4 border-t-4 border-gray-200 h-4 w-4"></div>

                ): ( <p>Ingresar</p>)}
                        </button>
                        <div className="flex justify-between">
                            <button onClick={()=> props.handleForm("register")}>Registrarse</button>
                            <button onClick={()=> props.handleForm("reset")}>Recuperar Contraseña</button>
                        </div>
                    </div>

                </form>
                {errors.emailOrUsername &&(
                        <Alert show={!showAlert} error={errors.emailOrUsername} onClose={handleAlert}/>

                )}
                {errors.password &&(
                         <Alert show={!showAlert} error={errors.password} onClose={handleAlert}/>
                )}
                {errors.error &&(
                         <Alert show={!showAlert} error={errors.error} onClose={handleAlert}/>
                )}
            </div>
    );
};

export default LoginForm;
