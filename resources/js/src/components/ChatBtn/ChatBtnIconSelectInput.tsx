import { useState, useEffect } from "react";
import Icon from "../../components/Icon";
import { RadioGroup } from "@headlessui/react";

interface ButtonOption {
    name: string;
    value: string;
}

const buttons: ButtonOption[] = [
    {
        name: "Facebook",
        value: "facebook",
    },
    {
        name: "WhatsApp",
        value: "whatsapp",
    },
    {
        name: "Instagram",
        value: "instagram",
    },
    {
        name: "Phone",
        value: "phone",
    },
    {
        name: "Email",
        value: "email",
    },
    {
        name: "Link",
        value: "link",
    },
];

interface ChatBtnIconSelect {
    icon: string;
    onChange: (newIcon: string) => void;
}

const ChatBtnIconSelect = ({ icon, onChange }) => {
    return (
        <div>
            <RadioGroup value={icon} onChange={onChange}>
                <div className="flex flex-wrap xl:flex-nowrap xl:space-x-3 space-y-3 sm:space-y-0">
                    {buttons.map((item, index) => (
                        <RadioGroup.Option
                            key={item.value}
                            value={item.value}
                            className={({
                                active,
                                checked,
                            }: {
                                active: boolean;
                                checked: boolean;
                            }) =>
                                `${index % 2 ? "pl-2" : "pr-2"}
                  w-6/12 xl:w-2/12 relative cursor-pointer focus:outline-none`
                            }
                        >
                            {({
                                active,
                                checked,
                            }: {
                                active: boolean;
                                checked: boolean;
                            }) => (
                                <>
                                    <div
                                        className={`
                        ${
                            checked
                                ? "bg-slate-50 border-primary"
                                : "bg-white border-slate-50"
                        } relative p-2 w-full h-20  border-2 rounded-lg p-2 shadow-md`}
                                    >
                                        <div
                                            className={`flex h-full w-full justify-center items-center`}
                                        >
                                            <Icon name={item.value} size={25} />
                                        </div>
                                        {checked && (
                                            <div className="absolute right-0 top-0 text-green-500">
                                                <CheckIcon className="h-6 w-6" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="text-xs text-center mt-2">
                                        <h6 className="">{item.name}</h6>
                                    </div>
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#dcfce7" opacity="1" />
            <path
                d="M7 13l3 3 7-7"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ChatBtnIconSelect;
