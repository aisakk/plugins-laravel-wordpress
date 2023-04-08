import {useState,useEffect} from 'react'
import './style.css';

function SectionButtonAdvancedFom({ dataJson, handleProperties }){
    const [deviceMargin, setDeviceMargin] = useState("pc")
    const [devicePadding, setDevicePadding] = useState("pc")
    const [deviceBorderRadius, setDeviceBorderRadius] = useState("pc")
    const [inputsJson, setInputsJson] = useState({
        backgroundColor: dataJson.cssDesign.buttonDesign.backgroundColor,
        borderRadius:{
            pc: [...dataJson.cssDesign.buttonDesign.borderRadius.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.borderRadius.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.borderRadius.movil]
        },
        padding:{
            pc: [...dataJson.cssDesign.buttonDesign.padding.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.padding.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.padding.movil]
        },
        margin:{
            pc: [...dataJson.cssDesign.buttonDesign.margin.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.margin.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.margin.movil]
        }
    })





    function handleDataInput(e) {
        const { name, value } = e.target;
        let updatedInputsJson;

        if (name === "backgroundColor") {
          updatedInputsJson = {
            ...inputsJson,
            [name]: value
          };
        } else {
          const [property, direction, device] = name.split("_");
          const directionIndex = { top: 0, right: 1, bottom: 2, left: 3 };

          updatedInputsJson = {
            ...inputsJson,
            [property]: {
              ...inputsJson[property],
              [device]: inputsJson[property][device].map((val, idx) =>
                idx === directionIndex[direction] ? value : val
              )
            }
          };
        }

        setInputsJson(updatedInputsJson);
        handleProperties(dataJson.id, name, updatedInputsJson);
      }


    return(

        <>
        <div>{/* Contenedor del Input Color */}
            <div>
                <p>Background</p>
            </div>
            <input onChange={(e)=> handleDataInput(e) } type="color" value={inputsJson.backgroundColor} name="backgroundColor" id=""  />
        </div>
        <div>{/**Contenedor del Margen */}
            <div className="flex justify-between">
                <p>Margin</p>
                <button onClick={()=> setDeviceMargin("pc")}> pc</button>
                <button onClick={()=> setDeviceMargin("tablet")} >tablet</button>
                <button onClick={()=> setDeviceMargin("movil")} >Movil</button>
            </div>
            <div>
                {deviceMargin === 'pc' && (
                    <>
                        <input value={inputsJson.margin.pc[0]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_top_pc" id="" />
                        <input value={inputsJson.margin.pc[1]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_right_pc" id="" />
                        <input value={inputsJson.margin.pc[2]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_bottom_pc" id="" />
                        <input value={inputsJson.margin.pc[3]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_left_pc" id="" />
                    </>
                )}
                     {deviceMargin === 'tablet' && (
                    <>
                        <input value={inputsJson.margin.tablet[0]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_top_tablet" id="" />
                        <input value={inputsJson.margin.tablet[1]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_right_tablet" id="" />
                        <input value={inputsJson.margin.tablet[2]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_bottom_tablet" id="" />
                        <input value={inputsJson.margin.tablet[3]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_left_tablet" id="" />
                    </>
                )}
                     {deviceMargin === 'movil' && (
                    <>
                        <input value={inputsJson.margin.movil[0]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_top_movil" id="" />
                        <input value={inputsJson.margin.movil[1]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_right_movil" id="" />
                        <input value={inputsJson.margin.movil[2]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_bottom_movil" id="" />
                        <input value={inputsJson.margin.movil[3]} onChange={(e)=> handleDataInput(e) } type="number" name="margin_left_movil" id="" />
                    </>
                )}
            </div>
          </div>
          <div>{/**Contenedor del padding */}
            <div className="flex justify-between">
                <p>padding</p>
                <button onClick={()=> setDevicePadding("pc")}> pc</button>
                <button onClick={()=> setDevicePadding("tablet")} >tablet</button>
                <button onClick={()=> setDevicePadding("movil")} >Movil</button>
            </div>
            <div>
                {devicePadding === 'pc' && (
                    <>
                        <input value={inputsJson.padding.pc[0]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_top_pc" id="" />
                        <input value={inputsJson.padding.pc[1]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_right_pc" id="" />
                        <input value={inputsJson.padding.pc[2]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_bottom_pc" id="" />
                        <input value={inputsJson.padding.pc[3]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_left_pc" id="" />
                    </>
                )}
                     {devicePadding === 'tablet' && (
                    <>
                        <input  value={inputsJson.padding.tablet[0]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_top_tablet" id="" />
                        <input  value={inputsJson.padding.tablet[1]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_right_tablet" id="" />
                        <input  value={inputsJson.padding.tablet[2]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_bottom_tablet" id="" />
                        <input  value={inputsJson.padding.tablet[3]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_left_tablet" id="" />
                    </>
                )}
                     {devicePadding === 'movil' && (
                    <>
                        <input value={inputsJson.padding.movil[0]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_top_movil" id="" />
                        <input value={inputsJson.padding.movil[1]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_right_movil" id="" />
                        <input value={inputsJson.padding.movil[2]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_bottom_movil" id="" />
                        <input value={inputsJson.padding.movil[3]} onChange={(e)=> handleDataInput(e) } type="number" name="padding_left_movil" id="" />
                    </>
                )}
            </div>
          </div>
          <div>
            <div className="flex justify-between">
                <p>Border Radius</p>
                <button onClick={()=> setDeviceBorderRadius("pc")}> pc</button>
                <button onClick={()=> setDeviceBorderRadius("tablet")} >tablet</button>
                <button onClick={()=> setDeviceBorderRadius("movil")} >Movil</button>
            </div>
            <div>
                {deviceBorderRadius === 'pc' && (
                    <>
                        <input value={inputsJson.borderRadius.pc[0]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_top_pc" id="" />
                        <input value={inputsJson.borderRadius.pc[1]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_right_pc" id="" />
                        <input value={inputsJson.borderRadius.pc[2]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_bottom_pc" id="" />
                        <input value={inputsJson.borderRadius.pc[3]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_left_pc" id="" />
                    </>
                )}
                     {deviceBorderRadius === 'tablet' && (
                    <>
                        <input value={inputsJson.borderRadius.tablet[0]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_top_tablet" id="" />
                        <input value={inputsJson.borderRadius.tablet[1]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_right_tablet" id="" />
                        <input value={inputsJson.borderRadius.tablet[2]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_bottom_tablet" id="" />
                        <input value={inputsJson.borderRadius.tablet[3]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_left_tablet" id="" />
                    </>
                )}
                     {deviceBorderRadius === 'movil' && (
                    <>
                        <input value={inputsJson.borderRadius.movil[0]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_top_movil" id="" />
                        <input value={inputsJson.borderRadius.movil[1]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_right_movil" id="" />
                        <input value={inputsJson.borderRadius.movil[2]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_bottom_movil" id="" />
                        <input value={inputsJson.borderRadius.movil[3]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_left_movil" id="" />
                    </>
                )}
            </div>
          </div>
        </>
    )
}



export default SectionButtonAdvancedFom;
