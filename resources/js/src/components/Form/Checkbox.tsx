// components/Form/Checkbox.tsx
import Label from './../Form/Label';
import React from 'react';

interface CheckboxProps {
  label?: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked, onChange }) => {
  return (
    <div className="w-full flex justify-center items-center content-center">
        <Label>{label}</Label>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
      />

    </div>
  );
};

export default Checkbox;
