import React from "react";
import { BreakpointValues } from "../../types/ChatBtnTypes";
import DeviceButton from "./DeviceButton";

interface DeviceSwitchButtonsProps {
    device: string;
    onValueChange: (newValue: keyof BreakpointValues<number[]>) => void;
}

const DeviceSwitchButtons: React.FC<DeviceSwitchButtonsProps> = ({
    device,
    onValueChange,
}) => {
    return (
        <>
            {["desktop", "tablet", "mobile"].map((key) => (
                <DeviceButton
                    key={key}
                    device={key}
                    onValueChange={onValueChange}
                    isActive={key == device}
                />
            ))}
        </>
    );
};

export default DeviceSwitchButtons;
