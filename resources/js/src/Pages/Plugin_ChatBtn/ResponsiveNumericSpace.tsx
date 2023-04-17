import React, { useState } from "react";
import { BreakpointValues } from "../../types/ChatBtnTypes";
import { FormType } from "../../types/FormTypes";

interface ResponsiveNumericSpaceProps {
    userType: FormType;
    onValueModified: (newValues: BreakpointValues<number[]>) => void;
    values: BreakpointValues<number[]>;
}

const ResponsiveNumericSpace: React.FC<ResponsiveNumericSpaceProps> = ({
    userType,
    onValueModified,
    values,
}) => {
    const [tabletValues, setTabletValues] = useState<number[]>(values.tablet);

    const handleBasicInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValues = tabletValues.map(() => parseInt(e.target.value));
        setTabletValues(updatedValues);
        handleDataInput(e);
    };

    return (
        <>
            {userType === FormType.Basic ? (
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={values.pc[0]}
                    onChange={handleBasicInput}
                    name="margin_all_device"
                    id=""
                />
            ) : (
                <div className="flex flex-wrap md:flex-nowrap gap-3">
                    {["Top", "Right", "Bottom", "Left"].map(
                        (direction, index) => (
                            <div key={index} className="relative">
                                <small className="block text-[10px] uppercase pt-1">
                                    {direction}
                                </small>
                                <input
                                    className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs"
                                    value={tabletValues[index]}
                                    onChange={handleDataInput}
                                    type="number"
                                    name={`margin_${direction.toLowerCase()}_tablet`}
                                    id=""
                                />
                                <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                    px
                                </span>
                            </div>
                        )
                    )}
                </div>
            )}
        </>
    );
};

export default ResponsiveNumericSpace;
