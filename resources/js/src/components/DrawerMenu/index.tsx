import React, { useState } from 'react';
import DrawerMenuItem from './Item';
import Icon from '../Icon';
import { LicenseIdProps } from "../../types/DashboardTypes";

interface MenuItem {
    title: string;
    icon: string;
    link: string;
    active: boolean;
}

const DrawerMenu: React.FC<LicenseIdProps> = (props) => {
    const { licenseId } = props;
    const [isShowing, setIsShowing] = useState(false);
    const currentPath = window.location.pathname;
    const items: MenuItem[] = [
        {
            title: 'Plan',
            icon: 'list-check',
            link: `/plugins/${licenseId}/dashboard`,
            active: false,
        },
        {
            title: 'Domains',
            icon: 'global',
            link: `/plugins/${licenseId}/domains`,
            active: false,
        },
        {
            title: 'Installation',
            icon: 'code',
            link: `/plugins/${licenseId}/installation`,
            active: false,
        },
        {
            title: 'Settings',
            icon: 'settings',
            link: `/plugins/${licenseId}/settings`,
            active: false,
        },
        {
            title: 'Logs',
            icon: 'danger',
            link: `/plugins/${licenseId}/logs`,
            active: false,
        },
    ];

    return (
        <>
            <button
                onClick={() => setIsShowing(!isShowing)}
                className={`${isShowing ? 'ml-15' : ''} sm:hidden`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
                </svg>
            </button>
            {isShowing && (
                <div
                    onClick={() => setIsShowing(false)}
                    className="fixed z-40 left-0 top-0 h-screen w-screen bg-black bg-opacity-25"
                ></div>
            )}
            <nav
                className={`${isShowing ? 'left-0' : '-left-[600px] sm:left-0'} fixed top-0 z-50 min-h-screen bg-white shadow-xl`}
            >
                <button
                    onClick={() => setIsShowing(false)}
                    className="absolute top-6 right-6 text-slate-400 sm:hidden"
                >
                    <Icon name="close" className="w-5 md:w-6" />
                </button>
                <div className="py-4 px-6 sm:px-2">
                    <img
                        className="w-16 sm:mx-auto"
                        src="https://cdn-bjgin.nitrocdn.com/LxoCvaeHElFzlCBGqsfvssGnySbvIRYM/assets/images/optimized/rev-2f83237/wp-content/uploads/2022/01/cropped-octo-300x300.png"
                        alt=""
                    />
                </div>
                <div className="px-6 sm:hidden"></div>
                <div className="flex flex-col gap-y-2 px-6 sm:px-2 py-10">

                    <div className="md:hidden">
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
                    </div>
                    {licenseId !== undefined && (
                        <div>
                            {items.map((item, index) => (
                                <DrawerMenuItem key={index} item={{ ...item, active: currentPath === item.link }} />
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default DrawerMenu;
