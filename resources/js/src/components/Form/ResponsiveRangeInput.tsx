import React, { useState } from "react";
import { BreakpointValues } from "../../types/ChatBtnTypes";
import DeviceSwitchButtons from "./DeviceSwitchButtons";
import InputRange from "./InputRange";

interface ResponsiveRangeInputProps {
    label: string;
    values: BreakpointValues<number> ;
    onValueChange: (newValues: BreakpointValues<number>) => void;
}

const ResponsiveRangeInput: React.FC<ResponsiveRangeInputProps> = ({
    label,
    values,
    onValueChange,
}) => {
    const [device, setDevice] = useState("desktop");

    const changeDevice = function (
        newDevice: keyof BreakpointValues<number[]>
    ) {
        setDevice(newDevice);
    };
    const handleValueChange = function (newValue: number) {
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
                <InputRange
                    value={values[device]}
                    onChange={handleValueChange}
                />
            </div>
        </>
    );
};

export default ResponsiveRangeInput;
