import React, { useEffect } from "react";
import { ChatBtnWidgetProps } from "../../../types/ChatBtnTypes";
import { css } from "@emotion/css";
import ChatBtnWidgetButton from "./ChatBtnWidgetButton";

interface ChatBtnWidgetBuilderProps {
    widgetData: ChatBtnWidgetProps;
}

const ChatBtnWidgetBuilder: React.FC<ChatBtnWidgetBuilderProps> = ({
    widgetData,
}) => {

    const paddingArea = widgetData["left-top"][0]?.areaPadding?.desktop
    const areaBase = css`
        position: absolute;
        height: fit-content;
        width: fit-content;
        display: flex;
        flex-direction: column;
        padding: ${paddingArea}px;
    `;

    return (
        <div
            className={css`
                position: absolute;
                width: 100%;
                height: 100%;
            `}
        >
            <div
                className={css`
                    ${areaBase};
                    top: 0;
                    left: 50%;
                    transform: translate(-50%, 0);
                `}
            >
                {widgetData["center-top"].map((item, index) => (
                    <ChatBtnWidgetButton
                        key={index}
                        buttonData={item}
                        leftSide={true}
                    />
                ))}
            </div>
            <div
                className={css`
                    ${areaBase};
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%, 0);
                `}
            >
                {widgetData["center-bottom"].map((item, index) => (
                    <ChatBtnWidgetButton
                        key={index}
                        buttonData={item}
                        leftSide={true}
                    />
                ))}
            </div>
            <div
                className={css`
                    ${areaBase};
                    top: 0;
                    left: 0;
                    align-items: start;
                `}
            >
                {widgetData["left-top"].map((item, index) => (
                    <ChatBtnWidgetButton
                        key={index}
                        buttonData={item}
                        leftSide={true}
                    />
                ))}
            </div>
            <div
                className={css`
                    ${areaBase};
                    top: 0;
                    right: 0;
                    align-items: end;
                `}
            >
                {widgetData["right-top"].map((item, index) => (
                    <ChatBtnWidgetButton
                        key={index}
                        buttonData={item}
                        leftSide={false}
                    />
                ))}
            </div>
            <div
                className={css`
                    ${areaBase};
                    top: 50%;
                    left: 0;
                    transform: translate(0, -50%);
                    align-items: start;
                `}
            >
                {widgetData["left-center"].map((item, index) => (
                    <ChatBtnWidgetButton
                        key={index}
                        buttonData={item}
                        leftSide={true}
                    />
                ))}
            </div>
            <div
                className={css`
                    ${areaBase};
                    top: 50%;
                    right: 0;
                    transform: translate(0, -50%);
                    align-items: end;
                `}
            >
                {widgetData["right-center"].map((item, index) => (
                    <ChatBtnWidgetButton
                        key={index}
                        buttonData={item}
                        leftSide={false}
                    />
                ))}
            </div>
            <div
                className={css`
                    ${areaBase};
                    bottom: 0;
                    left: 0;
                    align-items: start;
                `}
            >
                {widgetData["left-bottom"].map((item, index) => (
                    <ChatBtnWidgetButton
                        key={index}
                        buttonData={item}
                        leftSide={true}
                    />
                ))}
            </div>
            <div
                className={css`
                    ${areaBase};
                    bottom: 0;
                    right: 0;
                    align-items: end;
                `}
            >
                {widgetData["right-bottom"].map((item, index) => (
                    <ChatBtnWidgetButton
                        key={index}
                        buttonData={item}
                        leftSide={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChatBtnWidgetBuilder;
