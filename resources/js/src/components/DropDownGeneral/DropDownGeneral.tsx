
import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react'


interface DropDownGeneralProps {
  icons?: React.ReactNode;
  items?: React.ReactNode | Array<any>;
  children?:  React.ReactNode,
}

function DropDownGeneral({ icons, items, children }: DropDownGeneralProps) {
  // Función para manejar la iteración del array y la renderización de los elementos
  const renderMenuItems = () => {
    if (children) {
        return children;
    }else if (Array.isArray(items)) {
      return items.map((item, index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href={item.href}>
              {item.label}
            </a>
          )}
        </Menu.Item>
      ));
    } else {
      return (
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="#">
              {items}
            </a>
          )}
        </Menu.Item>
      );
    }
  };

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="flex text-left gap-3 w-full items-center rounded-md px-4 py-2 text-sm font-medium">
        {icons}
      </Menu.Button>
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
          <div className="px-1 py-1">{renderMenuItems()}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}


export default DropDownGeneral
