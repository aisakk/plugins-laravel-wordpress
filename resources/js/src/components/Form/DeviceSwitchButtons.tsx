import React from "react";
import { BreakpointValues } from "../../types/ChatBtnTypes";
import DeviceButton from "./DeviceButton";

interface DeviceSwitchButtonsProps {
    device: string;
    onValueChange: (newValue: keyof BreakpointValues<number[]>) => void;
    twoDevices?:boolean;
}

const DeviceSwitchButtons: React.FC<DeviceSwitchButtonsProps> = ({
    device,
    onValueChange,
    twoDevices
}) => {
    let devices=twoDevices?["desktop", "mobile"]:["desktop", "tablet", "mobile"];

    return (
        <>
            {devices.map((key) => (
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
