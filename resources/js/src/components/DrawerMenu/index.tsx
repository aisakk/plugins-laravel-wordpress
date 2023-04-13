import React, { useState } from 'react';
import DrawerMenuItem from './Item';
import DropdownMenu from '../DropdownMenu/index';
import Icon from '../Icon';

interface MenuItem {
  title: string;
  icon: string;
  link: string;
  active: boolean;
}

interface DrawerMenuProps {
  licenseId: number;
}

const DrawerMenu: React.FC<DrawerMenuProps> = (props) => {
  const { licenseId } = props;
  const [isShowing, setIsShowing] = useState(false);
  const currentPath = window.location.pathname;
  const items: MenuItem[] = [
    {
        title: 'Plan',
        icon: 'list-check',
        link: `/license/${licenseId}/dashboard`,
        active: false,
    },
    {
        title: 'Domains',
        icon: 'global',
        link: `/license/${licenseId}/domains`,
        active: false,
    },
    {
        title: 'Installation',
        icon: 'code',
        link: `/license/${licenseId}/installation`,
        active: false,
    },
    {
        title: 'Settings',
        icon: 'settings',
        link: `/license/${licenseId}/settings`,
        active: false,
    },
    {
        title: 'Logs',
        icon: 'danger',
        link: `/license/${licenseId}/logs`,
        active: false,
      },
  ];

  return (
    <>
      <button
        onClick={() => setIsShowing(!isShowing)}
        className={`${isShowing ? 'ml-24' : ''} sm:hidden`}
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
          <Icon name="close" size={25} />
        </button>
        <div className="py-4 px-6 sm:px-2">
          <img
            className="w-16 sm:mx-auto"
            src="https://cdn-bjgin.nitrocdn.com/LxoCvaeHElFzlCBGqsfvssGnySbvIRYM/assets/images/optimized/rev-2f83237/wp-content/uploads/2022/01/cropped-octo-300x300.png"
            alt=""
          />
        </div>
        <div className="px-6 sm:hidden">
          <DropdownMenu />
        </div>
        <div className="flex flex-col gap-y-2 px-6 sm:px-2 py-10">
          {items.map((item) => (
            <DrawerMenuItem key={item.title} item={{ ...item, active: currentPath === item.link }}  />
          ))}
        </div>
      </nav>
    </>
  );
};

export default DrawerMenu;
