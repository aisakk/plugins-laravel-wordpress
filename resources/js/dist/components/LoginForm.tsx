import React from "react";
import { Inertia } from "@inertiajs/inertia";

interface LoginInterface{
    handleForm: (form:string) => string;
}

const LoginForm = (props:LoginInterface) => {
    const [emailOrUsername, setEmailOrUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [remember, setRemember] = React.useState(false);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.currentTarget.preventDefault();
        Inertia.post("/login", { emailOrUsername, password, remember });
    };

    return (
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Iniciar sesión
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
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
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Correo electrónico o nombre de usuario"
                                value={emailOrUsername}
                                onChange={(e) =>
                                    setEmailOrUsername(e.target.value)
                                }
                            />
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Recordar sesión
                            </label>
                        </div>
                    </div>

                    <div className="">
                        <button
                            type="submit"
                            className="group relative w-full  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Ingresar
                        </button>
                        <div className="flex justify-between">
                            <button onClick={()=> props.handleForm("register")}>Registrarse</button>
                            <button onClick={()=> props.handleForm("reset")}>Recuperar Contraseña</button>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default LoginForm;