import React, { useState } from "react";
import Button from "../../components/Form/Button";
import Card from "../../components/Card";
import AreaSelector from "./AreaSelector";

import { ChatBtnProps, ChatBtnWidgetProps } from "../../types/ChatBtnTypes";

import { FormType } from "../../types/FormTypes";
import ChatBtnCard from "./ChatBtnCard";

interface ChatBtnFormProps {
    onNewButtonRequest: (area: keyof ChatBtnWidgetProps) => void;
    onRemoveButtonRequest: (
        index: number,
        area: keyof ChatBtnWidgetProps
    ) => void;
    onButtonSettingsUpdated: (
        area: keyof ChatBtnWidgetProps,
        index: number,
        name: keyof ChatBtnProps,
        value: any
    ) => void;
    widgetData: ChatBtnWidgetProps;
}

const ChatBtnForm: React.FC<ChatBtnFormProps> = ({
    onNewButtonRequest,
    onRemoveButtonRequest,
    onButtonSettingsUpdated,
    widgetData,
}) => {
    const [area, setArea] = useState("left-top");
    const [userType, setUserType] = useState(FormType.Basic);

    const handlePropertyChanged = (index: number, name: string, value: any) => {
        onButtonSettingsUpdated(
            area as keyof ChatBtnWidgetProps,
            index,
            name as keyof ChatBtnProps,
            value
        );
    };

    const broadCastRemoveAction = function (index: number) {
        onRemoveButtonRequest(index, area as keyof ChatBtnWidgetProps);
    };

    return (
        <div className="w-full xl:w-8/12">
            <Card>
                <div className="pb-10">
                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                        <div>
                            <h6 className="text-lg font-bold">Area</h6>
                            <p className="text-xs">
                                Select a page area to handle your buttons
                            </p>
                        </div>
                    </div>

                    <div className="pt-6">
                        <AreaSelector
                            onSelect={(newArea: string) => {
                                setArea(newArea);
                            }}
                            selectedArea={area}
                        />
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
                            <Icon name="arrow-down" size={25} />
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
                                    onNewButtonRequest(
                                        area as keyof ChatBtnWidgetProps
                                    );
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

            {/* <div className="flex justify-end items-center gap-6 px-2 py-10">
                <Label>Speed actions</Label>
                <div className="w-64">
                    <Select label={speed_actions} options={speed_actions} />
                </div>
            </div> */}

            <div className="flex gap-6 flex-col pt-6">
                {widgetData[area].map((item, index) => (
                    <ChatBtnCard
                        key={index}
                        index={index}
                        buttonData={item}
                        userType={userType}
                        onValueChange={handlePropertyChanged}
                        removeRequest={broadCastRemoveAction}
                    ></ChatBtnCard>
                ))}
            </div>
        </div>
    );
};

export default ChatBtnForm;
