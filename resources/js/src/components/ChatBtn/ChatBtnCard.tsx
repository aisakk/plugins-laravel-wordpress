import React from "react";
import { ChatBtnProps, ChatBtnWidgetProps } from "../../types/ChatBtnTypes";

import Card from "../Card";
import Button from "../Form/Button";
import Icon from "../Icon";
import Badge from "../Badge";
import Label from "../Form/Label";
import Input from "../Form/Input";
import InputColor from "../Form/InputColor";
import { FormType } from "../../types/FormTypes";
import UserBasedSpacingInput from "../Form/SpacingInput/UserBasedSpacingInput";
import ChatBtnIconContent from "./ChatBtnIconContent";
import ResponsiveRangeInput from "../Form/ResponsiveRangeInput";
import Select from "../Form/Select";
import { QRCode, Space  } from "antd";
interface ChatBtnCardProps {
    index: number;
    buttonData: ChatBtnProps;
    userType: FormType;
    onValueChange: (index: number, name: string, value: any) => void;
    removeRequest: (index: number) => void;
    changeAreaRequest: (
        index: number,
        newArea: keyof ChatBtnWidgetProps
    ) => void;
    changeIndexRequest: (index: number, modifier: number) => void;
}

const ChatBtnCard: React.FC<ChatBtnCardProps> = ({
    index,
    buttonData,
    userType,
    onValueChange,
    removeRequest,
    changeAreaRequest,
    changeIndexRequest,
}) => {
    const areaOptions = [
        "Left-Top",
        "Left-Center",
        "Left-Bottom",
        "Right-Top",
        "Right-Center",
        "Right-Bottom",
    ];

    function requestChangeToArea(areaIndex) {
        let areaKey: keyof ChatBtnWidgetProps = areaOptions[
            areaIndex
        ].toLowerCase() as keyof ChatBtnWidgetProps;
        changeAreaRequest(index, areaKey);
    }
   /*  function getFormattedLinkQRCode() {
        let userContent = buttonData.target;
        switch (buttonData.icon) {
            case "whatsapp":
                return `https://api.whatsapp.com/send?phone=${userContent}`;
            case "facebook":
                return `https://www.facebook.com/${userContent}`;
            case "instagram":
                return `https://www.instagram.com/${userContent}`;
            case "phone":
                return `tel:${userContent}`;
            case "email":
                return `mail:${userContent}`;
        }
        return userContent;
    } */
    return (
        <Card>
            <div className="flex flex-col justify-between items-start border-b border-solid border-slate-400 pb-4">
                <div className="flex flex-wrap gap-3 mb-5">
                    <h4 className="flex  text-2xl font-bold items-center gap-4  flex-wrap">
                        Button #{index + 1}
                        <div className="flex gap-1">
                            <Button
                                background="bg-blue-100 hover:bg-blue-200"
                                color="text-blue-400"
                                border="border-blue-100"
                                padding="p-2"
                                onClick={() => {
                                    changeIndexRequest(index, -1);
                                }}
                            >
                                <Icon name="arrow-up" className="w-5 md:w-6" />
                            </Button>
                            <Button
                                background="bg-blue-100 hover:bg-blue-200"
                                color="text-blue-400"
                                border="border-blue-100"
                                padding="p-2"
                                onClick={() => {
                                    changeIndexRequest(index, 1);
                                }}
                            >
                                <Icon name="arrow-down" className="w-5 md:w-6" />
                            </Button>
                        </div>
                    </h4>
                    <div className="flex gap-3 items-center flex-wrap">
                    <Select
                        options={areaOptions}
                        selected={-1}
                        onChange={requestChangeToArea}
                        label="Move to "
                    />
                    <Button
                        background="bg-blue-100 hover:bg-blue-200"
                        color="text-blue-400"
                        border="border-blue-100"
                        padding="p-2"
                        onClick={() => {
                            onValueChange(index, "hidden", !buttonData.hidden);
                        }}
                    >
                        <Icon
                            name={buttonData.hidden ? "eye-off" : "eye"}
                            className="w-5 md:w-6"
                        />
                    </Button>
                    <Button
                        background="bg-red-100 hover:bg-red-200"
                        color="text-red-400"
                        border="border-red-100"
                        padding="p-2"
                        onClick={() => {
                            removeRequest(index);
                        }}
                    >
                        <Icon name="trash" className="w-5 md:w-6" />
                    </Button>
                    </div>
                </div>
                <div>
                    <h6 className="text-lg font-bold">1. Content</h6>
                    <p className="text-xs">
                        Select an icon type and fill the content for it
                    </p>
                </div>

            </div>
            <div className="py-6">
                {/* Select the content icon and input with label */}
                <ChatBtnIconContent
                    icon={buttonData.icon}
                    value={buttonData.target}
                    onChange={(name, value) => {
                        onValueChange(index, name, value);
                    }}
                >
                    <div className="w-full sm:w-4/12">
                        <Label>Label Text</Label>
                        <Input
                            value={buttonData.label}
                            placeholder="Let's talk!"
                            onChange={(value) => {
                                onValueChange(index, "label", value);
                            }}
                        />
                    </div>
                </ChatBtnIconContent>
            </div>
            <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                <div>
                    <h6 className="text-lg font-bold">2. Design</h6>
                    <p className="text-xs">
                        Customize your button to match your website style
                    </p>
                </div>
            </div>
            <div className="pt-4">
                <div className="border-b border-solid border-slate-400 pt-4 pb-4">
                    <Badge>Button</Badge>
                    <div className="flex flex-wrap sm:flex-nowrap gap-6 pb-4 pt-4">
                        <div className="w-6/12 sm:w-2/12">
                            <InputColor
                                label="Background"
                                onChange={(value) => {
                                    onValueChange(
                                        index,
                                        "buttonBackgroundColor",
                                        value
                                    );
                                }}
                                value={buttonData.buttonBackgroundColor}
                            />
                        </div>
                        <div className="w-full sm:w-10/12">
                            <div className="flex gap-3">
                                <div className="w-6/12">
                                    <UserBasedSpacingInput
                                        userType={userType}
                                        values={buttonData.buttonBorderRadius}
                                        label="Border Radius"
                                        descriptions={[
                                            "Left Top",
                                            "Right Top",
                                            "Right Bottom",
                                            "Left Bottom",
                                        ]}
                                        onValueModified={(value) => {
                                            onValueChange(
                                                index,
                                                "buttonBorderRadius",
                                                value
                                            );
                                        }}
                                    />
                                </div>
                                <div className="w-full sm:w-6/12">
                                    <UserBasedSpacingInput
                                        userType={userType}
                                        values={buttonData.buttonMargin}
                                        label="Margin"
                                        descriptions={[
                                            "Top",
                                            "Right",
                                            "Bottom",
                                            "Left",
                                        ]}
                                        onValueModified={(value) => {
                                            onValueChange(
                                                index,
                                                "buttonMargin",
                                                value
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-solid border-slate-400 pt-4">
                    <Badge>Label</Badge>
                    <div className="flex flex-wrap gap-y-4 sm:gap-6 pb-4 pt-4">
                        <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                            <InputColor
                                label={"Background"}
                                onChange={(value) => {
                                    onValueChange(
                                        index,
                                        "labelBackgroundColor",
                                        value
                                    );
                                }}
                                value={buttonData.labelBackgroundColor}
                            />
                        </div>
                        <div className="w-6/12 pl-2 sm:pl-0 sm:w-2/12">
                            <InputColor
                                label={"Text Color"}
                                onChange={(value) => {
                                    onValueChange(index, "labelColor", value);
                                }}
                                value={buttonData.labelColor}
                            />
                        </div>
                        <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                            <Label>Font Family</Label>
                            <Input
                                value={buttonData.labelFontFamily}
                                placeholder="Arial"
                                onChange={(value) => {
                                    onValueChange(
                                        index,
                                        "labelFontFamily",
                                        value
                                    );
                                }}
                            />
                        </div>
                        <div className="w-6/12 pl-2 sm:pl-0 sm:w-2/12">
                            <ResponsiveRangeInput
                                label="Font Size"
                                values={buttonData.labelFontSize}
                                onValueChange={(value) => {
                                    onValueChange(
                                        index,
                                        "labelFontSize",
                                        value
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap gap-6 pb-4 pt-4">
                        <div className="w-full sm:w-4/12">
                            <UserBasedSpacingInput
                                userType={userType}
                                values={buttonData.labelPadding}
                                label="Padding"
                                descriptions={[
                                    "Top",
                                    "Right",
                                    "Bottom",
                                    "Left",
                                ]}
                                onValueModified={(value) => {
                                    onValueChange(index, "labelPadding", value);
                                }}
                            />
                        </div>
                        <div className="w-full sm:w-4/12">
                            <ResponsiveRangeInput
                                label="Separation"
                                values={buttonData.labelMargin}
                                onValueChange={(value) => {
                                    onValueChange(index, "labelMargin", value);
                                }}
                            />
                        </div>
                        <div className="w-full sm:w-4/12">
                            <UserBasedSpacingInput
                                userType={userType}
                                values={buttonData.labelBorderRadius}
                                label="Border Radius"
                                descriptions={[
                                    "Left Top",
                                    "Right Top",
                                    "Right Bottom",
                                    "Left Bottom",
                                ]}
                                onValueModified={(value) => {
                                    onValueChange(
                                        index,
                                        "labelBorderRadius",
                                        value
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Badge>Icon</Badge>
                    <div className="flex sm:gap-6 pt-4 pb-4">
                        <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                            <InputColor
                                label={"Color"}
                                onChange={(value) => {
                                    onValueChange(index, "iconColor", value);
                                }}
                                value={buttonData.iconColor}
                            />
                        </div>
                        <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                            <ResponsiveRangeInput
                                label="Size"
                                values={buttonData.iconSize}
                                onValueChange={(value) => {
                                    onValueChange(index, "iconSize", value);
                                }}
                            />
                        </div>
                        <div className="w-full sm:w-4/12">
                            <UserBasedSpacingInput
                                userType={userType}
                                values={buttonData.buttonPadding}
                                label="Padding"
                                descriptions={[
                                    "Top",
                                    "Right",
                                    "Bottom",
                                    "Left",
                                ]}
                                onValueModified={(value) => {
                                    onValueChange(
                                        index,
                                        "buttonPadding",
                                        value
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ChatBtnCard;
