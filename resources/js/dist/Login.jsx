import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
const Login = ({ success }) => {
    const [formulario, setFormulario] = useState("login");
    const mostrarFormulario = (formulario) => {
        setFormulario(formulario);
    };
    return (<div className="min-h-screen flex flex-col justify-center  px-14  bg-[#F2F2F2]">
            <div className="h-[500px]  xl:h-[550px]  grid grid-cols-2 rounded-xl shadow-xl">
                <div className="rounded-tl-xl hidden  relative rounded-bl-xl bg-blue-600 font-extrabold text-white md:flex md:flex-col justify-center items-center">
                  <div className="w-full h-full bg-cover rounded-tl-xl opacity-40 flex flex-col items-center justify-center relative" style={{ backgroundImage: 'url(https://img.freepik.com/vector-gratis/fondo-abstracto-blanco_23-2148833155.jpg?w=740&t=st=1681423926~exp=1681424526~hmac=e6f5a6bcb1bafa24e3320e001b43b7fa0dc587339cd6a6af618b8d905b1faaa9)' }}>

                  </div>
                  <div className="absolute px-4">
                    <p className="font-sans font-bold text-white text-center">Bienvenido al gestor de plugins de Wordpress con nuestra agencia Octonove, modifica, y gestiona en tiempo real.</p>
                  </div>
                </div>
                <div className="rounded-tr-xl col-span-2 md:col-span-1 rounded-br-xl flex flex-col justify-center items-center bg-white p-7">
                    <img className="h-16 w-16" src="https://cdn-bjgin.nitrocdn.com/LxoCvaeHElFzlCBGqsfvssGnySbvIRYM/assets/images/optimized/rev-2f83237/wp-content/uploads/2022/01/cropped-octo-300x300.png" alt=""/>

                    {formulario === "login" && (<LoginForm handleForm={mostrarFormulario}/>)}
                    {formulario === "register" && (<RegisterForm handleForm={mostrarFormulario}/>)}
                    {formulario === "reset" && (<>
                            <ResetPasswordForm handleForm={mostrarFormulario} success={success}/>

                        </>)}
                </div>
            </div>
        </div>);
};
export default Login;
