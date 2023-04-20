import React, { useState } from "react";
import {
    ChatBtnProps,
    defaultChatBtnProps,
    ChatBtnWidgetProps,
    defaultChatBtnWidgetProps,
} from "../../types/ChatBtnTypes";

import Card from "../../components/Card";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon";
import Badge from "../../components/Badge";
import Label from "../../components/Form/Label";
import Input from "../../components/Form/Input";
import InputMultiple from "../../components/Form/InputMultiple";
import InputColor from "../../components/Form/InputColor";
import Select from "../../components/Form/Select";
import RadioGroupButton from "../../components/Form/RadioGroupButton";
import { FormType } from "../../types/FormTypes";
import UserBasedSpacingInput from "../../components/Form/SpacingInput/UserBasedSpacingInput";

interface ChatBtnCardProps {
    index: number;
    buttonData: ChatBtnProps;
    userType: FormType;
    onValueChange: (index: number, name: string, value: any) => void;
    removeRequest: (index: number) => void;
}

const ChatBtnCard: React.FC<ChatBtnCardProps> = ({
    index,
    buttonData,
    userType,
    onValueChange,
    removeRequest,
}) => {
    return (
        <Card>
            <div className="flex justify-between items-start border-b border-solid border-slate-400 pb-4">
                <div>
                    <h4 className="text-2xl pb-6 font-bold">
                        <input type="checkbox" /> Button #{index + 1}
                    </h4>
                    <h6 className="text-lg font-bold">1. Template</h6>
                    <p className="text-xs">Choose the name and layout to use</p>
                </div>
                <div className="flex gap-3 items-center">
                    <Button
                        background="bg-blue-100 hover:bg-blue-200"
                        color="text-blue-400"
                        border="border-blue-100"
                        padding="p-2"
                    >
                        <Icon name="eye" className="w-5 md:w-6" />
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
            <div className="py-6">
                <div className="">
                    <Label>Layout</Label>
                    <RadioGroupButton />
                </div>

                <div className="flex flex-wrap sm:flex-nowrap gap-6 pt-6">
                    <div className="w-full sm:w-4/12">
                        <Label>Phone Number</Label>
                        <Input
                            value={buttonData.phone}
                            onChange={(value) => {
                                onValueChange(index, "phone", value);
                            }}
                        />
                    </div>
                    <div className="w-full sm:w-4/12">
                        <Label>Label Text</Label>
                        <Input
                            value={buttonData.label}
                            onChange={(value) => {
                                onValueChange(index, "label", value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                <div>
                    <h6 className="text-lg font-bold">2. Design</h6>
                    <p className="text-xs">
                        Choose the elements you want to customize
                    </p>
                </div>

                <div></div>
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
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap gap-6">
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
                                    onValueChange(index, "buttonMargin", value);
                                }}
                            />
                        </div>
                        <div className="w-full sm:w-6/12">
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
                            <Label>Font Size</Label>
                            {/* <Select label={"Font Size"} options={font_size} /> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap gap-6 pb-4 pt-4">
                        <div className="w-full sm:w-6/12">
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
                        <div className="w-full sm:w-6/12">
                            <UserBasedSpacingInput
                                userType={userType}
                                values={buttonData.labelMargin}
                                label="Margin"
                                descriptions={[
                                    "Top",
                                    "Right",
                                    "Bottom",
                                    "Left",
                                ]}
                                onValueModified={(value) => {
                                    onValueChange(index, "labelMargin", value);
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
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap gap-6 pt-4 pb-4">
                        <div className="w-full sm:w-6/12">
                            <UserBasedSpacingInput
                                userType={userType}
                                values={buttonData.iconPadding}
                                label="Padding"
                                descriptions={[
                                    "Top",
                                    "Right",
                                    "Bottom",
                                    "Left",
                                ]}
                                onValueModified={(value) => {
                                    onValueChange(index, "iconPadding", value);
                                }}
                            />
                        </div>
                        <div className="w-full sm:w-6/12">
                            <UserBasedSpacingInput
                                userType={userType}
                                values={buttonData.iconMargin}
                                label="Margin"
                                descriptions={[
                                    "Top",
                                    "Right",
                                    "Bottom",
                                    "Left",
                                ]}
                                onValueModified={(value) => {
                                    onValueChange(index, "iconMargin", value);
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
