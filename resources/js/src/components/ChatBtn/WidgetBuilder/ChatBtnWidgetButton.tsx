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
let chatBot = [{
    pregunta: '¿Se puede realizar una Compra?',
    respuesta: "Si se puede realizar una compra"
},{
    pregunta: '¿Se puede realizar una Compra?',
    respuesta: "Si se puede realizar una compra"
},{
    pregunta: '¿Se puede realizar una Compra?',
    respuesta: "Si se puede realizar una compra"
},{
    pregunta: '¿Se puede realizar una Compra?',
    respuesta: "Si se puede realizar una compra"
},{
    pregunta: '¿Se puede realizar una Compra?',
    respuesta: "Si se puede realizar una compra"
},{
    pregunta: '¿Se puede realizar una Compra?',
    respuesta: "Si se puede realizar una compra"
}]
const ChatBtnWidgetButton: React.FC<ChatBtnWidgetButtonProps> = ({
    buttonData,
    leftSide,
}) => {
    let [buttonClass, setButtonClass] = useState("btn" + nanoid());
    let [labelClass, setLabelClass] = useState("label" + nanoid());
    let [mainClass, setMainClass] = useState("main" + nanoid());
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [qrCodeImageURL, setQRCodeImageURL] = useState(null);
    const canvas = document.querySelector('canvas');
    const mediaQueries = {
        desktop: "@media (min-width: 1024px)",
        tablet: "@media (min-width: 768px) and (max-width: 1023px)",
        mobile: "@media (max-width: 767px)",
    };
    function Animation(){
        if(buttonData.animation == "Expand"){
            return `@keyframes ${buttonData.animation} {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.2);
                }
                100% {
                  transform: scale(1);
                }
              }`
        }
        if(buttonData.animation == "Breathing"){
            return `@keyframes ${buttonData.animation} {
                0% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.1);
                  opacity: 0.7;
                }
                100% {
                  transform: scale(1);
                  opacity: 1;
                }
              }`
        }
        if(buttonData.animation == "Levitate"){
            return `@keyframes ${buttonData.animation} {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-20px);
                }
                100% {
                  transform: translateY(0);
                }
              }`
        }
    }
    function handleOpenChat(){
        let containerBot = document.querySelector('.chatbot');
        if( containerBot.style.display == 'none'){
             containerBot.style.display = 'block';
        }else{
            containerBot.style.display = 'none';
        }

    }

    let dynamicCSS = `
    details {
        background: #282828;
        box-shadow: 0 .1rem 1rem -.5rem rgba(0,0,0,.4);
        border-radius: 5px;
        overflow: hidden;
        color: white;
        margin-bottom: .5rem;
      }

      summary {
        padding: 1rem;
        display: block;
        background: #333;
        padding-left: 2.2rem;
        position: relative;
        cursor: pointer;
      }

      summary:before {
        content: '';
        border-width: .4rem;
        border-style: solid;
        border-color: transparent transparent transparent #fff;
        position: absolute;
        top: 1.3rem;
        left: 1rem;
        transform: rotate(0);
        transform-origin: .2rem 50%;
        transition: .25s transform ease;
      }

      /* THE MAGIC 🧙‍♀️ */
      details[open] > summary:before {
        transform: rotate(90deg);
      }


      details summary::-webkit-details-marker {
        display:none;
      }

      details > ul {
        padding-bottom: 1rem;
        margin-bottom: 0;
      }
    .${mainClass}-chatcontainer{
        display: flex;
        flex-direction: column;
    }
    .${mainClass}-chatwidget{
        display:flex;
        flex-direction: row${leftSide ? "-reverse" : ""};
        align-items: center;
    }
    .enlace-chatbot{
        cursor:pointer
    }
        .chatbot{
            display: none;
            width:300px;
            height:300px;
            overflow-y: auto;
            background-color:#ffff;
            position:relative;
            padding: 10px;
        }
        .${mainClass} {
            display: flex;
            flex-direction: row${leftSide ? "-reverse" : ""};
            align-items: center;
        }
        .${mainClass}:hover{
            animation: ${buttonData.animation} 2s ease-in-out infinite;
        }
        ${Animation()}
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
    const handleButtonEnlaceClick = (event) => {
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

    function formatTextForWhatsApp(text) {
        if(!text){
            return ''
        }else{
            const formattedText = text
            .replace(/\n/g, '%0A') // Reemplaza los saltos de línea con %0A
            .replace(/ /g, '%20'); // Reemplaza los espacios con %20
            return formattedText;
        }

      }
    function getFormattedLink() {
        let userContent = buttonData.target;
        const formattedMessage = formatTextForWhatsApp(buttonData.extraField)
        switch (buttonData.icon) {
            case "whatsapp":
                return `https://api.whatsapp.com/send?phone=${userContent}&text=${formattedMessage}`;
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
        const qrCodeElement = document.getElementById(mainClass)
        if (qrCodeElement) {
          domtoimage
            .toPng(qrCodeElement)
            .then((dataUrl) => {
              setQRCodeImageURL(dataUrl);
            })
            .catch((error) => {
              console.error("Error al convertir el QRCode en imagen:", error);
            });
        }
      };
      const dynamicJS = `
      let qrCodeImageURL = null;
      let buttonData = ${JSON.stringify(buttonData)};
      let mainClass = document.querySelector('.${mainClass}');
      let enlace = mainClass.querySelector('.enlace');
      let canva = document.querySelector('canvas');
      let qrCodeImage = mainClass.querySelector('.qr-code-image');
      let qrCodeModal = mainClass.querySelector('.qr-code-modal');

      function getFormattedLink() {
        let userContent = buttonData.target;
        switch (buttonData.icon) {
          case 'whatsapp':
            return 'https://api.whatsapp.com/send?phone=' + userContent;
          case 'facebook':
            return 'https://www.facebook.com/' + userContent;
          case 'instagram':
            return 'https://www.instagram.com/' + userContent;
          case 'phone':
            return 'tel:' + userContent;
          case 'email':
            return 'mailto:' + userContent;
        }
        return userContent;
      }

      function handleButtonClick(event) {
        const isTablet = window.matchMedia(
          '(min-width: 768px) and (max-width: 1023px)'
        ).matches;
        if (isTablet) {
          window.open(getFormattedLink(), '_blank');
        } else {
          event.preventDefault();
          qrCodeModal.style.display = 'block';
        }
        if (!qrCodeImageURL) {
          generateQRCodeImage();
        }
      }

      const generateQRCodeImage = () => {
        const qrCodeElement = document.getElementById(mainClass)
        if (qrCodeElement) {
          domtoimage
            .toPng(qrCodeElement)
            .then((dataUrl) => {
                qrCodeImage.src = dataUrl;
            })
            .catch((error) => {
              console.error("Error al convertir el QRCode en imagen:", error);
            });
        }
      };

      enlace.addEventListener('click', (e) => {
        handleButtonClick(e);
      });

      qrCodeModal.addEventListener('click', (e) => {
        if (e.target === qrCodeModal) {
          qrCodeModal.style.display = 'none';
        }
      });
    `;


    return (
        <div className={mainClass}>
                    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
        </head>
            <style>{dynamicCSS}</style>
            {buttonData.icon !== 'global' ? (
            <>
                  {buttonData.label && (
                <span className={labelClass}>{buttonData.label}</span>
            )}

            <a
                href={getFormattedLink()}
                target="_blank"
                className={`${buttonClass} enlace`}
                onClick={handleButtonEnlaceClick}

            >
                <Icon
                    name={buttonData.icon}
                    size={buttonData.iconSize["desktop"]}
                    color={buttonData.iconColor}
                />
            </a>
            <Modal className="qr-code-modal"
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <Space direction="vertical" align="center">
            <div id={mainClass}  className="flex">
                 <QRCode value={getFormattedLink()}/>
            </div>
                <img src={canvas?.toDataURL()} className="qr-code-image" alt="QRCode generado" />
        </Space>
      </Modal>
            </>
            ) : (
            <>
            <div className={`${mainClass}-chatcontainer`}>

                <div className={`${mainClass}-chatwidget`}>
                            {buttonData.label && (
                                <span className={labelClass}>{buttonData.label}</span>
                            )}
                            <a
                                //href={getFormattedLink()}
                                target="_blank"
                                className={`${buttonClass} enlace-chatbot`}
                                onClick={handleOpenChat}
                            >
                                <Icon
                                    name={buttonData.icon}
                                    size={buttonData.iconSize["desktop"]}
                                    color={buttonData.iconColor}
                                />
                            </a>
                    </div>
                    <div className="chatbot">
                        {buttonData.chatbot?.map((item, index)=>{
                            return (<>
                              <details>
                                <summary>{item.pregunta}</summary>
                                <ul>
                                    <li>{item.respuesta}</li>

                                </ul>
                                </details>
                            </>)
                        })}
                     </div>

            </div>

            </>)}

      <script>{dynamicJS}</script>
    </div>

    );
};

export default ChatBtnWidgetButton;
