import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'
import ResetPassword from './components/ResetPassword'

const Login = () => {
    const [formulario, setFormulario] =useState('login')

    function handleFormulario(formulario){
        setFormulario(formulario)
    }

    return (
        <div className="min-h-screen grid grid-cols-2 place-content-center content-center">
            <div className="min-h-screen bg-[url('../js/dist/assets/circle-scatter-haikei.svg')] bg-no-repeat bg-cover">
                hola
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center">
                {formulario === "login" && (
                    <LoginForm handleForm={handleFormulario} />
                )}
                 {formulario === "register" && (
                    <RegisterForm handleForm={handleFormulario} />
                )}
                 {formulario === "reset" && (
                    <ResetPassword handleForm={handleFormulario} />
                )}
            </div>
        </div>
    );
};

export default Login;
