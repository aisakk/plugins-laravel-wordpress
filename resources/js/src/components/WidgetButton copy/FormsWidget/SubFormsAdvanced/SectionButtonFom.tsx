import {useState,useEffect} from 'react'
import './style.css';

function SectionButtonForm({ dataJson, handleProperties }){
    const [deviceMargin, setDeviceMargin] = useState("pc")
    const [devicePadding, setDevicePadding] = useState("pc")
    const [deviceBorderRadius, setDeviceBorderRadius] = useState("pc")
    const [inputsJson, setInputsJson] = useState({
        borderRadius:{
            pc: [...dataJson.cssDesign.buttonDesign.borderRadius.pc]
        }
    })



    function handleDataInput(e) {
        const { name, value } = e.target;
        const [property, direction, device] = name.split("_");
        const directionIndex = { top: 0, rigth: 1, bottom: 2, left: 3 };

        setInputsJson((prevState) => {
          const newBorderRadius = { ...prevState.borderRadius };
          newBorderRadius[device] = [...prevState.borderRadius[device]];
          newBorderRadius[device][directionIndex[direction]] = parseInt(value, 10);
          return { ...prevState, borderRadius: newBorderRadius };
        });
      }



    return(

        <>
        <div>{/* Contenedor del Input Color */}
            <div>
                <p>Background</p>
            </div>
            <input onChange={(e)=> handleDataInput(e) } type="color" name="backgroundColor" id=""  />
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
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-top-pc" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-rigth-pc" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-bottom-pc" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-left-pc" id="" />
                    </>
                )}
                     {deviceMargin === 'tablet' && (
                    <>
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-top-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-rigth-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-bottom-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-left-tablet" id="" />
                    </>
                )}
                     {deviceMargin === 'movil' && (
                    <>
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-top-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-rigth-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-bottom-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="margin-left-movil" id="" />
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
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-top-pc" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-rigth-pc" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-bottom-pc" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-left-pc" id="" />
                    </>
                )}
                     {devicePadding === 'tablet' && (
                    <>
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-top-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-rigth-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-bottom-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-left-tablet" id="" />
                    </>
                )}
                     {devicePadding === 'movil' && (
                    <>
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-top-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-rigth-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-bottom-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="padding-left-movil" id="" />
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
                        <input value={inputsJson.borderRadius.pc[1]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_rigth_pc" id="" />
                        <input value={inputsJson.borderRadius.pc[2]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_bottom_pc" id="" />
                        <input value={inputsJson.borderRadius.pc[3]} onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius_left_pc" id="" />
                    </>
                )}
                     {deviceBorderRadius === 'tablet' && (
                    <>
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius-top-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius-rigth-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius-bottom-tablet" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius-left-tablet" id="" />
                    </>
                )}
                     {deviceBorderRadius === 'movil' && (
                    <>
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius-top-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius-rigth-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius-bottom-movil" id="" />
                        <input onChange={(e)=> handleDataInput(e) } type="number" name="borderRadius-left-movil" id="" />
                    </>
                )}
            </div>
          </div>
        </>
    )
}



export default SectionButtonForm;
