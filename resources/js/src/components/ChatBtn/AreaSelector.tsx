import { RadioGroup } from "@headlessui/react";
import AreaButton from "./AreaButton";
const positions = [
    {
        name: "Left Top",
        value: "left-top",
    },
    {
        name: "Left Center",
        value: "left-center",
    },
    {
        name: "Left Bottom",
        value: "left-bottom",
    },
    {
        name: "Center Top",
        value: "center-top",
    },
    {
        name: "Center Bottom",
        value: "center-bottom",
    },
    {
        name: "Right Top",
        value: "right-top",
    },
    {
        name: "Right Center",
        value: "right-center",
    },
    {
        name: "Right Bottom",
        value: "right-bottom",
    },
];

interface AreaSelectorProps {
    onSelect: (newArea: string) => void;
    selectedArea: string;
}

const AreaSelector: React.FC<AreaSelectorProps> = ({
    selectedArea,
    onSelect,
}) => {
    let selectedIndex: Number = positions.findIndex(
        (item) => item.value === selectedArea
    );
    if (selectedIndex === -1) selectedIndex = 0;

    function sendSelectionToParent(index) {
        onSelect(positions[index].value);
    }

    return (
        <div>
            <RadioGroup value={selectedIndex} onChange={sendSelectionToParent}>
                <div className="flex flex-wrap xl:flex-nowrap xl:space-x-3 space-y-3">
                    {positions.map((item, index) => (
                        <AreaButton
                            key={index}
                            index={index}
                            title={item.name}
                        />
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};

export default AreaSelector;
