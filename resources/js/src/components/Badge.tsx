import React, { ReactNode } from 'react';

interface BadgeProps {
  background?: string;
  size?: string;
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ background, size, children }) => {
  return (
    <span
      className={`
          border rounded-lg font-bold cursor-pointer uppercase py-1 px-2 text-white
          ${background ?? 'bg-primary'}
          ${size ?? 'text-[10px]'}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
