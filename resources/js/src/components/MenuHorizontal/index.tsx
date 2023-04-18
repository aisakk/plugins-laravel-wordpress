import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link } from "@inertiajs/react";
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


function classNames(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

interface DropDownHorizontalMenuProps{
    plugins:Plugin[];
}

const DropDownHorizontalMenu: React.FC<DropDownHorizontalMenuProps> = ( props ) => {
    const {plugins}=props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center cursor-pointer rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only cursor-pointer">Open main menu</span>
            <Bars3Icon className="h-6 w-6 cursor-pointer" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">


          <a href="/plugins/1/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </a>
          <a href="/all-plugins" className="text-sm font-semibold leading-6 text-gray-900">
            Listado de plugins
          </a>
          <a href="/plugins" className="text-sm font-semibold leading-6 text-gray-900">
            Tus plugins
          </a>
        </Popover.Group>

      </nav>

    </header>
  );
};

export default DropDownHorizontalMenu;
