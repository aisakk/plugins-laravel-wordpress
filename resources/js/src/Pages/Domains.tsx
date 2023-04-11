import MainLayout from '../layouts/MainLayout';
import React, { useState, Fragment, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/react';
import { Dialog, Transition } from '@headlessui/react';



import Badge from '../components/Badge';
import Card from '../components/Card';
import Button from '../components/Form/Button';
import InputDomain from '../components/Form/InputDomain';
import Icon from '../components/Icon';
import Checkbox from '../components/Form/Checkbox';

interface Domain{
    id:number;
    name:string;
    active:boolean;
}

interface License {
    id:number;
    date: string;
    code: string;
    pluginName: string;
    expiration: string;
    domains: Domain[];
    status: string;
  }

  interface LicenseProps {
      license: License;
  }

  interface DomainData {
    id:number;
    name: string;
    active: boolean;
  }


const Domains: React.FC<LicenseProps> = (props) => {
    const { license } = props;
    let [isOpenCreate, setIsOpenCreate] = useState(false);
    let [isOpenEdit, setIsOpenEdit] = useState(false);
    let [isOpenDelete, setIsOpenDelete] = useState(false);

    const [domainData, setDomainData] = useState<DomainData>({id:0, name: '', active: true });
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDomainData({ ...domainData, [event.target.name]: event.target.value });
    };
    const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);


    const createDomain = (domainData: DomainData) => {
        const payload: Record<string, any> = {
          name: domainData.name,
          active: domainData.active,
        };

        Inertia.post(`/domain/${license.id}/store`, payload, {
          preserveState: true,
          onSuccess: (page) => {
            console.log('dominio guardado');
          },
          onError: (errors) => {
            console.log('error al guardar dominio');
          },
        });
    };



      const updateDomain = (domainData:DomainData) => {
        const payload: Record<string, any> = {
            name: domainData.name,
            active: domainData.active,
        };

        Inertia.put(`/domain/${domainData.id}/update`,payload,{
                preserveState: true,
                onSuccess:(page)=>{console.log('dominio modificado.')},
                onError:(errors)=>{
                    console.log('error al modificar dominio')
                }
            });

    };

    const deleteDomain = (domainId:number) => {
        Inertia.delete(`/domain/${domainId}/delete`,{
            preserveState: true,
            onSuccess:(page)=>{console.log('dominio eliminado.')},
            onError:(errors)=>{
                console.log('error al eliminar dominio')
            }
        });

    };

    function openModalCreate() {
        setIsOpenCreate(true)
    }
    function closeModalCreate() {
        setIsOpenCreate(false)
    }


    function openModalEdit(domain: Domain) {
        setDomainData({ id:domain.id, name: domain.name, active: domain.active });
        setIsOpenEdit(true);
    }
    function closeModalEdit() {
        setIsOpenEdit(false)
    }

    function openModalDelete(domain: Domain) {
        setDomainData({ id:domain.id, name: domain.name, active: domain.active });
        setIsOpenDelete(true);
    }
    function closeModalDelete() {
        setIsOpenDelete(false)
    }


    return (
        <MainLayout licenseId={license.id}>
        <div className="py-10">
            <Card>
                <div className="flex justify-between mb-6">
                    <div>
                        <h2 className="font-bold text-xl">Domains</h2>
                        <p className="text-xs mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <Button onClick={ openModalCreate }>Add</Button>


                        <Transition appear show={isOpenCreate} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModalCreate}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                        <div className="mt-2">
                                            <div className="flex">
                                                <span className="bg-blue-100 text-blue-500 p-3 rounded-xl mx-auto flex">
                                                    <Icon name="global" size={25}/>
                                                </span>

                                            </div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-bold leading-6 text-gray-900 text-center mt-2"
                                            >
                                                Add new domain
                                            </Dialog.Title>
                                            <p className="text-sm text-gray-500 text-center mt-6">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas, excepturi similique recusandae
                                            </p>
                                            <InputDomain
                                                label="Domain"
                                                name="name"
                                                value={domainData.name}
                                                onChange={handleChange}
                                                placeholder="octonove.com"
                                             />
                                             <label className="flex items-space-between mt-4">
                                                <Checkbox
                                                    label="Active"
                                                    name="active"
                                                    checked={domainData.active}
                                                    onChange={(event) => {
                                                        setDomainData({ ...domainData, active: event.target.checked });
                                                    }}
                                                />
                                            </label>
                                        </div>

                                        <div className="mt-6 flex gap-3 justify-center">
                                            <Button
                                                background="bg-gray-100 hover:bg-gray-200 border-none"
                                                color="text-gray-500"
                                                size="text-xs"
                                                onClick={closeModalCreate}
                                                >
                                                Cancel
                                            </Button>

                                            <Button
                                            background="bg-primary hover:bg-blue-800 border-none"
                                            color="text-white"
                                            size="text-xs"
                                            onClick={() => {
                                                createDomain(domainData);
                                                closeModalCreate();
                                            }}
                                            >
                                                Save domain
                                            </Button>
                                        </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>


                <div className="text-center">
                <div className="flex text-xs font-bold py-4 uppercase items-start">
                    <div className="w-5/12">
                        <h6>Name</h6>
                    </div>
                    <div className="w-5/12">
                        <h6>Status</h6>
                    </div>
                    <div className="w-2/12">
                        <h6>Actions</h6>
                    </div>
                </div>

                { license.domains.map((item) => (
                    <div key={item.id} className="flex border-t border-slate-200 py-4 items-center">
                        <div className="w-5/12">
                            <p>{ item.name }</p>
                        </div>
                        <div className="w-5/12">
                            <Badge background="bg-green-500">{ item.active?'active':'inactive' }</Badge>
                        </div>
                        <div className="w-2/12">
                            <div className="flex justify-center gap-4">
                                <Button background="bg-white hover:bg-slate-100" padding="p-2" onClick={() => openModalEdit(item)}><Icon name="pen" size={25}/></Button>
                                <Button background="bg-red-100 hover:bg-red-200 border-none" color="text-red-500" padding="p-2" onClick={() => openModalDelete(item)}><Icon name="trash" size={25}/></Button>


                                <Transition appear show={isOpenEdit} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={closeModalEdit}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                                <div className="mt-2">
                                                    <div className="flex">
                                                        <span className="bg-blue-100 text-blue-500 p-3 rounded-xl mx-auto flex">
                                                            <Icon name="global" size={25}/>
                                                        </span>

                                                    </div>
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-bold leading-6 text-gray-900 text-center mt-2"
                                                    >
                                                        Update existing domain
                                                    </Dialog.Title>
                                                    <p className="text-sm text-gray-500 text-center mt-6">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas, excepturi similique recusandae
                                                    </p>
                                                    <InputDomain
                                                          label="Domain"
                                                          name="name"
                                                          value={domainData.name}
                                                          onChange={handleChange}
                                                          placeholder={domainData.name ?? "octonove.com"}
                                                    />
                                                    <label className="flex items-space-between mt-4">
                                                        <Checkbox
                                                            label="Active"
                                                            name="active"
                                                            checked={domainData.active}
                                                            onChange={(event) => {
                                                                setDomainData({ ...domainData, active: event.target.checked });
                                                            }}
                                                        />
                                                    </label>
                                                </div>

                                                <div className="mt-6 flex gap-3 justify-center">
                                                    <Button
                                                        background="bg-gray-100 hover:bg-gray-200 border-none"
                                                        color="text-gray-500"
                                                        size="text-xs"
                                                        onClick={closeModalEdit}
                                                        >
                                                        Cancel
                                                    </Button>

                                                    <Button
                                                    background="bg-primary hover:bg-blue-800 border-none"
                                                    color="text-white"
                                                    size="text-xs"
                                                    onClick={() => {
                                                        updateDomain(domainData);
                                                        closeModalEdit();
                                                    }}
                                                    >
                                                        Update domain
                                                    </Button>
                                                </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>

                                <Transition appear show={isOpenDelete} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={closeModalDelete}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                                <div className="mt-2">
                                                    <div className="flex">
                                                        <span className="bg-blue-100 text-blue-500 p-3 rounded-xl mx-auto flex">
                                                            <Icon name="global" size={25}/>
                                                        </span>

                                                    </div>
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-bold leading-6 text-gray-900 text-center mt-2"
                                                    >
                                                        Delete domain
                                                    </Dialog.Title>
                                                    <p className="text-sm text-gray-500 text-center mt-6">
                                                        Are you shure you want to delete Domain: <br/>
                                                        {domainData.name}?
                                                    </p>
                                                </div>

                                                <div className="mt-6 flex gap-3 justify-center">
                                                    <Button
                                                        background="bg-gray-100 hover:bg-gray-200 border-none"
                                                        color="text-gray-500"
                                                        size="text-xs"
                                                        onClick={closeModalDelete}
                                                        >
                                                        Cancel
                                                    </Button>

                                                    <Button
                                                    background="bg-primary hover:bg-blue-800 border-none"
                                                    color="text-white"
                                                    size="text-xs"
                                                    onClick={() => {
                                                        deleteDomain(domainData.id);
                                                        closeModalDelete();
                                                    }}
                                                    >
                                                        Yes, delete domain
                                                    </Button>
                                                </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </Card>

        </div>
        </MainLayout>
    );
}

export default Domains;
