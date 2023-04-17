import { Fragment } from "react";
import Icon from "./../Icon";
import Label from "./../Form/Label";
import { Listbox, Transition } from "@headlessui/react";
import { List } from "antd";

interface SelectProps {
    label?: string;
    options: string[];
    selected: number;
    onChange: (newIndex: number) => void;
}

const Select: React.FC<SelectProps> = ({
    selected,
    options,
    onChange,
    label,
}) => {
    return (
        <div className="flex w-auto">
            <div className="flex justify-between items-center">
                <Label>{label}</Label>
            </div>
            <Listbox value={selected} onChange={onChange}>
                <div className="w-60 relative mt-1">
                    <Listbox.Button className="bg-white text-left rounded-xl border w-full border-slate-200 p-2 px-4 text-xs">
                        <span className="block truncate">
                            Select target area...
                        </span>
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
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-primary text-white"
                                                : "text-slate-500"
                                        }`
                                    }
                                    value={index}
                                >
                                    {({ active, selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {option}
                                            </span>
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
