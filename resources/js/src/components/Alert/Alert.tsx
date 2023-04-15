import Icon from "../Icon";
import React, { useState, useEffect } from "react";

interface Props{
    success?: string;
    error?:string;
    onClose: ()=>void;
    show: boolean;
}

function Alert({ success, error, onClose, show }:Props) {
    const [alertClasses, setAlertClasses] = useState(
        "opacity-0 transition-opacity duration-700 ease-in-out"
    );
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            onClose();
        }, 700);
    };
    useEffect(() => {
        if (closing) {
            setAlertClasses(
                "opacity-0 transition-opacity duration-700 ease-in-out"
            );
        }
    }, [closing]);

    useEffect(() => {
        if (show) {
            setAlertClasses(
                "opacity-100 transition-opacity duration-700 ease-in-out"
            );
        } else {
            setAlertClasses(
                "opacity-0 transition-opacity duration-700 ease-in-out"
            );
        }
    }, [show]);

    return (
        <>
           {error && (
                <div className={`${alertClasses} px-6 py-4 border-0 rounded mb-4 bg-slate-800 flex justify-center items-center fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                <span className="text-xl inline-block mr-2 align-middle text-red-500">
                    <Icon name="notification" size={12}/>
                </span>
                <span className="inline-block align-middle mr-8 ">
                    <b className="capitalize text-red-600 text-xs">{error}</b>
                </span>
                <button onClick={handleClose} className="text-red-500 absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                    <span>×</span>
                </button>
            </div>
           )}
           {success && (
                <div className={`${alertClasses} px-6 py-4 border-0 rounded mb-4 bg-slate-800 flex justify-center items-center fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                <span className="text-xl inline-block mr-2 align-middle text-green-500">
                    <Icon name="notification" size={12}/>
                </span>
                <span className="inline-block align-middle mr-8 ">
                    <b className="capitalize text-green-500 text-xs">{success}</b>
                </span>
                <button onClick={handleClose} className="text-green-500 absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                    <span>×</span>
                </button>
            </div>
           )}
        </>
    );
}

export default Alert;
