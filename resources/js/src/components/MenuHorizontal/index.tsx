import { Popover } from "@headlessui/react";

const DropDownHorizontalMenu: React.FC = () => {


    return (
        <header className="bg-white">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:hidden">
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

        </header>
    );
};

export default DropDownHorizontalMenu;
