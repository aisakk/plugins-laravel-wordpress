import React, { useState } from "react";
import { BreakpointValues } from "../../types/ChatBtnTypes";
import DeviceButton from "./DeviceButton";
import SpaceNumericInput from "./SpaceNumericInput";

interface ResponsiveSpaceNumericInputProps {
    label: string;
    values: BreakpointValues<number[]>;
    onValueChange: (newValues: BreakpointValues<number[]>) => void;
}

const ResponsiveSpaceNumericInput: React.FC<
    ResponsiveSpaceNumericInputProps
> = ({ label, values, onValueChange }) => {
    const [device, setDevice] = useState("pc");

    const changeDevice = function (
        newDevice: keyof BreakpointValues<number[]>
    ) {
        setDevice(newDevice);
    };
    const onValueChanged = function (newValue: number[]) {
        let modifiedValues = {
            ...values,
            [device]: newValue,
        };

        onValueChange(modifiedValues);
    };

    return (
        <>
            <div>
                <label className="font-bold text-sm pb-2">{label}</label>
                {["pc", "tablet", "movil"].map((key) => (
                    <DeviceButton
                        key={key}
                        device={key}
                        onValueChange={changeDevice}
                        isActive={key == device}
                    ></DeviceButton>
                ))}
            </div>
            <div>
                <SpaceNumericInput
                    values={values[device]}
                    onValueChanged={onValueChanged}
                />
            </div>
        </>
    );
};

export default ResponsiveSpaceNumericInput;
