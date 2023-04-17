import MainLayout from '../layouts/MainLayout';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Button from '../components/Form/Button';
import Card from '../components/Card';
import Icon from '../components/Icon';
import Badge from '../components/Badge';
import {Plugin,License} from '../types/DashboardTypes'

interface LicenseProps {
    license: License;
    plugins: Plugin[];
}

const Plan: React.FC<LicenseProps> = (props) =>{
    const { license, plugins } = props;
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <MainLayout licenseId={license.id} plugins={plugins}>
            <div className="py-10">
                <div className="flex flex-wrap sm:flex-nowrap gap-y-6 sm:gap-6 items-center">
                    <div className="w-full sm:w-6/12">
                        <Card>
                            <div className="py-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h6 className="font-bold uppercase text-xs mb-2">Your Plan</h6>
                                        <h1 className="flex gap-3 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 19h20v2H2v-2zM2 5l5 3.5L12 2l5 6.5L22 5v12H2V5zm2 3.841V15h16V8.841l-3.42 2.394L12 5.28l-4.58 5.955L4 8.84z"></path></svg>
                                            <span className="font-bold text-3xl">Premium</span>
                                        </h1>
                                    </div>

                                    <Button onClick={ openModal } background="bg-red-100 hover:bg-red-200 border-none" color="text-red-500" size="text-xs">Cancel</Button>

                                    <Transition appear show={isOpen} as={Fragment}>
                                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                                        <span className="bg-red-100 text-red-500 p-3 rounded-xl mx-auto flex">
                                                            <Icon name="danger" size={25} />
                                                        </span>

                                                    </div>
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-bold leading-6 text-gray-900 text-center mt-2"
                                                    >
                                                        Cancel plan
                                                    </Dialog.Title>
                                                    <p className="text-sm text-gray-500 text-center mt-6">
                                                        ¿Are you sure you want to cancel your subscription to the plugin <strong>optimized chat button</strong>?
                                                    </p>
                                                </div>

                                                <div className="mt-6 flex gap-3 justify-center">
                                                    <Button
                                                        background="bg-gray-100 hover:bg-gray-200 border-none"
                                                        color="text-gray-500"
                                                        size="text-xs"
                                                        onClick={closeModal}
                                                        >
                                                        Close
                                                    </Button>

                                                    <Button
                                                    background="bg-red-100 hover:bg-red-200 border-none"
                                                    color="text-red-500"
                                                    size="text-xs"
                                                    onClick={closeModal}
                                                    >
                                                    Yes, cancel
                                                    </Button>
                                                </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                            </div>
                                        </div>
                                        </Dialog>
                                    </Transition>
                                </div>
                                <div className="flex flex-wrap sm:flex-nowrap gap-y-6 mt-10">
                                    <div className="w-full sm:w-4/12">
                                        <h6 className="font-bold text-xs uppercase mb-2">License Key</h6>
                                        <p>{license.code}</p>
                                    </div>
                                    <div className="w-full sm:w-4/12">
                                        <h6 className="font-bold text-xs uppercase mb-2">Renewal Date</h6>
                                        <p>{license.expiration}</p>
                                    </div>
                                    <div className="w-full sm:w-4/12">
                                        <h6 className="font-bold text-xs uppercase mb-2">Site Activations</h6>
                                        <div className="flex gap-2 items-center">
                                            <p>1/10</p>
                                            <span className="bg-blue-100 py-1 px-4 rounded-xl font-bold text-primary text-xs">View Sites</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="w-full sm:w-6/12">
                        <Card>
                            <h2 className="font-bold mb-4 text-xl">{license.pluginName}</h2>
                            <ul className="mb-6">
                                <li className="flex items-center gap-2"><span className="text-primary"><Icon size={4} name="check-circle" /></span> Multiple keyphrases: Increase your SEO reach</li>
                                <li className="flex items-center gap-2"><span className="text-primary"><Icon size={4} name="check-circle" /></span> Superfast internal linking suggestions</li>
                                <li className="flex items-center gap-2"><span className="text-primary"><Icon size={4} name="check-circle" /></span> 24/7 email support</li>
                            </ul>
                            <Button background="bg-primary" color="text-white">
                                <span>Get Premium</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                            </Button>
                        </Card>
                    </div>
                </div>

                <div className="py-10">
                    <Card>
                        <div className="hidden sm:flex flex-wrap sm:flex-nowrap gap-y-2">
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2">Date</h6>
                            </div>
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2">Product</h6>
                            </div>

                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2">Payment Method</h6>
                            </div>
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2">Total</h6>
                            </div>
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2">Status</h6>
                            </div>
                        </div>

                        <div className="flex flex-wrap sm:flex-nowrap gap-y-4">
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2 sm:hidden">Date</h6>
                                <p>20 Nov 2022</p>
                            </div>
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2 sm:hidden">Product</h6>
                                <p>Premium Plan</p>
                            </div>
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2 sm:hidden">Payment Method</h6>
                                <div className="flex gap-3 items-center">
                                    <img className="w-7 h-4 object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png" alt="" />
                                    <p>XXXX-XXXX-XXXX-6789</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2 sm:hidden">Total</h6>
                                <p>$6</p>
                            </div>
                            <div className="w-full sm:w-3/12">
                                <h6 className="font-bold text-xs uppercase mb-2 sm:hidden">Status</h6>
                                <Badge background="bg-green-500">Approved</Badge>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </MainLayout>
    );
}

export default Plan;
