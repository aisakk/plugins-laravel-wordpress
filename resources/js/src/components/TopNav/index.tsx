import React, { useState, useEffect } from "react";
import DropdownAccount from "../DropdownAccount/index";
import DrawerMenu from "../DrawerMenu";
import MenuHorizontal from "../MenuHorizontal";
import Icon from "../Icon";
import DropDownGeneral from "../DropDownGeneral/DropDownGeneral";
import axios from "axios";
import { Menu } from "@headlessui/react";
import { usePage } from "@inertiajs/inertia-react";



interface Notification {
    created_at: string;
    description_notify: string;
    id: number;
    link: string;
    type_action: string;
    updated_at: string;
    user_id: number;
}
const TopNav: React.FC = () => {
    const { notifications} = usePage().props
    const [notification, setNotification] = useState<Notification[]>([]);
    async function getNotification() {
        return  await axios.post(
                "/api/license/notification",
                {
                    data: "hellow",
                },
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("api_token"),
                    },
                }
            )
            .then((res) => setNotification(res.data));
    }
    function selectNotificationSource() {
        return notifications && Array.isArray(notifications) && notifications.length > 0
            ? notifications
            : notification;
    }

    useEffect(() => {
        getNotification();
    }, []);
    return (
        <nav className="fixed top-0 z-30 w-full bg-white shadow-lg items-center">
            <div className="flex justify-between items-center py-2 px-4">
                <div className="flex gap-6 sm:pl-32">
                    <div className="">
                        {/* <DropdownMenu /> */}
                    {/*     <DrawerMenu licenseId={licenseId}  /> */}
                    </div>
                </div>

                <div className="flex gap-3">
                        <MenuHorizontal />

                    <button>
                        <DropDownGeneral
                            icons={<Icon name="notification" size={22} />}
                        >
                            {selectNotificationSource().map((item, index) => {
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
                                })}
                        </DropDownGeneral>
                    </button>
                    <DropdownAccount />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
