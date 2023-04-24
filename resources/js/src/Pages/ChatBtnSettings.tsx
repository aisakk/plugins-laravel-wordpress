import React, { useState, useMemo, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { License, LicenseMeta } from "../types/DashboardTypes";
import {
    ChatBtnProps,
    defaultChatBtnProps,
    ChatBtnWidgetProps,
    defaultChatBtnWidgetProps,
    BreakpointValues
} from "../types/ChatBtnTypes";
import { notification } from "antd";
import { renderToString } from "react-dom/server";

import ChatBtnPreview from "../components/ChatBtn/ChatBtnPreview";
import Button from "../components/Form/Button";
import ChatBtnForm from "../components/ChatBtn/ChatBtnForm";
import ChatBtnWidgetBuilder from "../components/ChatBtn/WidgetBuilder/ChatBtnWidgetBuilder";
import Alert from "../components/Alert/Alert";
import { usePage } from "@inertiajs/inertia-react";


interface LicenseProps {
    license: License;
    license_meta: LicenseMeta;
    values: BreakpointValues<number>;
    onValueChange: (newValues: BreakpointValues<number>) => void;
    updateWidgetData: (newWidgetData: ChatBtnWidgetProps) => void;
}

const ChatBtnSettings: React.FC<LicenseProps> = ({
    license,
    license_meta,
    values,
    onValueChange,
}) => {
    const [selectedDevice, setSelectedDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

    const [widgetData, setWidgetData] = useState(defaultChatBtnWidgetProps);
    const Context = React.createContext({ name: "Default" });
    const json = JSON.parse(license_meta.meta_value);
    const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
    const {errors, success} = usePage().props
    const [showAlert, setShowAlert] = useState(false);
    const [processing, setProcessing] = useState(false);

    const updateWidgetData = (newWidgetData: ChatBtnWidgetProps) => {
        setWidgetData(newWidgetData);
      };
    const redistributeMacBookStyleButtons = () => {
        const allButtons = [
            ...widgetData["left-top"],
            ...widgetData["left-bottom"],
            ...widgetData["right-top"],
            ...widgetData["right-bottom"],
            ...widgetData["left-center"],
            ...widgetData["center-top"],
            ...widgetData["center-bottom"],
            ...widgetData["right-center"],
        ];

        const macBookStyleButtons = allButtons.map((button) => ({
            ...button,
            buttonBorderRadius: {
                desktop: [99, 99, 99, 99],
                tablet: [99, 99, 99, 99],
                mobile: [99, 99, 99, 99],
            },
        }));

        const centerTopButtons = macBookStyleButtons.slice(
            0,
            Math.ceil(macBookStyleButtons.length / 2)
        );
        const centerBottomButtons = macBookStyleButtons.slice(
            Math.ceil(macBookStyleButtons.length / 2)
        );

        const updatedWidgetData: ChatBtnWidgetProps = {
            ...widgetData,
            "center-top": centerTopButtons,
            "center-bottom": centerBottomButtons,
        };

        Object.keys(updatedWidgetData).forEach((key) => {
            if (key !== "center-top" && key !== "center-bottom") {
                updatedWidgetData[key as keyof ChatBtnWidgetProps] = [];
            }
        });

        updateWidgetData(updatedWidgetData);
    };


    const handleDeviceChange = (newDevice: "desktop" | "tablet" | "mobile") => {
        setSelectedDevice(newDevice);
    };


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


    function requestWidgetSave() {
        console.log(
            renderToString(<ChatBtnWidgetBuilder widgetData={widgetData} />)
        );

    }
    function convertToWidgetData(property: keyof ChatBtnWidgetProps, json) {
        let newWidgetData = {
            ...defaultChatBtnWidgetProps,
            "left-top": [],
            "right-top": [],
            "center-top": [],
            "center-bottom": [],
            "left-bottom": [],
            "right-bottom": [],
        };

        json.contentButtons.forEach((button) => {
            const position =
                button.cssDesign.containerDesign.position || "left-top";

            const getResponsiveValue = (
                responsiveData: any,
                defaultValue: any,
                defaultResponsiveValue: any
            ) => {
                return (
                    responsiveData.pc ||
                    responsiveData.tablet ||
                    responsiveData.mobile ||
                    defaultResponsiveValue ||
                    defaultValue
                );
            };

            if (position) {
                const newButton = {
                    id: button.id,
                    device: selectedDevice,
                    label: button.labelText,
                    target: button.link || "",
                    icon: button.icon || "",
                    visibility: {
                        desktop: true,
                        tablet: true,
                        mobile: true,
                    },
                    hidden: false,
                    isSelected: false,
                    buttonBackgroundColor:
                        button.cssDesign.buttonDesign.backgroundColor || "",
                    buttonBorderRadius: {
                        desktop: getResponsiveValue(
                            button.cssDesign.buttonDesign.borderRadius,
                            0,
                            0
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.buttonDesign.borderRadius,
                            0,
                            0
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.buttonDesign.borderRadius,
                            0,
                            0
                        ),
                    },
                    buttonPadding: {
                        desktop: getResponsiveValue(
                            button.cssDesign.buttonDesign.padding,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.buttonDesign.padding,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.buttonDesign.padding,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                    },
                    buttonMargin: {
                        desktop: getResponsiveValue(
                            button.cssDesign.buttonDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.buttonDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.buttonDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                    },
                    labelBackgroundColor:
                        button.cssDesign.labelDesign.backgroundColor || "",
                    labelColor: button.cssDesign.labelDesign.color || "",
                    labelFontFamily:
                        button.cssDesign.labelDesign.fontFamily || "",
                    labelBorderRadius: {
                        desktop: getResponsiveValue(
                            button.cssDesign.labelDesign.borderRadius,
                            0,
                            0
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.labelDesign.borderRadius,
                            0,
                            0
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.labelDesign.borderRadius,
                            0,
                            0
                        ),
                    },
                    labelFontSize: {
                        desktop: getResponsiveValue(
                            button.cssDesign.labelDesign.fontSize,
                            "16",
                            "16"
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.labelDesign.fontSize,
                            "16",
                            "16"
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.labelDesign.fontSize,
                            "16",
                            "16"
                        ),
                    },
                    labelPadding: {
                        desktop: getResponsiveValue(
                            button.cssDesign.labelDesign.padding,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.labelDesign.padding,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.labelDesign.padding,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                    },
                    labelMargin: {
                        desktop: getResponsiveValue(
                            button.cssDesign.labelDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.labelDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.labelDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                    },
                    iconColor: button.cssDesign.iconDesign.color || "",
                    iconSize: {
                        desktop: getResponsiveValue(
                            button.cssDesign.iconDesign.iconSize ,
                            50,
                            50
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.iconDesign.iconSize ,
                            50,
                            50
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.iconDesign.iconSize ,
                            50,
                            50
                        ),
                    },
                    iconMargin: {
                        desktop: getResponsiveValue(
                            button.cssDesign.iconDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        tablet: getResponsiveValue(
                            button.cssDesign.iconDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                        mobile: getResponsiveValue(
                            button.cssDesign.iconDesign.margin,
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ),
                    },
                };
                newWidgetData[position].push(newButton);
            }
        });
        setWidgetDataProperty(property, newWidgetData[property]);
    }
    function handleAlert(){
        setShowAlert(!showAlert)
    }
    useEffect(() => {
        convertToWidgetData("left-top", json);
    }, []);


    return (
        <MainLayout licenseId={license.id}>
            <div className="pt-10">
                <div>
                    <div className="flex flex-wrap xl:flex-nowrap gap-6 w-full">

                        <ChatBtnForm
                            setWidgetDataProperty={setWidgetDataProperty}
                            widgetData={widgetData}
                            values={values}
                            onValueChange={onValueChange}
                            selectedDevice={selectedDevice}
                            onDeviceChange={handleDeviceChange}
                            redistributeMacBookStyleButtons={
                                redistributeMacBookStyleButtons
                            }
                        />


                        <ChatBtnPreview widgetData={widgetData}
                        selectedDevice={selectedDevice}
                        >
                            <Button
                                background="bg-primary hover:bg-blue-900"
                                color="text-white"
                                width="w-full"
                                padding="p-3"
                                onClick={requestWidgetSave}
                            >
                                {processing ? (
                                      <div className="animate-spin  rounded-full border-t-gray-700 border-4 border-t-4 border-gray-200 h-4 w-4"></div>
                                ) : (
                                    <p>Save</p>
                                )}

                            </Button>
                        </ChatBtnPreview>
                        {errors && Object.keys(errors).length > 0 && (
                            <Alert error={errors} show={!showAlert} onClose={handleAlert} />
                        )}
                        {success && Object.keys(success).length > 0 && (
                            <Alert success={success} show={!showAlert} onClose={handleAlert} />
                        )}

                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ChatBtnSettings;
