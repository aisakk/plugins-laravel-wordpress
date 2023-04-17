import React from "react";
import NumericInput from "./NumericInput";

interface SpaceNumericInputProps {
    values: number[];
    onValueChanged: (newValues: number[]) => void;
}

const SpaceNumericInput: React.FC<SpaceNumericInputProps> = ({
    values,
    onValueChanged,
}) => {
    function handleValueChanged(index: number, newValue: number) {
        values[index] = newValue;
        onValueChanged(values);
    }

    return (
        <div className="flex flex-wrap md:flex-nowrap gap-3">
            {["Top", "Right", "Bottom", "Left"].map((name, index) => (
                <NumericInput
                    key={name}
                    value={values[index]}
                    onValueChange={(newValue: number) => {
                        handleValueChanged(index, newValue);
                    }}
                />
            ))}
        </div>
    );
};

export default SpaceNumericInput;
