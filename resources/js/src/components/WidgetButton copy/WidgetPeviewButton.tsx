import { css } from '@emotion/css';
import Icon from '../Icon';

function WidgetPreviewButton({ labelText, link, icon, cssDesign }) {

    function getMediaQuery(jsonProperty, propertyCss) {
        const property = Object.entries(jsonProperty)

        const deviceBreakpoints = {
          pc: "1024px",
          tablet: "768px",
          movil: "320px",
        };
        const generateCSS = (property, key, value) => {
        const separarComasArray = property === `${propertyCss}` ? value.map((num)=> num + 'px').join(" ") : value;
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
        const mediaQueryProperty = property.reverse().map(([key,value])=> generateCSS(propertyCss, key,value)).join("");

        return mediaQueryProperty;
      }

    const buttonStyle = css`
        background-color: ${cssDesign.buttonDesign.backgroundColor};
        border:none;
        ${getMediaQuery(cssDesign.buttonDesign.padding, "padding")}
        ${getMediaQuery(cssDesign.buttonDesign.margin, "margin")}
        ${getMediaQuery(cssDesign.buttonDesign.borderRadius, "border-radius")}
  `;
    const labelStyle = css`
        background-color: ${cssDesign.labelDesign.backgroundColor};
        color: ${cssDesign.labelDesign.color};
        font-family: ${cssDesign.labelDesign.fontFamily};
        ${getMediaQuery(cssDesign.labelDesign.fontSize, "font-size")}

    `
    const iconStyle = css`
        color: ${cssDesign.iconDesign.color};
        ${getMediaQuery(cssDesign.iconDesign.fontSize, "font-size")}

    `
    const containerStyle = css`
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
                        <Icon name={icon} size="20" className={iconStyle} />
                    </button>
                </a>
            </div>
        </>);
}
export default WidgetPreviewButton;
