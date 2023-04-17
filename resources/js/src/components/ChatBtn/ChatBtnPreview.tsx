import { ReactElement } from "react";

import { ChatBtnWidgetProps } from "../../types/ChatBtnTypes";
import ChatBtnWidgetBuilder from "./WidgetBuilder/ChatBtnWidgetBuilder";

interface PreviewProps {
    children?: ReactElement;
    widgetData: ChatBtnWidgetProps;
}

const ChatBtnPreview: React.FC<PreviewProps> = ({ children, widgetData }) => {
    return (
        <div className="w-full xl:w-4/12 fixed right-0 pl-12 pr-6">
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
                            <ChatBtnWidgetBuilder widgetData={widgetData} />
                        </div>
                    </div>
                    <div className="">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ChatBtnPreview;
