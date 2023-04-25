import React, { useState } from "react";
import Button from "../../components/Form/Button";
import Card from "../../components/Card";
import AreaSelector from "./AreaSelector";
import { arrayMoveImmutable } from "array-move";


import {
    ChatBtnProps,
    defaultChatBtnProps,
    ChatBtnWidgetProps,
} from "../../types/ChatBtnTypes";

import { FormType } from "../../types/FormTypes";
import ChatBtnCard from "./ChatBtnCard";
import ResponsiveRangeInput from "../Form/ResponsiveRangeInput";
import DeviceSwitchButtons from "../Form/DeviceSwitchButtons";


interface ChatBtnFormProps {
    setWidgetDataProperty: (
        property: keyof ChatBtnWidgetProps,
        value: ChatBtnProps[]
    ) => void;
    widgetData: ChatBtnWidgetProps;
    values: any;
    onValueChange: any;
    selectedDevice: any;
    onDeviceChange: any;
    redistributeMacBookStyleButtons: () => void;
}

const ChatBtnForm: React.FC<ChatBtnFormProps> = ({
    setWidgetDataProperty,
    widgetData,
    values,
    onValueChange,
    selectedDevice,
    onDeviceChange,
    redistributeMacBookStyleButtons
}) => {
    const [area, setArea] = useState("left-top");
    const [userType, setUserType] = useState(FormType.Basic);
    const [styleType, setStyleType] = useState("fixed");

    const macBookChatBtnProps = (selectedDevice: any): ChatBtnProps => ({
        ...defaultChatBtnProps(),
        buttonBorderRadius: {
            desktop: [99, 99, 99, 99],
            tablet: [99, 99, 99, 99],
            mobile: [99, 99, 99, 99],
        },
        device: selectedDevice,
    });

    const updateChatBtnWidgetProps = (
        index: number,
        name: string,
        value: any
    ) => {
        const updatedChatBtnPropsArray = [...widgetData[area]];
        if (styleType === "macbook") {
            updatedChatBtnPropsArray[index] = {
                ...updatedChatBtnPropsArray[index],
                [name]: value,
                borderRadius: macBookChatBtnProps(selectedDevice).buttonBorderRadius,
            };
        } else {
            updatedChatBtnPropsArray[index] = {
                ...updatedChatBtnPropsArray[index],
                [name]: value,
            };
        }

        setWidgetDataProperty(
            area as keyof ChatBtnWidgetProps,
            updatedChatBtnPropsArray
        );
    };

    const createNewButtonInCurrentArea = () => {
        const updatedChatBtnPropsArray = [...widgetData[area]];
        let newButtonProps;
        if (styleType === "macbook") {

            newButtonProps = macBookChatBtnProps(selectedDevice);
            if (area === "center-top" || area === "center-bottom") {
                newButtonProps.device = selectedDevice;
                updatedChatBtnPropsArray.push(newButtonProps);
            }
        } else {
            newButtonProps = defaultChatBtnProps();
            newButtonProps.device = selectedDevice;

            updatedChatBtnPropsArray.push(newButtonProps);
        }


        setWidgetDataProperty(
            area as keyof ChatBtnWidgetProps,
            updatedChatBtnPropsArray
        );
    };

    // const createNewButtonInCurrentArea = () => {
    //     const updatedChatBtnPropsArray = [...widgetData[area]];
    //     const newChatBtnProps = defaultChatBtnProps();
    //     newChatBtnProps.device = selectedDevice;
    //     updatedChatBtnPropsArray.push(newChatBtnProps);


    //     setWidgetDataProperty(
    //         area as keyof ChatBtnWidgetProps,
    //         updatedChatBtnPropsArray
    //     );
    // };


    const removeButtonOfCurrentArea = (index: number) => {
        const updatedChatBtnPropsArray = [...widgetData[area]];
        updatedChatBtnPropsArray.splice(index, 1);

        setWidgetDataProperty(
            area as keyof ChatBtnWidgetProps,
            updatedChatBtnPropsArray
        );
    };

    const changeButtonArea = (
        index: number,
        target: keyof ChatBtnWidgetProps
    ) => {
        if (origin == target) return;

        const buttonData = widgetData[area][index];

        const originArr = [...widgetData[area]];
        originArr.splice(index, 1);

        const targetArr = [...widgetData[target]];
        targetArr.push(buttonData);

        setWidgetDataProperty(area as keyof ChatBtnWidgetProps, originArr);
        setWidgetDataProperty(target, targetArr);

        setArea(target);
    };

    const changeButtonIndex = (index: number, modifier: number) => {
        if (index + modifier < 0 || index + modifier >= widgetData[area].length)
            return;

        const updatedChatBtnPropsArray = arrayMoveImmutable(
            widgetData[area],
            index,
            index + modifier
        ) as ChatBtnProps[];

        setWidgetDataProperty(
            area as keyof ChatBtnWidgetProps,
            updatedChatBtnPropsArray
        );
    };
    console.log(widgetData[area])
    return (
        <div className="w-full md:w-10/12 lg:w-8/12 xl:w-8/12">
            <Card>
                <div className="pb-10">
                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                        <div>
                            <h6 className="text-lg font-bold">Area</h6>
                            <p className="text-xs">
                                Select a page area to handle your buttons
                            </p>
                        </div>
                        <div>
                        {
                            widgetData[area].length > 0 && (
                                <ResponsiveRangeInput
                                values={widgetData[area][0].areaPadding.desktop}
                                label="Area Padding"
                                onValueChange={(newValue) =>
                                    updateChatBtnWidgetProps(0, "areaPadding", newValue)
                                }
                                />
                            )
                            }

                        </div>
                    </div>

                    <div className="pt-6">
                        <DeviceSwitchButtons twoDevices={true} device={selectedDevice} onValueChange={onDeviceChange} />
                        <AreaSelector
                            onSelect={(newArea: string) => {
                                setArea(newArea);
                            }}
                            selectedArea={area}
                        />

                        <div className="flex gap-3 pt-4">
                            <Button
                                isSelected={styleType === "fixed"}
                                onClick={() => {
                                    setStyleType("fixed");
                                }}
                            >
                                Fixed Style
                            </Button>
                            <Button
                                isSelected={styleType === "macbook"}
                                onClick={() => {
                                    setStyleType("macbook");
                                    redistributeMacBookStyleButtons()
                                }}
                            >
                                MacBook Style
                            </Button>
                            <Button
                                isSelected={styleType === "floating"}
                                onClick={() => {
                                    setStyleType("floating");
                                }}
                            >
                                Floating Style
                            </Button>
                        </div>

                    </div>

                </div>
                {/* <div className="pb-10">
                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                        <div>
                            <h6 className="text-lg font-bold">
                                General design
                            </h6>
                            <p className="text-xs">
                                Values ​​only affect the buttons of the current
                                area
                            </p>
                        </div>
                        <div>
                            <Icon name="arrow-down" className="w-5 md:w-6" />
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap gap-6 pb-4 pt-6">
                        <div className="w-full sm:w-4/12">
                            <InputMultiple label="Padding" basic />
                        </div>
                        <div className="w-full sm:w-4/12">
                            <InputMultiple label="Margin" basic />
                        </div>
                        <div className="w-full sm:w-4/12">
                            <InputMultiple label="Border radius" basic />
                        </div>
                    </div>
                </div> */}
                <div>
                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                        <div className="w-6/12">
                            <h6 className="text-lg">Buttons</h6>
                            <p className="text-xs"></p>
                        </div>
                    </div>
                    <div className="pt-4 flex justify-between">
                        <div>
                            <Button
                                onClick={() => {
                                    createNewButtonInCurrentArea();
                                }}
                            >
                                Add New
                            </Button>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                isSelected={userType == FormType.Basic}
                                onClick={() => {
                                    setUserType(FormType.Basic);
                                }}
                            >
                                Basic
                            </Button>
                            <Button
                                isSelected={userType == FormType.Advanced}
                                onClick={() => {
                                    setUserType(FormType.Advanced);
                                }}
                            >
                                Advanced
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="flex gap-6 flex-col pt-6">
                {widgetData[area].map((item, index) => {
                    if (item.device === selectedDevice) {
                        return (
                            <ChatBtnCard
                                key={index}
                                index={index}
                                buttonData={item}
                                userType={userType}
                                onValueChange={updateChatBtnWidgetProps}
                                removeRequest={removeButtonOfCurrentArea}
                                changeAreaRequest={changeButtonArea}
                                changeIndexRequest={changeButtonIndex}
                            ></ChatBtnCard>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default ChatBtnForm;
