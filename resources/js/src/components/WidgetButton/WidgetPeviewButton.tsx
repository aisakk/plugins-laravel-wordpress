import { css } from '@emotion/css';
//import Icon from '../Icon';
import IconWidget from '../IconWidget';


function WidgetPreviewButton({ labelText, link, icon, cssDesign }) {

    function getMediaQuery(jsonProperty, propertyCss) {
        const property = Object.entries(jsonProperty);

        const deviceBreakpoints = {
          pc: "1024px",
          tablet: "768px",
          movil: "320px",
        };

        const generateCSS = (property, key, value) => {
          const separarComasArray = property === `${propertyCss}` ? (Array.isArray(value) ? value.map((num) => num + "px").join(" ") : value) : value;

          switch (key) {
            case "movil":
              return `@media (min-width: ${deviceBreakpoints.movil}) { ${property}: ${separarComasArray}; }`;
            case "tablet":
              return `@media (min-width: ${deviceBreakpoints.tablet}) { ${property}: ${separarComasArray}; }`;
            case "pc":
              return `@media (min-width: ${deviceBreakpoints.pc}) { ${property}: ${separarComasArray}; }`;
            default:
              return "";
          }
        };

        const mediaQueryProperty = property.reverse().map(([key, value]) => generateCSS(propertyCss, key, value)).join("");

        return mediaQueryProperty;
    }


    const buttonStyle = css`
        background-color: ${cssDesign.buttonDesign.backgroundColor};
        border:none;
        display: flex;
        justify-content: center;
        ${getMediaQuery(cssDesign.buttonDesign.padding, "padding")}
        ${getMediaQuery(cssDesign.buttonDesign.margin, "margin")}
        ${getMediaQuery(cssDesign.buttonDesign.borderRadius, "border-radius")}
  `;
    const labelStyle = css`
        background-color: ${cssDesign.labelDesign.backgroundColor};
        color: ${cssDesign.labelDesign.color};
        font-family: ${cssDesign.labelDesign.fontFamily};
        ${getMediaQuery(cssDesign.labelDesign.fontSize, "font-size")}
        ${getMediaQuery(cssDesign.labelDesign.padding, "padding")}
        ${getMediaQuery(cssDesign.labelDesign.margin, "margin")}
        ${getMediaQuery(cssDesign.labelDesign.borderRadius, "border-radius")}

    `
    const iconStyle = css`
        width: ${cssDesign.iconDesign.iconSize}px;
        height: ${cssDesign.iconDesign.iconSize}px;
        ${getMediaQuery(cssDesign.iconDesign.fontSize, "font-size")}
        ${getMediaQuery(cssDesign.iconDesign.padding, "padding")}
        ${getMediaQuery(cssDesign.iconDesign.margin, "margin")}

    `

    const containerStyle = css`
        display:flex;
        position:${cssDesign.containerDesign.position};
        top: ${cssDesign.containerDesign.top};
        right: ${cssDesign.containerDesign.right};
        left: ${cssDesign.containerDesign.left};
        bottom: ${cssDesign.containerDesign.bottom};
    `
    return (<>
            <div className={containerStyle}>
                {labelText && <label className={labelStyle}>{labelText}</label>}
                <a href={link} target="blank">
                    <button className={buttonStyle}>
                        <IconWidget name={icon} stylesEmotionCss={iconStyle} color={cssDesign.iconDesign.color}/>
{/*                         <Icon name={icon} size={cssDesign.iconDesign.iconSize} className={iconStyle} />
 */}
 </button>
                </a>
            </div>
        </>);
}
export default WidgetPreviewButton;
