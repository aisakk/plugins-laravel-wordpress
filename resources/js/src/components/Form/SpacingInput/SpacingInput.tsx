import React from "react";
import NumericInput from "../NumericInput";

interface SpacingInputProps {
    values: number[];
    onValueChanged: (newValues: number[]) => void;
    descriptions: string[];
}

const SpacingInput: React.FC<SpacingInputProps> = ({
    values,
    onValueChanged,
    descriptions,
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
                    label={descriptions[index]}
                />
            ))}
        </div>
    );
};

export default SpacingInput;
