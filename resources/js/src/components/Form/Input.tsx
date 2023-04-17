import React, { useState } from "react";

interface InputProps {
    placeholder?: string;
    type?: string;
    value: string;
    onChange: (newValue: string) => void;
}

const Input: React.FC<InputProps> = ({
    value,
    placeholder,
    onChange,
    type,
}) => {
    return (
        <input
            onChange={(event) => {
                onChange(event.target.value);
            }}
            className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
            type={type || "text"}
            placeholder={placeholder || ""}
            value={value}
        />
    );
};

export default Input;
