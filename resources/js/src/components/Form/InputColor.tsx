// InputColor.tsx
import React from 'react';
import Label from './../Form/Label';

interface InputColorProps {
  label: string;
  description?: string;
}

const InputColor: React.FC<InputColorProps> = ({ label, description }) => {
  return (
    <div className="">
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

      <input
        className="rounded-xl border w-full border-solid border-slate-200 text-xs"
        type="color"
      />
    </div>
  );
};

export default InputColor;
