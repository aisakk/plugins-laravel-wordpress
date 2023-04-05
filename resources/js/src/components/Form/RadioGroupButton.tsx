import { useState, useEffect } from 'react';
import Icon from '../Icon';

interface ButtonOption {
  name: string;
  icon: string;
  value: string;
}

const buttons: ButtonOption[] = [
    {
        name: 'Facebook',
        icon: 'facebook',
        value: 'facebook'
      },
      {
        name: 'WhatsApp',
        icon: 'whatsapp',
        value: 'whatsapp',
      },
      {
        name: 'Instagram',
        icon: 'instagram',
        value: 'instagram'
      },
      {
        name: 'Phone',
        icon: 'phone',
        value: 'phone'
      },
      {
        name: 'Email',
        icon: 'email',
        value: 'email'
      },
      {
        name: 'Link',
        icon: 'link',
        value: 'link'
      }
];

const RadioGroupButton = () => {
  const [selected, setSelected] = useState<ButtonOption>(buttons[0]);
  const [headlessUI, setHeadlessUI] = useState<any>(null);

  useEffect(() => {
    import('@headlessui/react').then((module) => {
      setHeadlessUI(module);
    });
  }, []);

  return (
    <div>
      {headlessUI && (
        <headlessUI.RadioGroup value={selected} onChange={setSelected}>
                    <div className="flex flex-wrap xl:flex-nowrap xl:space-x-3 space-y-3 sm:space-y-0">
            { buttons.map((item, index) => (
               <headlessUI.RadioGroup.Option
                key={item.name}
                value={item.value}
                className={({ active, checked }:{ active:boolean, checked:boolean }) =>
                  `${
                    index % 2 ? 'pl-2' : 'pr-2'
                  }
                  w-6/12 xl:w-2/12 relative cursor-pointer focus:outline-none`
                }
              >
                {({ active, checked }:{ active:boolean, checked:boolean }) => (
                  <>

                    <div className={`
                        ${
                            checked ? 'bg-slate-50 border-primary' : 'bg-white border-slate-50'
                        } relative p-2 w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                            <div className={`flex h-full w-full justify-center items-center`}>
                                <Icon name={ item.icon } size={12}  />
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
              </headlessUI.RadioGroup.Option>
            ))}
          </div>
        </headlessUI.RadioGroup>
      )}
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
      )
}

export default RadioGroupButton;
