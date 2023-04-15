import { Inertia } from "@inertiajs/inertia";
import CryptoJS from 'crypto-js';

const RegistrarLic = () => {
    const sendLicenseData = async (encryptedData:string) => {
        try {
          Inertia.post('/plugins/store', { license_data: encryptedData });
          console.log('Licencia creada exitosamente');
        } catch (error) {
          console.error('Error al crear la licencia', error);
        }
      };


    const createLicense = (licenseData:string) => {
        // Codifica los datos de la licencia con AES-256
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(licenseData), 'your-secret-key').toString();
        sendLicenseData(encryptedData);
      };

    return(
        <div className="min-h-screen flex flex-col pt-16 px-14 bg-[#F2F2F2]">
            <div className="h-[500px] grid grid-cols-2 rounded-xl shadow-xl">
                <div className="rounded-tl-xl hidden  relative rounded-bl-xl bg-blue-600 font-extrabold text-white md:flex md:flex-col justify-center items-center">
                  <div className="w-full h-full bg-cover rounded-tl-xl opacity-40 flex flex-col items-center justify-center relative" style={{backgroundImage: 'url(https://img.freepik.com/vector-gratis/fondo-abstracto-blanco_23-2148833155.jpg?w=740&t=st=1681423926~exp=1681424526~hmac=e6f5a6bcb1bafa24e3320e001b43b7fa0dc587339cd6a6af618b8d905b1faaa9)'}}>

                  </div>
                  <div className="absolute px-4">
                    <p className="font-sans font-bold text-white text-center">Crea tu licencia</p>
                  </div>
                </div>
                <div className="rounded-tr-xl col-span-2 md:col-span-1 rounded-br-xl flex flex-col justify-center items-center bg-white p-7">
                    <button onClick={()=> createLicense("datos-de-prueba")}>
                        Crear
                    </button>
                </div>
            </div>
        </div>

    );


};

export default RegistrarLic;
