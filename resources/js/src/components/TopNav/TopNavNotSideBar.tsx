import React from 'react';
import DropdownAccount from '../DropdownAccount/index';
import MenuHorizontal from '../MenuHorizontal';
import Icon from '../Icon';

interface Plugin{
    name:string;
    readme_path:string;
}

interface TopNavNotSideBarProps{
    plugins:Plugin[];
}

const TopNavNotSideBar: React.FC<TopNavNotSideBarProps> = (props) => {
    const {plugins}=props;
    return (
        <nav className="fixed top-0 z-30 w-full bg-white shadow-lg items-center">
            <div className="flex justify-between items-center py-2 px-4">
                <div className="flex gap-6 sm:pl-32">
                    <div className="">
                        {/* <DropdownMenu /> */}
                        <img className="h-14 w-14" src="https://cdn-bjgin.nitrocdn.com/LxoCvaeHElFzlCBGqsfvssGnySbvIRYM/assets/images/optimized/rev-2f83237/wp-content/uploads/2022/01/cropped-octo-300x300.png" alt="" />
                    </div>
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

export default TopNavNotSideBar;
