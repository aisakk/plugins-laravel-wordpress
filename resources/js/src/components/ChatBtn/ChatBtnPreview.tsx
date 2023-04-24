import { ReactElement } from "react";

import { ChatBtnWidgetProps } from "../../types/ChatBtnTypes";
import ChatBtnWidgetBuilder from "./WidgetBuilder/ChatBtnWidgetBuilder";

interface PreviewProps {
    children?: ReactElement;
    widgetData: ChatBtnWidgetProps;
    selectedDevice:any;
}

const ChatBtnPreview: React.FC<PreviewProps> = ({ children, widgetData,selectedDevice }) => {
    const filteredWidgetData: ChatBtnWidgetProps = {
        "left-top": widgetData["left-top"].filter(
            (btn) => btn.device === selectedDevice
        ),
        "left-center": widgetData["left-center"].filter(
            (btn) => btn.device === selectedDevice
        ),
        "left-bottom": widgetData["left-bottom"].filter(
            (btn) => btn.device === selectedDevice
        ),
        "center-top": widgetData["center-top"].filter(
            (btn) => btn.device === selectedDevice
        ),
        "center-bottom": widgetData["center-bottom"].filter(
            (btn) => btn.device === selectedDevice
        ),
        "right-top": widgetData["right-top"].filter(
            (btn) => btn.device === selectedDevice
        ),
        "right-center": widgetData["right-center"].filter(
            (btn) => btn.device === selectedDevice
        ),
        "right-bottom": widgetData["right-bottom"].filter(
            (btn) => btn.device === selectedDevice
        ),
    };

    return (
        <div className="w-full md:w-10/12 lg:w-4/12 xl:w-4/12 lg:fixed lg:right-0 lg:pl-12 lg:pr-6">
            <div className="shadow-xl p-6 bg-white rounded-2xl">
                <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                    <div>
                        <h6 className="text-lg">Preview</h6>
                        <p className="text-xs">
                            This is how your buttons will look like in your site
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="py-4">
                        <div className="bg-slate-100 w-full relative rounded-xl h-96">
                            <ChatBtnWidgetBuilder widgetData={filteredWidgetData} />
                        </div>
                    </div>
                    <div className="">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ChatBtnPreview;
