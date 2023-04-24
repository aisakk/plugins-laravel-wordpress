import React, { ReactElement } from "react";
import ChatBtnIconSelect from "./ChatBtnIconSelectInput";
import Input from "../Form/Input";
import Label from "../Form/Label";

interface ChatBtnIconContentProps {
    icon: string;
    value: string;
    onChange: (name: string, newValue: string) => void;
    extraFieldValue: string;
    children?: ReactElement | any;
}
const ChatBtnIconContent: React.FC<ChatBtnIconContentProps> = ({
    icon,
    value,
    extraFieldValue,
    onChange,
    children,
}) => {
    let currentData = icon_data[icon];

    return (
        <>
            <div className="pt-6">
                <ChatBtnIconSelect
                    icon={icon}
                    onChange={(newIcon) => {
                        onChange("icon", newIcon);
                    }}
                />
                <div className="flex flex-wrap sm:flex-nowrap gap-6 pb-4 pt-4">
                    <div className="w-full sm:w-4/12">
                        <Label>{currentData.label}</Label>
                        <Input
                            value={value}
                            onChange={(newValue) => {
                                onChange("target", newValue);
                            }}
                            type={currentData.input}
                            placeholder={currentData.placeholder}
                        />
                        {currentData.extraField && (
                            <div className="mt-4">
                             <Label>{currentData.extraField.label}</Label>
                             <Input
                                 value={extraFieldValue}
                                 onChange={(newValue) => {
                                     onChange("extraField", newValue);
                                 }}
                                 type={currentData.extraField.input}
                                 placeholder={currentData.extraField.placeholder}
                             />
                         </div>
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default ChatBtnIconContent;

const icon_data = {
    whatsapp: {
        label: "Whatsapp Number",
        description: "",
        input: "number",
        placeholder: "+1 123 456 789",
        extraField: {
            label: "Mensaje Predeterminado",
            input: "text",
            placeholder: "Escriba aquí el texto predeterminado",
        },
    },
    facebook: {
        label: "Facebook Username",
        description: "",
        input: "text",
        placeholder: "my.example.username",
    },
    instagram: {
        label: "Instagram Username",
        description: "",
        input: "text",
        placeholder: "ExampleUsername",
    },
    phone: {
        label: "Phone Number",
        description: "",
        input: "number",
        placeholder: "+1 123 456 789",
    },
    email: {
        label: "Email Address",
        description: "",
        input: "text",
        placeholder: "address@example.com",
    },
    link: {
        label: "Custom URL",
        description: "",
        input: "text",
        placeholder: "https://www.example.com",
    },
};
