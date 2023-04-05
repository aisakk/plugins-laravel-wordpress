import { Fragment, useState,useEffect } from "react";
import Icon from "./../Icon";
import Label from "./../Form/Label";

interface Option {
  id: number;
  name: string;
}

interface SelectProps {
  label: string;
  responsive?: boolean;
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ label, responsive, options }) => {
  const [desktop, setDesktop] = useState(options[0]);
  const [tablet, setTablet] = useState(options[0]);
  const [mobile, setMobile] = useState(options[0]);

  const [device, setDevice] = useState("desktop");

  const handleChangeDevice = (event: string) => {
    setDevice(event);
  };

  const handleChangeValue = (event: Option) => {
    if (device === "desktop") {
      setDesktop(event);
    } else if (device === "tablet") {
      setTablet(event);
    } else {
      setMobile(event);
    }
  };

  const [Listbox, setListbox] = useState<any>();
  const [Transition, setTransition] = useState<any>();

  useEffect(() => {
    import('@headlessui/react').then((module) => {
      setListbox(() => module.Listbox);
      setTransition(() => module.Transition);
    });
  }, []);

  if (!Listbox || !Transition) {
    return null;
  }

  return (
    <div className="">
      <div className="flex justify-between items-center">
          <Label>{ label }</Label>

          { responsive && (
              <div className="flex gap-1 text-slate-400">
                  <button onClick={(e) => handleChangeDevice('desktop')} className={ device === 'desktop' ? 'text-slate-700' : 'text-slate-400' }>
                      <Icon name="desktop" size={4} />
                  </button>
                  <button onClick={(e) => handleChangeDevice('tablet')} className={ device === 'tablet' ? 'text-slate-700' : 'text-slate-400' }>
                      <Icon name="tablet" size={4} />
                  </button>
                  <button onClick={(e) => handleChangeDevice('mobile')} className={ device === 'mobile' ? 'text-slate-700' : 'text-slate-400' }>
                      <Icon name="mobile" size={4} />
                  </button>
              </div>
          )}

      </div>

      <Listbox value={ device === 'desktop' ? desktop : (device === 'tablet' ? tablet : mobile) } onChange={handleChangeValue}>
        <div className="relative mt-1">
          <Listbox.Button className="bg-white text-left rounded-xl border w-full border-slate-200 p-2 px-4 text-xs">
            <span className="block truncate">{ device === 'desktop' ? desktop.name : (device === 'tablet' ? tablet.name : mobile.name) }</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <Icon name="arrow-down" size={4} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-40 absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }: { active: boolean }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary text-white' : 'text-slate-500'
                    }`
                  }
                  value={option}
                >
                  {({ desktop }: { desktop: boolean } ) => (
                    <>
                      <span
                        className={`block truncate ${
                          desktop ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {desktop ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-400">
                            <Icon name="arrow-down" size={4} />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );

};

export default Select;
