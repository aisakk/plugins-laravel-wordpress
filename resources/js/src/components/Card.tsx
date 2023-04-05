import React, { ReactNode } from 'react';

interface CardProps {
  border?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ border, children }) => {
  return (
    <div
      className={`
        bg-white shadow-xl p-6 rounded-xl relative
        ${border ? border : ''}
      `}>
      {children}
    </div>
  );
};

export default Card;
