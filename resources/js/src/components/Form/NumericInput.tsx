import React from "react";
interface NumericInputProps {
    value: number;
    onValueChange: (newValue: number) => void;
    label: string;
}

const NumericInput: React.FC<NumericInputProps> = ({
    value,
    onValueChange,
    label,
}) => {
    return (
        <div className="relative">
            <small className="block text-[10px] uppercase pt-1">{label}</small>
            <input
                className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
                value={value}
                onChange={(e) => onValueChange(parseInt(e.target.value))}
                type="number"
            />
            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                px
            </span>
        </div>
    );
};

export default NumericInput;
