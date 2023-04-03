import {useState} from 'react';

interface ResetInterface{
    handleForm: (form:string) => string;
}

const ResetPassword = (props:ResetInterface) => {
    return (
        <div>

            <button onClick={()=> props.handleForm("login")}>Iniciar sesion</button>
        </div>
    )
}

export default ResetPassword;
