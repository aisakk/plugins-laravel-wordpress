// DropdownMenuItem.tsx
import React, { Suspense } from 'react';
import { Link } from "@inertiajs/react";

interface DropdownMenuItemProps {
  item: {
    name: string;
    link: string;
    icon: string;
    description: string;
  };
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ item }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Link
        key={item.name}
        href={item.link}
        className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-100"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
          <img src={item.icon} className="rounded-xl" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-900">{item.name}</p>
          <p className="text-xs text-gray-500">{item.description}</p>
        </div>
      </Link>
    </Suspense>
  );
};

export default DropdownMenuItem;
