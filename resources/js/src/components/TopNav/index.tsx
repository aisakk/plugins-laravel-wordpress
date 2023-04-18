import React from 'react';
import DropdownAccount from '../DropdownAccount/index';
import DrawerMenu from '../DrawerMenu';
import MenuHorizontal from '../MenuHorizontal';
import Icon from '../Icon';
import {Plugin} from "../../types/DashboardTypes";

interface TopNavProps{
    plugins: Plugin[];
}

const TopNav: React.FC<TopNavProps> = (props) => {
    const {plugins} = props
    return (
        <nav className="fixed top-0 z-30 w-full bg-white shadow-lg items-center">
            <div className="flex justify-between items-center py-2 px-4">
                <div className="py-2 px-6 sm:px-0">
                        <img className="w-16 sm:mx-auto" src="https://cdn-bjgin.nitrocdn.com/LxoCvaeHElFzlCBGqsfvssGnySbvIRYM/assets/images/optimized/rev-2f83237/wp-content/uploads/2022/01/cropped-octo-300x300.png" alt="" />
                </div>

                <div className="flex gap-3">
                    <MenuHorizontal plugins={plugins}/>
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
