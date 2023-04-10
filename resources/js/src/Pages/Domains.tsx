import MainLayout from '../layouts/MainLayout';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import Badge from '../components/Badge';
import Card from '../components/Card';
import Button from '../components/Form/Button';
import Input from '../components/Form/Input';
import Icon from '../components/Icon';

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





const Domains: React.FC<LicenseProps> = (props) => {
    const { license } = props;


    let [isOpenCreate, setIsOpenCreate] = useState(false)
    let [isOpenEdit, setIsOpenEdit] = useState(false)

    function closeModalCreate() {
        setIsOpenCreate(false)
    }

    function closeModalEdit() {
        setIsOpenEdit(false)
    }

    function openModalCreate() {
        setIsOpenCreate(true)
    }

    function openModalEdit() {
        setIsOpenEdit(true)
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
                                            <Input label="Domain" placeholder="octonove.com" />
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
                                            onClick={closeModalCreate}
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
                                <Button background="bg-white hover:bg-slate-100" padding="p-2" onClick={ openModalEdit }><Icon name="pen" size={25}/></Button>
                                <Button background="bg-red-100 hover:bg-red-200 border-none" color="text-red-500" padding="p-2"><Icon name="trash" size={25}/></Button>


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
                                                    <Input label="Domain" placeholder="octonove.com" />
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
                                                    onClick={closeModalEdit}
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
