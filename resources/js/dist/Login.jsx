import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
const Login = () => {
    const [formulario, setFormulario] = useState("login");
    const mostrarFormulario = (formulario) => {
        setFormulario(formulario);
    };
    return (<div className="min-h-screen grid grid-cols-2">
            <div className="min-h-height bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold text-white flex justify-center items-center">
                hola
            </div>
            <div className="flex flex-col justify-center items-center">
                {formulario === "login" && (<LoginForm handleForm={mostrarFormulario}/>)}
                 {formulario === "register" && (<RegisterForm handleForm={mostrarFormulario}/>)}
                 {formulario === "reset" && (<ResetPasswordForm handleForm={mostrarFormulario}/>)}
            </div>
        </div>);
};
export default Login;
