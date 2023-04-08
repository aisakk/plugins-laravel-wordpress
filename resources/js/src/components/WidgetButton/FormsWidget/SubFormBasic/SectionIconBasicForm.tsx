
import {useState} from 'react';


function SectionIconBasicForm({dataJson, handleProperties}){
    const [inputsJson, setInputsJson] = useState({
        color: dataJson.cssDesign.iconDesign.color,
        iconSize: dataJson.cssDesign.iconDesign.iconSize,
        fontSize: {
          pc: [...dataJson.cssDesign.iconDesign.fontSize.pc],
          tablet: [...dataJson.cssDesign.iconDesign.fontSize.tablet],
          movil: [...dataJson.cssDesign.iconDesign.fontSize.movil]
        },
        padding: {
          pc: [...dataJson.cssDesign.iconDesign.padding.pc],
          tablet: [...dataJson.cssDesign.iconDesign.padding.tablet],
          movil: [...dataJson.cssDesign.iconDesign.padding.movil]
        },
        margin: {
          pc: [...dataJson.cssDesign.iconDesign.margin.pc],
          tablet: [...dataJson.cssDesign.iconDesign.margin.tablet],
          movil: [...dataJson.cssDesign.iconDesign.margin.movil]
        }
      });
    function handleDataInput(e){
        const { name, value } = e.target;
        const property = name.split("_")[0];
        setInputsJson((prevState) => {
            const newState = { ...prevState };
            switch (name) {
              case "color":
                newState.color = value;
                break;
               case "iconSize":
                newState.iconSize = value;
                break;
            case "fontSize_all_device":
                newState[property].pc = [value];
                newState[property].tablet = [value];
                newState[property].movil = [value];
                break;
              case "margin_all_device":
              case "padding_all_device":
              case "borderRadius_all_device":
                newState[property].pc = [value, value, value, value];
                newState[property].tablet = [value, value, value, value];
                newState[property].movil = [value, value, value, value];
                break;
              default:
                break;
            }

            return newState;
          });

          handleProperties(dataJson.id, name, inputsJson)

    }
    return(
        <div className='flex'>
        <div>{/* Contenedor del Input Color */}
            <div>
                <p>Color</p>
            </div>
            <input onChange={(e)=> handleDataInput(e) } type="color" value={inputsJson.color} name="color" id=""  />
        </div>
        <div>
            <p>IconSize</p>
            <input value={inputsJson.iconSize} onChange={(e)=> handleDataInput(e) } type="number" name="iconSize" id="" />
        </div>
        <div>{/*Contenedor del Margin*/}
             <p>Margin</p>
             <input type="range"min={0} max={100} onChange={(e)=> handleDataInput(e) }  name="margin_all_device" id="" />
        </div>
        <div>{/*Contenedor del Padding*/}
             <p>Padding</p>
             <input type="range" min={0} max={100} onChange={(e)=> handleDataInput(e) }  name="padding_all_device" id="" />
        </div>
        <div>{/*Contenedor del FontSize*/}
             <p>Font Size</p>
             <input type="number" onChange={(e)=> handleDataInput(e) }  name="fontSize_all_device" id="" />
        </div>
        </div>
    )
}

export default SectionIconBasicForm;
