import { RadioGroup } from "@headlessui/react";

interface AreaButtonProps {
    index: number;
    title: string;
}

const area_position_class = [
    "justify-start items-start",
    "justify-start items-center",
    "justify-start items-end",
    "justify-end items-start",
    "justify-end items-end",
    "justify-start items-start",
    "justify-start items-center",
    "justify-start items-end"
];

const AreaButton: React.FC<AreaButtonProps> = ({ index, title }) => {
    let positioningClass: string =
        "flex h-full w-full " + area_position_class[index];

    return (
        <RadioGroup.Option
            value={index}
            className={`${index % 2 ? "pl-2" : "pr-2"}
                  w-6/12 xl:w-2/12 relative cursor-pointer focus:outline-none`}
        >
            {({ active, checked }) => (
                <>
                    <div
                        className={`
                        ${
                            checked
                                ? "bg-slate-50 border-primary"
                                : "bg-white border-slate-50"
                        } relative p-2 w-full h-20  border-2 rounded-lg p-2 shadow-md`}
                    >
                        <div className={positioningClass}>
                            <span className="w-4 h-4 bg-black block rounded-md"></span>
                        </div>
                        {checked && (
                            <div className="absolute right-0 top-0 text-green-500">
                                <CheckIcon className="h-6 w-6" />
                            </div>
                        )}
                    </div>

                    <div className="text-xs text-center mt-2">
                        <h6 className="">{title}</h6>
                    </div>
                </>
            )}
        </RadioGroup.Option>
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

export default AreaButton;
