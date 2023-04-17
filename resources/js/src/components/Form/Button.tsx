import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
    isSelected?: boolean;
    onClick?: MouseEventHandler;
    background?: string;
    color?: string;
    width?: string;
    border?: string;
    padding?: string;
    margin?: string;
    size?: string;
    rounded?: string;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    isSelected,
    onClick,
    background,
    color,
    width,
    border,
    padding,
    margin,
    size,
    rounded,
    children,
}) => {
    return (
        <button
            onClick={onClick}
            className={`
        border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center
        ${background ?? (!isSelected && "bg-white hover:bg-slate-100")}
        ${isSelected && "bg-blue-100 text-blue-400"}
        ${color ?? (!isSelected && "text-slate-600")}
        ${width ?? "w-auto"}
        ${border ?? "border-slate-300"}
        ${padding ?? "py-2 px-6"}
        ${margin ?? ""}
        ${size ?? "text-sm"}
        ${rounded ?? "rounded-2xl"}
    `}
        >
            {children}
        </button>
    );
};

export default Button;
