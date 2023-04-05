// Label.tsx
import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <div>
      <label htmlFor="" className="font-bold text-sm pb-2">
        {children}
      </label>
    </div>
  );
};

export default Label;
