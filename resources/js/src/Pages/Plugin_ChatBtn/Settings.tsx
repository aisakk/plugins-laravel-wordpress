import React, { useState } from "react";
import {
    ChatBtnProps,
    defaultChatBtnProps,
    ChatBtnWidgetProps,
    defaultChatBtnWidgetProps,
} from "../../types/ChatBtnTypes";

import MainLayout from "../../layouts/MainLayout";
import ChatBtnForm from "./ChatBtnForm";

import Preview from "../../components/Preview";

const Settings: React.FC<LicenseProps> = (props) => {
    const [widgetData, setWidgetData] = useState(defaultChatBtnWidgetProps);
    const { license } = props;

    function createNewButton(area: keyof ChatBtnWidgetProps) {
        setWidgetData((prevWidgetData) => {
            const updatedChatBtnPropsArray = [...prevWidgetData[area]];
            updatedChatBtnPropsArray.push(defaultChatBtnProps());

            return {
                ...prevWidgetData,
                [area]: updatedChatBtnPropsArray,
            };
        });
    }

    function removeButton(index: number, area: keyof ChatBtnWidgetProps) {
        setWidgetData((prevWidgetData) => {
            const updatedChatBtnPropsArray = [...prevWidgetData[area]];
            updatedChatBtnPropsArray.splice(index, 1);

            return {
                ...prevWidgetData,
                [area]: updatedChatBtnPropsArray,
            };
        });
    }

    const updateChatBtnWidgetProps = (
        area: keyof ChatBtnWidgetProps,
        index: number,
        name: keyof ChatBtnProps,
        value: any
    ) => {
        setWidgetData((prevWidgetData) => {
            const updatedChatBtnPropsArray = [...prevWidgetData[area]];
            updatedChatBtnPropsArray[index] = {
                ...updatedChatBtnPropsArray[index],
                [name]: value,
            };

            return {
                ...prevWidgetData,
                [area]: updatedChatBtnPropsArray,
            };
        });
    };

    return (
        <MainLayout licenseId={license.id}>
            <div className="pt-10">
                <div>
                    <div className="flex flex-wrap xl:flex-nowrap gap-6">
                        <ChatBtnForm
                            onNewButtonRequest={createNewButton}
                            onRemoveButtonRequest={removeButton}
                            onButtonSettingsUpdated={updateChatBtnWidgetProps}
                            widgetData={widgetData}
                        />
                        {/* <Preview
                            licenseId={license.id}
                            widgetData={widgetData}
                        /> */}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Settings;

interface License {
    id: number;
    date: string;
    code: string;
    pluginName: string;
    expiration: string;
    domains: string;
    status: string;
}

interface LicenseProps {
    license: License;
}
