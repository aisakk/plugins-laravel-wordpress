export interface BreakpointValues<T> {
    desktop: T;
    tablet: T;
    mobile: T;
}

interface Visibility extends BreakpointValues<boolean> {}

interface BorderRadius extends BreakpointValues<number[]> {}

interface Padding extends BreakpointValues<number[]> {}

interface Margin extends BreakpointValues<number[]> {}

interface FontSize extends BreakpointValues<number> {}

export interface ChatBtnProps {
    id: string;
    label: string;
    target: string;
    icon: string;
    visibility: Visibility;
    hidden: boolean;
    isSelected: boolean;
    device: "desktop" | "mobile";

    // ButtonDesign
    buttonBackgroundColor: string;
    buttonBorderRadius: BorderRadius;
    buttonPadding: Padding;
    buttonMargin: Margin;

    // LabelDesign
    labelBackgroundColor: string;
    labelBorderRadius: BorderRadius;
    labelPadding: Padding;
    labelMargin: BreakpointValues<number>;
    labelColor: string;
    labelFontFamily: string;
    labelFontSize: FontSize;

    // IconDesign
    iconColor: string;
    iconSize: FontSize;
    iconMargin: Margin;
}

export interface ChatBtnWidgetProps {
    "left-top": ChatBtnProps[];
    "left-center": ChatBtnProps[];
    "left-bottom": ChatBtnProps[];
    "center-top": ChatBtnProps[];
    "center-bottom": ChatBtnProps[];
    "right-top": ChatBtnProps[];
    "right-center": ChatBtnProps[];
    "right-bottom": ChatBtnProps[];
}

export const defaultChatBtnWidgetProps = (): ChatBtnWidgetProps => ({
    "left-top": [],
    "left-center": [],
    "left-bottom": [],
    "center-top": [],
    "center-bottom": [],
    "right-top": [],
    "right-center": [],
    "right-bottom": [],
});

export const defaultChatBtnProps = (): ChatBtnProps => ({
    id: "",
    label: "",
    target: "",
    icon: "whatsapp",
    visibility: { desktop: true, tablet: true, mobile: true },
    hidden: false,
    isSelected: false,
    device: "desktop",

    // Propiedades de ButtonDesign
    buttonBackgroundColor: "#15C515",
    buttonBorderRadius: {
        desktop: [89, 89, 89, 89],
        tablet: [89, 89, 89, 89],
        mobile: [89, 89, 89, 89],
    },
    buttonPadding: {
        desktop: [12, 12, 12, 12],
        tablet: [12, 12, 12, 12],
        mobile: [12, 12, 12, 12],
    },
    buttonMargin: {
        desktop: [13, 13, 13, 13],
        tablet: [13, 13, 13, 13],
        mobile: [13, 13, 13, 13],
    },

    // Propiedades de LabelDesign
    labelBackgroundColor: "#D2D2D2",
    labelBorderRadius: {
        desktop: [15, 15, 15, 15],
        tablet: [15, 15, 15, 15],
        mobile: [15, 15, 15, 15],
    },
    labelPadding: {
        desktop: [3, 9, 3, 9],
        tablet: [3, 9, 3, 9],
        mobile: [3, 9, 3, 9],
    },
    labelMargin: defaultNumericBreakpointValue(),
    labelColor: "#000000",
    labelFontFamily: "Arial",
    labelFontSize: {
        desktop: 19,
        tablet: 19,
        mobile: 19,
    },

    // Propiedades de IconDesign
    iconColor: "#FFFFFF",
    iconSize: {
        desktop: 40,
        tablet: 40,
        mobile: 40,
    },
    iconMargin: defaultMultipleNumericBreakpointValue(),
});

export const defaultMultipleNumericBreakpointValue = (): BreakpointValues<
    number[]
> => ({
    desktop: [0, 0, 0, 0],
    tablet: [0, 0, 0, 0],
    mobile: [0, 0, 0, 0],
});

export const defaultNumericBreakpointValue = (): BreakpointValues<number> => ({
    desktop: 0,
    tablet: 0,
    mobile: 0,
});
