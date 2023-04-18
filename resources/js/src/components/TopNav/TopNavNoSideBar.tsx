import React from 'react';
import DropdownAccount from '../DropdownAccount/index';
import MenuHorizontal from '../MenuHorizontal';
import Icon from '../Icon';
import {Plugin} from "../../types/DashboardTypes";
import { usePage } from "@inertiajs/inertia-react";
import DropDownGeneral from "../DropDownGeneral/DropDownGeneral";
import { Menu } from "@headlessui/react";
interface TopNavNotSideBarProps{
    plugins:Plugin[];
}

const TopNavNotSideBar: React.FC<TopNavNotSideBarProps> = (props) => {
    const {plugins}=props;
    const { notifications} = usePage().props
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
                    <DropDownGeneral
                            icons={<Icon name="notification" size={22} />}
                        >
                            {Array.isArray(notifications) && notifications.length > 0 ? (
                                notifications.map((item, index)=>{
                                    return (
                                        <Menu.Item key={index}>
                                            {({ active }) => (
                                                <a
                                                    className={`${
                                                        active && "bg-blue-500 rounded-lg text-white text-sm"
                                                    } flex`}
                                                    href={item.link}
                                                >
                                                    {item.type_action == "expired" && (<div className="text-sm flex py-2 px-4">
                                                        <p>{item.description_notify}</p>
                                                        <div className="text-red-500">
                                                            <Icon name="close" size={15} />
                                                        </div>
                                                    </div>
                                                    )}
                                                     {item.type_action == "new" && (
                                                       <div className="text-sm flex py-2 px-4">
                                                       <p>{item.description_notify}</p>
                                                       <div className="text-green-500">
                                                           <Icon name="close" size={15} />
                                                       </div>
                                                   </div>
                                                    )}
                                                     {item.type_action == "renewed" && (
                                                        <div className="text-sm flex py-2 px-4">
                                                        <p>{item.description_notify}</p>
                                                        <div className="text-yellow-500">
                                                            <Icon name="close" size={15} />
                                                        </div>
                                                    </div>
                                                    )}
                                                     {item.type_action == "about_expired" && (
                                                        <div className="text-sm flex py-2 px-4">
                                                        <p>{item.description_notify}</p>
                                                        <div className="text-orange-500">
                                                            <Icon name="close" size={15} />
                                                        </div>
                                                    </div>
                                                    )}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    );
                                })
                            ) : (
                                <div className="text-sm flex py-2 px-4">
                                    <p className='text-gray-400'>No hay notificaciones</p>
                            </div>
                            )}
                        </DropDownGeneral>
                    </button>

                    <DropdownAccount />
                </div>
            </div>
        </nav>
    );
};

export default TopNavNotSideBar;
