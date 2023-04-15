import React from 'react';
import DropdownAccount from '../DropdownAccount/index';
import DrawerMenu from '../DrawerMenu';
import MenuHorizontal from '../MenuHorizontal';
import Icon from '../Icon';

const TopNav: React.FC = () => {
    return (
        <nav className="fixed top-0 z-30 w-full bg-white shadow-lg items-center">
            <div className="flex justify-between items-center py-2 px-4">
                <div className="flex gap-6 sm:pl-32">
                    <div className="">
                        {/* <DropdownMenu /> */}
                        <DrawerMenu  />
                    </div>
                </div>

                <div className="flex gap-3">
                <MenuHorizontal/>
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
