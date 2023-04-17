import React, { useState, useMemo } from "react";
import {
    ChatBtnProps,
    defaultChatBtnProps,
    ChatBtnWidgetProps,
    defaultChatBtnWidgetProps,
} from "../types/ChatBtnTypes";
import { Inertia } from "@inertiajs/inertia";
import { notification } from "antd";
import { renderToString } from "react-dom/server";
// import type { NotificationPlacement } from "antd/es/notification/interface";
// import { router } from "@inertiajs/react";

import MainLayout from "../layouts/MainLayout";

import ChatBtnPreview from "../components/ChatBtn/ChatBtnPreview";
import Button from "../components/Form/Button";
import ChatBtnForm from "../components/ChatBtn/ChatBtnForm";
import ChatBtnWidgetBuilder from "../components/ChatBtn/WidgetBuilder/ChatBtnWidgetBuilder";

const ChatBtnSettings: React.FC<LicenseProps> = (props) => {
    const [widgetData, setWidgetData] = useState(defaultChatBtnWidgetProps);
    const { license } = props;
    const [api, contextHolder] = notification.useNotification();

    const Context = React.createContext({ name: "Default" });

    const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

    const setWidgetDataProperty = (
        property: keyof ChatBtnWidgetProps,
        value: ChatBtnProps[]
    ) => {
        setWidgetData((prevWidgetData) => {
            return {
                ...prevWidgetData,
                [property]: value,
            };
        });
    };

    //     function doStuff() {
    //         api.success({
    //             message: `Widget Saved Successfully!`,
    //             description: (
    //                 <Context.Consumer>
    //                     {({ name }) =>
    //                         `Your settings were saved and sent to your website. Your widget will be updated in some minutes.`
    //                     }
    //                 </Context.Consumer>
    //             ),
    //             placement: "bottomRight",
    //             duration: 5,
    //         });
    //     }

    function requestWidgetSave() {
        console.log(
            renderToString(<ChatBtnWidgetBuilder widgetData={widgetData} />)
        );

        //   doStuff();
        const payload: Record<string, string> = {
            meta_key: "settings",
            meta_value: JSON.stringify(widgetData),
        };
        //   router.post("/plugins/${license.id}/save-settings", {
        //       ...payload,
        //       onSuccess: () => reset("password"),
        //   });
        Inertia.post(`/plugins/${license.id}/save-settings`, payload, {
            preserveState: true,
            onSuccess: (page) => {
                console.log("success!!!");
            },
            onError: (errors) => {
                console.log("error!!!");
            },
        });
    }

    return (
        <MainLayout licenseId={license.id}>
            <div className="pt-10">
                <div>
                    <div className="flex flex-wrap xl:flex-nowrap gap-6">
                        <ChatBtnForm
                            setWidgetDataProperty={setWidgetDataProperty}
                            widgetData={widgetData}
                        />
                        <ChatBtnPreview widgetData={widgetData}>
                            <Button
                                background="bg-primary hover:bg-blue-900"
                                color="text-white"
                                width="w-full"
                                padding="p-3"
                                onClick={requestWidgetSave}
                            >
                                Save
                            </Button>
                        </ChatBtnPreview>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ChatBtnSettings;

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
