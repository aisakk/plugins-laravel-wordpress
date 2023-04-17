import React, { useState } from "react";
import Label from "./../Form/Label";
import { ChromePicker } from "react-color";

interface InputColorProps {
    label: string;
    description?: string;
    onChange: (value: string) => void;
    value: string;
}

const InputColor: React.FC<InputColorProps> = ({
    label,
    description,
    onChange,
    value,
}) => {
    const [visibility, setVisibility] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <Label>{label}</Label>
                    {description && (
                        <small className="block text-[10px] uppercase pt-1">
                            {description}
                        </small>
                    )}
                </div>
            </div>

            {visibility ? (
                <div className="absolute z-10">
                    <div
                        className="fixed inset-0"
                        onClick={() => {
                            setVisibility(false);
                        }}
                    />
                    <ChromePicker
                        color={value}
                        onChangeComplete={(value) => {
                            onChange(value.hex);
                        }}
                    />
                </div>
            ) : (
                <button
                    onClick={() => {
                        setVisibility(true);
                    }}
                    className="w-full h-8"
                >
                    <div
                        className="h-full rounded-lg border-2 border-black"
                        style={{ backgroundColor: value }}
                    ></div>
                </button>
            )}
        </div>
    );
};

export default InputColor;
