import { useState } from 'react';
function SectionLabelBasicForm({ dataJson, handleProperties }) {
    const [inputsJson, setInputsJson] = useState({
        backgroundColor: dataJson.cssDesign.labelDesign.backgroundColor,
        color: dataJson.cssDesign.labelDesign.color,
        fontFamily: dataJson.cssDesign.labelDesign.fontFamily,
        borderRadius: {
            pc: [...dataJson.cssDesign.labelDesign.borderRadius.pc],
            tablet: [...dataJson.cssDesign.labelDesign.borderRadius.tablet],
            movil: [...dataJson.cssDesign.labelDesign.borderRadius.movil]
        },
        fontSize: {
            pc: [...dataJson.cssDesign.labelDesign.fontSize.pc],
            tablet: [...dataJson.cssDesign.labelDesign.fontSize.tablet],
            movil: [...dataJson.cssDesign.labelDesign.fontSize.movil]
        },
        padding: {
            pc: [...dataJson.cssDesign.labelDesign.padding.pc],
            tablet: [...dataJson.cssDesign.labelDesign.padding.tablet],
            movil: [...dataJson.cssDesign.labelDesign.padding.movil],
        },
        margin: {
            pc: [...dataJson.cssDesign.labelDesign.margin.pc],
            tablet: [...dataJson.cssDesign.labelDesign.margin.tablet],
            movil: [...dataJson.cssDesign.labelDesign.margin.movil],
        },
    });
    function handleDataInput(e) {
        const { name, value } = e.target;
        setInputsJson((prevState) => {
            const newState = { ...prevState };
            const property = name.split("_")[0];
            switch (name) {
                case "backgroundColor":
                    newState.backgroundColor = value;
                    break;
                case "color":
                    newState.color = value;
                    break;
                case "fontFamily":
                    newState.fontFamily = value;
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
        handleProperties(dataJson.id, name, inputsJson);
    }
    return (<div className='border-b border-solid border-slate-400 pt-4 pb-4'>
            <div>
                <span className="
                border rounded-lg font-bold cursor-pointer uppercase py-1 px-2 text-white
                bg-primary
                text-[10px]
            ">
                    Label
                </span>
            </div>
            <div className='flex gap-4 flex-wrap'>
                <div className="flex flex-col">
                     <div><label className="font-bold text-sm pb-2">Background Color</label></div>
                     <div>
                        <input onChange={(e) => handleDataInput(e)} type="color" value={inputsJson.backgroundColor} name="backgroundColor" id=""/>
                     </div>
                </div>
                <div className="flex flex-col">
                     <div><label className="font-bold text-sm pb-2">Color</label></div>
                     <div>
                        <input onChange={(e) => handleDataInput(e)} type="color" value={inputsJson.color} name="color" id=""/>
                     </div>
                </div>
                <div className="flex flex-col">
                     <div><label className="font-bold text-sm pb-2">Font Family</label></div>
                <div>
                     <select className="bg-white text-left rounded-xl border w-full border-slate-200 p-2 px-4 text-xs" name="fontFamily" value={inputsJson.fontFamily} onChange={(e) => handleDataInput(e)}>
                        <option value="value1">Value 1</option>
                        <option value="value2">Value 2</option>
                        <option value="value3">Value 3</option>
                    </select>
                 </div>
                </div>
                <div className="flex flex-col">
                        <div><label className="font-bold text-sm pb-2">Margin</label></div>
                        <div>
                         <input type="range" min={0} max={100} name="margin_all_device" onChange={(e) => handleDataInput(e)} id=""/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div><label className="font-bold text-sm pb-2">Padding</label></div>
                        <div>
                            <input type="range" min={0} max={100} name="padding_all_device" onChange={(e) => handleDataInput(e)} id=""/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div><label className="font-bold text-sm pb-2">Border Radius</label></div>
                        <div>
                            <input type="range" min={0} max={100} name="borderRadius_all_device" onChange={(e) => handleDataInput(e)} id=""/>
                        </div>
                    </div>
            </div>
        </div>);
}
export default SectionLabelBasicForm;
