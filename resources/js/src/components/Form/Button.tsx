import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler;
  background?: string;
  color?: string;
  width?: string;
  border?: string;
  padding?: string;
  size?: string;
  rounded?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  background,
  color,
  width,
  border,
  padding,
  size,
  rounded,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center
        ${background ?? 'bg-white hover:bg-slate-100'}
        ${color ?? 'text-slate-600'}
        ${width ?? 'w-auto'}
        ${border ?? 'border-slate-300'}
        ${padding ?? 'py-2 px-6'}
        ${size ?? 'text-sm'}
        ${rounded ?? 'rounded-2xl'}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
