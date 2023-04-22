import React, { useState, useRef } from "react";
import { ChatBtnProps } from "../../../types/ChatBtnTypes";
import Icon from "../../Icon";
import { css } from "@emotion/css";
import { nanoid } from "nanoid";
import Modal from "../Modal/Modal";
import { QRCode, Space  } from "antd";
import domtoimage from "dom-to-image";

interface ChatBtnWidgetButtonProps {
    buttonData: ChatBtnProps;
    leftSide: boolean;
}

const ChatBtnWidgetButton: React.FC<ChatBtnWidgetButtonProps> = ({
    buttonData,
    leftSide,
}) => {
    let [buttonClass, setButtonClass] = useState("btn" + nanoid());
    let [labelClass, setLabelClass] = useState("label" + nanoid());
    let [mainClass, setMainClass] = useState("main" + nanoid());
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [qrCodeImageURL, setQRCodeImageURL] = useState(null);
    const qrCodeRef = useRef(null);
    const mediaQueries = {
        desktop: "@media (min-width: 1024px)",
        tablet: "@media (min-width: 768px) and (max-width: 1023px)",
        mobile: "@media (max-width: 767px)",
    };

    let dynamicCSS = `
        .${mainClass} {
            display: flex;
            flex-direction: row${leftSide ? "-reverse" : ""};
            align-items: center;
        }

        .${labelClass} {
            height:fit-content;
            background-color: ${buttonData.labelBackgroundColor};
            color: ${buttonData.labelColor};
            font-family: "${buttonData.labelFontFamily}";
        }

        .${buttonClass} {
            background-color: ${buttonData.buttonBackgroundColor};
            color: ${buttonData.iconColor};
        }

        ${mediaQueries.desktop} {
            .${labelClass} {
                padding: ${buttonData.labelPadding.desktop.join("px ")}px;
                margin-left: ${buttonData.labelMargin.desktop}px;
                margin-right: ${buttonData.labelMargin.desktop}px;
                border-radius: ${buttonData.labelBorderRadius.desktop.join(
                    "px "
                )}px;
                font-size: ${buttonData.labelFontSize.desktop}px;
            }

            .${buttonClass} {
                padding: ${buttonData.buttonPadding.desktop.join("px ")}px;
                margin: ${buttonData.buttonMargin.desktop.join("px ")}px;
                border-radius: ${buttonData.buttonBorderRadius.desktop.join(
                    "px "
                )}px;
            }
        }

        ${mediaQueries.tablet} {
            .${labelClass} {
                padding: ${buttonData.labelPadding.tablet.join("px ")}px;
                margin-left: ${buttonData.labelMargin.tablet}px;
                margin-right: ${buttonData.labelMargin.tablet}px;
                border-radius: ${buttonData.labelBorderRadius.tablet.join(
                    "px "
                )}px;
                font-size: ${buttonData.labelFontSize.tablet}px;
            }

            .${buttonClass} {
                padding: ${buttonData.buttonPadding.tablet.join("px ")}px;
                margin: ${buttonData.buttonMargin.tablet.join("px ")}px;
                border-radius: ${buttonData.buttonBorderRadius.tablet.join(
                    "px "
                )}px;
            }
        }

        ${mediaQueries.mobile} {
            .${labelClass} {
                padding: ${buttonData.labelPadding.mobile.join("px ")}px;
                margin-left: ${buttonData.labelMargin.mobile}px;
                margin-right: ${buttonData.labelMargin.mobile}px;
                border-radius: ${buttonData.labelBorderRadius.mobile.join(
                    "px "
                )}px;
                font-size: ${buttonData.labelFontSize.mobile}px;
            }

            .${buttonClass} {
                padding: ${buttonData.buttonPadding.mobile.join("px ")}px;
                margin: ${buttonData.buttonMargin.mobile.join("px ")}px;
                border-radius: ${buttonData.buttonBorderRadius.mobile.join(
                    "px "
                )}px;
            }
        }
    `;


    const handleButtonClick = (event) => {
        const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        if (isTablet) {
          window.open(getFormattedLink(), "_blank");
        } else {
          event.preventDefault();
          setIsModalVisible(true);
        }
        if (!qrCodeImageURL) {
            generateQRCodeImage();
        }
      };

    function getFormattedLink() {
        let userContent = buttonData.target;
        switch (buttonData.icon) {
            case "whatsapp":
                return `https://api.whatsapp.com/send?phone=${userContent}`;
            case "facebook":
                return `https://www.facebook.com/${userContent}`;
            case "instagram":
                return `https://www.instagram.com/${userContent}`;
            case "phone":
                return `tel:${userContent}`;
            case "email":
                return `mail:${userContent}`;
        }
        return userContent;
    }
    const generateQRCodeImage = () => {
        if (qrCodeRef.current) {
          domtoimage
            .toPng(qrCodeRef.current)
            .then((dataUrl) => {
              setQRCodeImageURL(dataUrl);
            })
            .catch((error) => {
              console.error("Error al convertir el QRCode en imagen:", error);
            });
        }
      };

    return (
        <div className={mainClass}>
            <style>{dynamicCSS}</style>
            {buttonData.label && (
                <span className={labelClass}>{buttonData.label}</span>
            )}

            <a
                href={getFormattedLink()}
                target="_blank"
                className={buttonClass}
                onClick={handleButtonClick}
            >
                <Icon
                    name={buttonData.icon}
                    size={buttonData.iconSize["desktop"]}
                    color={buttonData.iconColor}
                />
            </a>
            <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <Space direction="vertical" align="center">
            <div ref={qrCodeRef} className="flex">
                 <QRCode value={getFormattedLink()}/>
            </div>
                {qrCodeImageURL && (
                <img src={qrCodeImageURL} alt="QRCode generado" />
            )}
        </Space>
      </Modal>
        </div>
    );
};

export default ChatBtnWidgetButton;
