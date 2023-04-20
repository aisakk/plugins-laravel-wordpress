// DrawerMenuItem.tsx
import React, { Suspense } from 'react';
import { Link } from "@inertiajs/inertia-react";
import Icon from '../Icon';

interface DrawerMenuItemProps {
  item: {
    link: string;
    active: boolean;
    icon: string;
    title: string;
  };
}

const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({ item }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Link
        href={`${item.link}`}
        className={`flex sm:flex-col gap-x-2 gap-y-1 items-center px-2 py-3 rounded-xl ${
          item.active ? 'bg-primary text-white' : ''
        }`}
      >
        <Icon name={item.icon} className="w-5 md:w-6" />
        <span className="text-xs block">{item.title}</span>
      </Link>
    </Suspense>
  );
};

export default DrawerMenuItem;
