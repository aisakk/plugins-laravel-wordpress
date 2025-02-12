import React, { useState, useEffect, useMemo, Fragment } from 'react';
import Icon from '../Icon';
import DropdownAccountItem from './Item';
import { Inertia } from '@inertiajs/inertia';


interface Item {
  name: string;
  active: boolean;
  icon: string;
  method: ()=>void;
}

const items: Item[] = [
  {
    name: 'Profile',
    active:true,
    icon: 'user',
    method: ()=>{},
  },
  {
    name: 'Logout',
    active:true,
    icon: 'logout-box',
    method: ()=>{}
  },
];

const DropdownAccount: React.FC = () => {
  const [Menu, setMenu] = useState<any>(null);
  const [Transition, setTransition] = useState<any>(null);

  function handleLogout() {
        return Inertia.post('/logout');
  }

  useEffect(() => {
    (async () => {
      const headlessUI = await import('@headlessui/react');
      setMenu(headlessUI.Menu);
      setTransition(headlessUI.Transition);
    })();
  }, []);

  const MenuItem = useMemo(() => {
    if (!Menu) return null;
    return Menu.Item;
  }, [Menu]);

  if (!Menu || !Transition) {
    return null;
  }

  return (
    <div>
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="flex text-left gap-3 w-full items-center rounded-md px-4 py-2 text-sm font-medium">
            <div className="w-12">
              <img
                className="rounded-xl w-12"
                src="https://ui-avatars.com/api/?name=Octonove&color=000000&background=CBD5E1"
                alt=""
              />
            </div>
            <div className="hidden sm:block">
              <h6 className="text-sm">Octonove Agency</h6>
              <p className="text-xs">octonove@gmail.com</p>
            </div>
            <div className="hidden sm:block">
              <Icon name="arrow-down" className="w-5 md:w-6" />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {items.map((item) => (
                item.name === 'Logout'
                ? <DropdownAccountItem key={item.name} item={item} route={handleLogout}/>
                : <DropdownAccountItem key={item.name} item={item} route={()=>{}}/>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownAccount;
