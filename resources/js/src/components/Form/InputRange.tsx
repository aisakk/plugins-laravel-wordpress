import React from "react";
import { Slider } from "antd";

interface InputRangeProps {
    maxValue?: number;
    minValue?: number;
    value?: number;
    defaultValue?: number;
    description?: string;
    onChange: (value: number) => void;
}

const InputRange: React.FC<InputRangeProps> = ({
    maxValue,
    minValue,
    defaultValue,
    value,
    description,
    onChange,
}) => {
    return (
        <div className="">
            {description && (
                <small className="block text-[10px] uppercase pt-2">
                    {description}
                </small>
            )}
            <div className="flex items-center justify-between gap-3">
                <div className="text-sm">{minValue || 0}</div>
                <Slider
                    className="w-8/12"
                    value={value}
                    defaultValue={defaultValue || (maxValue || 100) / 2}
                    onChange={onChange}
                />
                <div className="text-sm">{maxValue || 100}px</div>
            </div>
        </div>
    );
};

export default InputRange;
