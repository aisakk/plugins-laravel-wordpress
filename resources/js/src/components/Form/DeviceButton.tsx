import React from "react";
import { BreakpointValues } from "../../types/ChatBtnTypes";
import IconWidget from "../IconWidget";

interface DeviceButtonProps {
    device: string;
    isActive: boolean;
    onValueChange: (newValue: keyof BreakpointValues<number[]>) => void;
}

const DeviceButton: React.FC<DeviceButtonProps> = ({
    device,
    isActive,
    onValueChange,
}) => {
    return (
        <button
            key={device}
            onClick={() => {
                onValueChange(device as keyof BreakpointValues<number[]>);
            }}
        >
            <IconWidget
                stylesEmotionCss=""
                name={device === "movil" ? "mobile" : device}
                color={`${isActive ? "#5F5F5F" : "#E4E4E4"}`}
                size={16}
            />
        </button>
    );
};

export default DeviceButton;
