import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const DropDownHorizontalMenu: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center cursor-pointer rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only cursor-pointer">
                            Open main menu
                        </span>
                        <Bars3Icon
                            className="h-6 w-6 cursor-pointer"
                            aria-hidden="true"
                        />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a
                        href="/plugins/1/dashboard"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Dashboard
                    </a>

                    <a
                        href="/all-plugins"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Listado de plugins
                    </a>

                    <a
                        href="/plugins"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Tus plugins
                    </a>
                </Popover.Group>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10 pt-20" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 mt-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/plugins/1/dashboard"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="/all-plugins"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Listado de plugins
                                </a>

                                <a
                                    href="/plugins"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Tus plugins
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default DropDownHorizontalMenu;
