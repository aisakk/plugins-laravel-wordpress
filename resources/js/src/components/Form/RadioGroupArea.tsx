import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';

const positions = [
  {
    name: 'Left Top',
    value: 'start-start',
  },
  {
    name: 'Left Center',
    value: 'start-center',
  },
  {
    name: 'Left Bottom',
    value: 'start-end',
  },
  {
    name: 'Right Top',
    value: 'end-start',
  },
  {
    name: 'Right Center',
    value: 'end-center',
  },
  {
    name: 'Right Bottom',
    value: 'end-end',
  },
];

interface RadioGroupAreaProps {
  item: {
    name: string;
    value: string;
  };
}

const RadioGroupArea: React.FC<RadioGroupAreaProps> = ({ item }) => {
  const [selected, setSelected] = useState(positions[0]);



  return (
    <div>
      <RadioGroup value={selected} onChange={setSelected}>
          <div className="flex flex-wrap xl:flex-nowrap xl:space-x-3 space-y-3">
            { positions.map((item, index) => (
               <RadioGroup.Option
                key={item.name}
                value={item.value}
                className={({ active, checked }) =>
                  `${
                    index % 2 ? 'pl-2' : 'pr-2'
                  }
                  w-6/12 xl:w-2/12 relative cursor-pointer focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>

                    <div className={`
                        ${
                            checked ? 'bg-slate-50 border-primary' : 'bg-white border-slate-50'
                        } relative p-2 w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                            <div className={`flex h-full w-full justify-${item.value.split('-')[0]} items-${item.value.split('-')[1]}`}>
                                <span className="w-4 h-4 bg-black block rounded-md"></span>
                            </div>
                            {checked && (
                                <div className="absolute right-0 top-0 text-green-500">
                                <CheckIcon className="h-6 w-6" />
                                </div>
                            )}


                    </div>

                    <div className="text-xs text-center mt-2">
                                <h6 className="">{ item.name }</h6>
                            </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
    </div>
  );
};


function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#dcfce7" opacity="1" />
      <path
        d="M7 13l3 3 7-7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RadioGroupArea;
