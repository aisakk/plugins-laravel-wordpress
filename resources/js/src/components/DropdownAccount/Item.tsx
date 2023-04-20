import React, { useState, useEffect, useMemo } from 'react';
import {Menu} from "@headlessui/react";

import Icon from '../Icon';

interface DrawerMenuItemProps {
  item: {
    name: string;
    active: boolean;
    icon: string;
  };
  route: ()=>any
}

const DropdownAccountItem: React.FC<DrawerMenuItemProps> = ({ item, route }) => {

  return (
    <Menu.Item>
      {({ active }: { active: boolean }) => ( // Especifica el tipo del argumento 'active'
        <button
          className={`${
            active ? 'bg-slate-100' : 'text-gray-900'
          } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
          onClick={route}
        >
          <Icon name={item.icon} className="w-5 md:w-6" />
          {item.name}
        </button>
      )}
    </Menu.Item>
  );
};

export default DropdownAccountItem;
