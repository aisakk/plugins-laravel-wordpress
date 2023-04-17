import React, { useState } from "react";
import { BreakpointValues } from "../../../types/ChatBtnTypes";
import { FormType } from "../../../types/FormTypes";
import ResponsiveSpacingInput from "./ResponsiveSpacingInput";
import ResponsiveRangeInput from "../ResponsiveRangeInput";

interface UserBasedSpacingInputProps {
    userType: FormType;
    onValueModified: (newValues: BreakpointValues<number[]>) => void;
    values: BreakpointValues<number[]>;
    label: string;
    descriptions: string[];
}

const UserBasedSpacingInput: React.FC<UserBasedSpacingInputProps> = ({
    userType,
    onValueModified,
    values,
    label,
    descriptions,
}) => {
    const basicValues = {
        desktop: values["desktop"][0],
        tablet: values["tablet"][0],
        mobile: values["mobile"][0],
    };
    const handleBasicInputChange = (values: BreakpointValues<number>) => {
        let convertedInput: BreakpointValues<number[]> = {
            desktop: [
                values["desktop"],
                values["desktop"],
                values["desktop"],
                values["desktop"],
            ],
            tablet: [
                values["tablet"],
                values["tablet"],
                values["tablet"],
                values["tablet"],
            ],
            mobile: [
                values["mobile"],
                values["mobile"],
                values["mobile"],
                values["mobile"],
            ],
        };

        onValueModified(convertedInput);
    };

    return (
        <>
            {userType === FormType.Basic ? (
                <ResponsiveRangeInput
                    onValueChange={handleBasicInputChange}
                    label={label}
                    values={basicValues}
                />
            ) : (
                <ResponsiveSpacingInput
                    label={label}
                    values={values}
                    onValueChange={onValueModified}
                    descriptions={descriptions}
                />
            )}
        </>
    );
};

export default UserBasedSpacingInput;
