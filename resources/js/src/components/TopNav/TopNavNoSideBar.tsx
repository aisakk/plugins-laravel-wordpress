import React, { useState } from "react";
import DropdownAccount from "../DropdownAccount/index";
import MenuHorizontal from "../MenuHorizontal";
import Icon from "../Icon";
import { Plugin } from "../../types/DashboardTypes";
import { usePage } from "@inertiajs/inertia-react";
import DropDownGeneral from "../DropDownGeneral/DropDownGeneral";
import { Menu } from "@headlessui/react";
import axios from "axios";

interface TopNavNotSideBarProps {
    plugins: Plugin[];
}

const TopNavNotSideBar: React.FC<TopNavNotSideBarProps> = (props) => {
    const { plugins } = props;
    const { notifications, api_token } = usePage().props;

    const [localNotifications, setLocalNotifications] = useState(notifications);

    async function deleteNotification(id) {
        try {
            const response = await axios.delete(`/api/notifications/${id}`, {
                headers: {
                    Authorization: "Bearer " + api_token,
                },
            });
            setLocalNotifications((prevState) =>
                prevState.filter((notification) => notification.id !== id)
            );
        } catch (error) {
            console.error(error);
        }
    }
    const deleteAllNotifications = () => {
        axios
            .delete("/api/notifications/deleteAll", {
                headers: {
                    Authorization: "Bearer " + api_token,
                },
            })
            .then((res) => {
                // Actualiza la lista de notificaciones en el estado local
                setLocalNotifications([]);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <nav className="fixed top-0 z-30 w-full bg-white shadow-lg items-center">
            <div className="flex justify-between items-center py-2 px-4">
                <div className="flex gap-6 sm:pl-32">
                    <div className="">
                        {/* <DropdownMenu /> */}
                        <img
                            className="h-14 w-14"
                            src="https://cdn-bjgin.nitrocdn.com/LxoCvaeHElFzlCBGqsfvssGnySbvIRYM/assets/images/optimized/rev-2f83237/wp-content/uploads/2022/01/cropped-octo-300x300.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex gap-3">
                    <MenuHorizontal plugins={plugins} />
                    <button>
                        <DropDownGeneral
                            icons={<Icon name="notification" size={22} />}
                        >
                            <Menu.Item>
                                <div
                                    className="py-2 px-4 flex items-center hover:shadow-md"
                                    onClick={deleteAllNotifications}
                                >
                                    <p className="text-gray-700 flex-grow">
                                        Eliminar todo
                                    </p>
                                    <div className="text-sm">
                                        <Icon name="close" size={20} />
                                    </div>
                                </div>
                            </Menu.Item>
                            {Array.isArray(localNotifications) &&
                            localNotifications.length > 0 ? (
                                localNotifications.map((item, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                            {({ active }) => (
                                                <div className="flex items-center p-4">
                                                    <div className="flex-grow">
                                                        <p
                                                            className={`text-sm font-medium ${
                                                                active
                                                                    ? "bg-blue-500 text-white rounded-lg p-2"
                                                                    : ""
                                                            } ${
                                                                item.type_action ===
                                                                "expired"
                                                                    ? "text-red-500"
                                                                    : item.type_action ===
                                                                      "new"
                                                                    ? "text-green-500"
                                                                    : item.type_action ===
                                                                      "renewed"
                                                                    ? "text-yellow-500"
                                                                    : "text-orange-500"
                                                            }`}
                                                        >
                                                            {
                                                                item.description_notify
                                                            }
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="text-sm cursor-pointer"
                                                        onClick={() =>
                                                            deleteNotification(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        <Icon
                                                            name="close"
                                                            size={20}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </Menu.Item>
                                    );
                                })
                            ) : (
                                <div className="text-sm flex py-2 px-4">
                                    <p className="text-gray-400">
                                        No hay notificaciones
                                    </p>
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
