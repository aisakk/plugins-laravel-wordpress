// InputMultiple.tsx
import React, { useState } from "react";

import Icon from "./../Icon";
import Label from "./../Form/Label";
import InputRange from "./../Form/InputRange";

interface InputMultipleProps {
  basic?: boolean;
  responsive?: boolean;
  label: string;
  values?: string[];
  units?: boolean;
  placeholder?: string;
}

const InputMultiple: React.FC<InputMultipleProps> = ({
  basic,
  responsive,
  label,
  values,
  units,
  placeholder,
}) => {
  const [device, setDevice] = useState("desktop");
  const [desktop, setDesktop] = useState("");
  const [tablet, setTablet] = useState("");
  const [mobile, setMobile] = useState("");

  const handleChangeDevice = (event: string) => {
    setDevice(event);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (device === "desktop") {
      setDesktop(event.target.value);
    } else if (device === "tablet") {
      setTablet(event.target.value);
    } else {
      setMobile(event.target.value);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-start">
        <div>
          <Label>{label}</Label>
        </div>

        {responsive && (
          <div className="flex gap-1 text-slate-400">
            <button
              onClick={(e) => handleChangeDevice("desktop")}
              className={
                device === "desktop" ? "text-slate-700" : "text-slate-400"
              }
            >
              <Icon name="desktop" size={4} />
            </button>
            <button
              onClick={(e) => handleChangeDevice("tablet")}
              className={
                device === "tablet" ? "text-slate-700" : "text-slate-400"
              }
            >
              <Icon name="tablet" size={4} />
            </button>
            <button
              onClick={(e) => handleChangeDevice("mobile")}
              className={
                device === "mobile" ? "text-slate-700" : "text-slate-400"
              }
            >
              <Icon name="mobile" size={4} />
            </button>
          </div>
        )}
      </div>

      {basic && <InputRange />}

      {!basic && (
        <div className="flex gap-3">
          {values?.map((item, index) => (
            <div className="w-4/12 relative" key={index}>
              {device === "desktop" && (
                <div>
                  <small className="block text-[10px] uppercase pt-1">
                    {item}
                  </small>
                  <input
                    onChange={handleChangeValue}
                    className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
                    type="text"
                    placeholder={placeholder ?? "0"}
                    value={desktop}
                  />
                </div>
              )}
              {device === "tablet" && (
                <div>
                  <small className="block text-[10px] uppercase pt-1">
                    {item}
                  </small>
                  <input
                    onChange={handleChangeValue}
                    className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
                    type="text"
                    placeholder={placeholder ?? "0"}
                    value={tablet}
                  />
                </div>
              )}
              {device === "mobile" && (
              <div>
              <small className="block text-[10px] uppercase pt-1">
                {item}
              </small>
              <input
                onChange={handleChangeValue}
                className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
                type="text"
                placeholder={placeholder ?? "0"}
                value={mobile}
              />
            </div>
          )}

          {units && (
            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
              px
            </span>
          )}
        </div>
        ))}
      </div>
    )}
  </div>
);
};

export default InputMultiple;
