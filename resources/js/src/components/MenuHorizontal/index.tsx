import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { Link } from "@inertiajs/react";
import DropdownMenuItem from '../DropdownMenu/Item';

interface Plugin{
    name: string;
    description: string;
    active: boolean;
    icon: string;
    link: string;
}

type MenuItem = {
    name: string;
    description: string;
    link: string;
    icon: string;
    active:boolean;
};

const purchase: MenuItem[] = [
    {
      name: 'Optimized Chat button 1',
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


function classNames(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

interface DropDownHorizontalMenuProps{
    plugins:Plugin[];
}

const DropDownHorizontalMenu: React.FC<DropDownHorizontalMenuProps> = ( props ) => {
    const {plugins}=props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // console.log(plugins);
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div> */}
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
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Listado de plugins
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="bg-white p-4">
                    <span className="text-xs uppercase text-slate-400">
                      Purchase
                    </span>
                    {plugins && plugins.map((item) => (

                     <DropdownMenuItem key={item.name} item={item} />
                     ))}
                     <span className="text-xs uppercase text-slate-400">
                       Available
                     </span>
                     {/* {available.map((item) => (
                       <DropdownMenuItem key={item.name} item={item} />
                     ))} */}
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
          </Popover>
          <a href="/licenses" className="text-sm font-semibold leading-6 text-gray-900">
            Tus plugins
          </a>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a> */}
        </Popover.Group>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 pt-20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 mt-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Listado de plugins
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {plugins.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.link}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </a>
                <a
                  href="/Licenses"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Tus plugins
                </a>
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a> */}
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default DropDownHorizontalMenu;
