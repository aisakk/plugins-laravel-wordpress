// InputDomain.tsx
import React, { useState } from 'react';
import Icon from './../Icon';
import Label from './../Form/Label';

interface InputProps {
  responsive?: boolean;
  name:string;
  value:string;
  label: string;
  description?: string;
  units?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const InputDomain: React.FC<InputProps> = ({
    responsive, description,
    label, name, value,
     onChange, placeholder,
     units, type = 'text'
}) =>{

  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [desktop, setDesktop] = useState('');
  const [tablet, setTablet] = useState('');
  const [mobile, setMobile] = useState('');

  const handleChangeDevice = (event: 'desktop' | 'tablet' | 'mobile') => {
    setDevice(event);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (device === 'desktop') {
      setDesktop(event.target.value);
    } else if (device === 'tablet') {
      setTablet(event.target.value);
    } else {
      setMobile(event.target.value);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <Label>{label}</Label>
          {description && <small className="block text-[10px] uppercase pt-1">{description}</small>}
        </div>

        {responsive && (
          <div className="flex gap-1 text-slate-400">
            <button
              onClick={() => handleChangeDevice('desktop')}
              className={device === 'desktop' ? 'text-slate-700' : 'text-slate-400'}
            >
              <Icon name="desktop" size={4} />
            </button>
            <button
              onClick={() => handleChangeDevice('tablet')}
              className={device === 'tablet' ? 'text-slate-700' : 'text-slate-400'}
            >
              <Icon name="tablet" size={4} />
            </button>
            <button
              onClick={() => handleChangeDevice('mobile')}
              className={device === 'mobile' ? 'text-slate-700' : 'text-slate-400'}
            >
              <Icon name="mobile" size={4} />
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        {device === 'desktop' && (
          <input
            id={label}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
          />
        )}
        {device === 'tablet' && (
          <input
          id={label}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
          />
        )}
        {device === 'mobile' && (
          <input
            id={label}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
          />
        )}

        {units && (
          <span className="absolute right-0 top-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
        )}

     </div>
        </div>
    )
  }

  export default InputDomain
