import { Fragment, useState, VFC } from 'react';
import { Link } from "@inertiajs/react";
import Icon from '../Icon';
import DropdownMenuItem from '../DropdownMenu/Item';
import {Plugin} from "../../types/DashboardTypes";


type MenuItem = {
  name: string;
  description: string;
  link: string;
  icon: string;
  active:boolean;
};

const purchase: MenuItem[] = [
  {
    name: 'Optimized Chat button',
    description: 'Your visitors can Contact you through "WhatsApp"',
    link: '/installation',
    icon: 'https://ps.w.org/wordpress-seo/assets/icon-256x256.png?rev=2643727',
    active:true
  },
];

const available: MenuItem[] = [
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    link: '/installation',
    icon: 'https://ps.w.org/shiny-updates/assets/icon-256x256.png?rev=1327674',
    active:true
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    link: '/installation',
    icon: 'https://ps.w.org/cookie-law-info/assets/icon-256x256.png?rev=2594824',
    active:true
  },
];

interface DropdownMenuProps{
    plugins:Plugin[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
    const {plugins}=props;
    console.log(plugins);
    const [Popover, setPopover] = useState<any>();
    const [Transition, setTransition] = useState<any>();

    import('@headlessui/react')
        .then((module) => {
        setPopover(module.Popover);
        setTransition(module.Transition);
        })
        .catch((error) => console.error(error));

    if (!Popover || !Transition) return null;

    return (
        <div className="max-w-sm">
        <Popover className="relative">
            {({ open }: { open: boolean }) => (
            <>
                <Popover.Button
                className={`${
                    open ? '' : 'text-opacity-90'
                } flex items-center gap-3 rounded-xl bg-white px-3 py-2 text-left border border-slate-300 focus:outline-none`}
                >
                <div>
                    <img
                    src="https://ps.w.org/wordpress-seo/assets/icon-256x256.png?rev=2643727"
                    className="w-10 h-10 rounded-xl"
                    />
                </div>
                <div>
                    <span className="font-bold text-sm sm:text-md">
                    Optimized Chat button
                    </span>
                    <p className="text-xs truncate w-36 sm:w-48">
                    Your visitors can Contact you through "WhatsApp"
                    </p>
                </div>
                <div>
                    <Icon name="arrow-down" size={25}/>
                </div>
                </Popover.Button>
                <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
                <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0 lg:max-w-sm">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="bg-white p-4">
                        <span className="text-xs uppercase text-slate-400">
                        Purchase
                        </span>
                        {plugins.map((item) => (
                        <DropdownMenuItem key={item.name} item={item} />
                        ))}
                        <span className="text-xs uppercase text-slate-400">
                        Available
                        </span>
                        {plugins.map((item) => (
                        <DropdownMenuItem key={item.name} item={item} />
                        ))}
                    </div>

                    <div className="bg-slate-100 p-2">
                        <Link
                        href="/dashboard"
                        className="flow-root rounded-md px-4 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                        <span className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                            View all
                            </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                            Show all plugins available
                        </span>
                        </Link>
                    </div>
                    </div>
                </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
        </div>
    );
 };

 export default DropdownMenu;
