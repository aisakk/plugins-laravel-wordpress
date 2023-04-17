import React, { useState } from "react";
import { BreakpointValues } from "../../../types/ChatBtnTypes";
import DeviceSwitchButtons from "../DeviceSwitchButtons";
import SpacingInput from "./SpacingInput";

interface ResponsiveSpacingInputProps {
    label: string;
    values: BreakpointValues<number[]>;
    onValueChange: (newValues: BreakpointValues<number[]>) => void;
    descriptions: string[];
}

const ResponsiveSpacingInput: React.FC<ResponsiveSpacingInputProps> = ({
    label,
    values,
    onValueChange,
    descriptions,
}) => {
    const [device, setDevice] = useState("desktop");

    const changeDevice = function (
        newDevice: keyof BreakpointValues<number[]>
    ) {
        setDevice(newDevice);
    };
    const handleValueChange = function (newValue: number[]) {
        let modifiedValues = {
            ...values,
            [device]: newValue,
        };

        onValueChange(modifiedValues);
    };

    return (
        <>
            <div>
                <label className="font-bold text-sm pb-2 mr-2">{label}</label>
                <DeviceSwitchButtons
                    onValueChange={changeDevice}
                    device={device}
                />
            </div>
            <div>
                <SpacingInput
                    values={values[device]}
                    onValueChanged={handleValueChange}
                    descriptions={descriptions}
                />
            </div>
        </>
    );
};

export default ResponsiveSpacingInput;
