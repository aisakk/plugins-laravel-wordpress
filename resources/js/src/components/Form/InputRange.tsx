// InputRange.tsx
import React, { useState } from "react";
import { Slider } from "antd";

interface InputRangeProps {
  description?: string;
}

const InputRange: React.FC<InputRangeProps> = ({ description }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="">
      {description && (
        <small className="block text-[10px] uppercase pt-2">
          {description}
        </small>
      )}

      <div className="flex items-center justify-between gap-3 pt-6">
        <div className="text-sm">0</div>
        <Slider className="w-8/12" defaultValue={30} tooltip={{ open: true }} />
        <div className="text-sm">100px</div>
      </div>
    </div>
  );
};

export default InputRange;
