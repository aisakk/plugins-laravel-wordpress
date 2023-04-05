import React from 'react';
import DrawerMenu from '../DrawerMenu/index';
import DropdownMenu from '../DropdownMenu/index';
import DropdownAccount from '../DropdownAccount/index';
import Icon from '../Icon';

const TopNav: React.FC = () => {
    return (
        <nav className="fixed top-0 z-30 w-full bg-white shadow-lg items-center">
            <div className="flex justify-between items-center py-2 px-4">
                <div className="flex gap-6 sm:pl-32">
                    <DrawerMenu />
                    <div className="hidden sm:block">
                        <DropdownMenu />
                    </div>
                </div>

                <div className="flex gap-3">
                    <button>
                        <Icon name="notification" size={25}/>
                    </button>
                    <DropdownAccount />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
