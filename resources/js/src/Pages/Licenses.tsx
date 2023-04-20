import MainLayout from '../layouts/MainLayout';
import { Link } from '@inertiajs/inertia-react';
import Badge from '../components/Badge';
import Card from '../components/Card';
import Button from '../components/Form/Button';
import Icon from '../components/Icon';
import {Plugin,License} from "../types/DashboardTypes";
import React, { useState } from 'react';
import Modal from 'react-modal';

interface LicensesProps {
    licenses: License[];
    plugins: Plugin[];
}

const Licenses: React.FC<LicensesProps> = (props) => {
    const { licenses,plugins } = props;
   // Función para extraer el valor del token de la cadena de consulta
    function getQueryParam(param) {
        const queryString = window.location.search.substring(1);
        const queryParams = queryString.split("&");

        for (let i = 0; i < queryParams.length; i++) {
        const [key, value] = queryParams[i].split("=");
        if (key === param) {
            return decodeURIComponent(value);
        }
        }

        return null;
    }

    // Llamar a la función para obtener el valor del token
    const token = getQueryParam("token");

    // Guardar el token en el localStorage si está presente
    if (token) {
        localStorage.setItem("api_token", token);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLicense, setSelectedLicense] = useState<License | null>(null);

    const openModal = (license: License) => {
        setSelectedLicense(license);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
        <MainLayout>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="License Modal"
                className="p-6 w-full sm:w-2/6 md:w-4/6 lg:w-2/3 mx-auto my-8 mt-32 border rounded-lg shadow-lg bg-white overflow-auto align-middle"
            >
                {selectedLicense && (
                <>
                    <h2 className="text-lg font-semibold mb-4">License Details</h2>
                    <div className="mb-2">
                        <strong>Fecha:</strong> {selectedLicense.date}
                    </div>
                    <div className="mb-2">
                        <strong>Plugin:</strong>{selectedLicense.pluginName}
                    </div>
                    <div className="mb-2">
                        <strong>Expiration:</strong> {selectedLicense.expiration}
                    </div>
                    <div className="mb-2 max-w-full break-words">
                    <strong className="break-word">Domains:</strong>
                    {selectedLicense.domains.map((domain, index) => (
                            <p key={index}>{domain.name}</p>
                        ))}
                    </div>
                    <div className="mb-4">
                        <strong>Status:</strong>{selectedLicense.status}
                    </div>
                </>
                )}
                                <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={closeModal}
                >
                    Cerrar
                </button>
            </Modal>
            <div className="pt-16 pb-10 text-center">
                <Card>
                    <div className="flex text-xs font-bold py-4 uppercase items-start">
                        <div className="md:w-3/12 hidden md:table-cell">
                            <h6>Date</h6>
                        </div>
                        <div className="w-3/12 md:w-3/12">
                            <h6>Plugin</h6>
                        </div>

                        <div className="w-4/12 md:w-2/12">
                            <h6>Expiration</h6>
                        </div>
                        <div className="md:w-3/12 hidden md:table-cell">
                            <h6>Domains</h6>
                        </div>
                        <div className="w-3/12 md:w-2/12">
                            <h6>Status</h6>
                        </div>
                        <div className="w-3/12 md:w-1/12">
                            <h6>Actions</h6>
                        </div>
                    </div>

                    { licenses.map((item,index) => (
                        <div className="flex border-t border-slate-200 py-4 items-center" key={index}>
                            <div className="md:w-3/12 hidden md:table-cell">
                                <p>{ item.date }</p>
                            </div>
                            <div className="w-3/12 md:w-3/12">
                                <p>{ item.pluginName }</p>
                            </div>
                            <div className="w-4/12 md:w-2/12">
                                <p>{ item.expiration }</p>
                            </div>
                            <div className="md:w-3/12 hidden md:table-cell">
                                {
                                    item.domains.map((item,index)=>(
                                        <p key={index}>{ item.name }</p>
                                    ))
                                }
                            </div>
                            <div className="w-3/12 md:w-2/12">
                                <Badge background="bg-green-500">{ item.status }</Badge>
                            </div>
                            <div className="md:w-1/12 flex justify-center ">
                                <button onClick={() => openModal(item)} className="self-center md:hidden bg-gray-500 text-white px-2 mx-1 py-1 text-xs rounded hover:bg-blue-600 mt-1">
                                    <Icon className="w-5 md:w-6" name="eye" />
                                </button>
                                <Link href={'plugins/'+item.id+'/dashboard'} className="flex justify-center">
                                    <button onClick={() => openModal(item)} className="flex bg-blue-500 text-white px-2 py-1 text-xs rounded hover:bg-blue-600 mt-1">
                                        <Icon className="w-5 md:w-6" name="settings" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Card>
            </div>
        </MainLayout>
    );
}

export default Licenses;
