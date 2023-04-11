import { useState } from 'react';
function SectionButtonBasicForm({ dataJson, handleProperties }) {
    const [inputsJson, setInputsJson] = useState({
        backgroundColor: dataJson.cssDesign.buttonDesign.backgroundColor,
        borderRadius: {
            pc: [...dataJson.cssDesign.buttonDesign.borderRadius.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.borderRadius.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.borderRadius.movil]
        },
        padding: {
            pc: [...dataJson.cssDesign.buttonDesign.padding.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.padding.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.padding.movil]
        },
        margin: {
            pc: [...dataJson.cssDesign.buttonDesign.margin.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.margin.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.margin.movil]
        }
    });
    function handleDataInput(e) {
        const { name, value } = e.target;
        setInputsJson((prevState) => {
            const newState = { ...prevState };
            switch (name) {
                case "backgroundColor":
                    newState.backgroundColor = value;
                    break;
                case "margin_all_device":
                case "padding_all_device":
                case "borderRadius_all_device":
                    const property = name.split("_")[0];
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
    return (<div className="border-b border-solid border-slate-400 pt-4 pb-4 flex flex-col">
         <div>
                <span className="
                border rounded-lg font-bold cursor-pointer uppercase py-1 px-2 text-white
                bg-primary
                text-[10px]
            ">
                    Button
                </span>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-6 flex-wrap">
                        <div className="flex flex-col">
                                    <label className="font-bold text-sm pb-2">
                                        Background Color
                                    </label>
                                    <input onChange={(e) => handleDataInput(e)} type="color" value={inputsJson.backgroundColor} name="backgroundColor" id=""/>
                        </div>
                        <div className="flex flex-col">
                             <label className="font-bold text-sm pb-2">Margin </label>
                             <input onChange={(e) => handleDataInput(e)} type="range" min={0} max={100} name="margin_all_device" id=""/>
                        </div>
                        <div className="flex flex-col">
                             <label className="font-bold text-sm pb-2">Padding</label>
                             <input onChange={(e) => handleDataInput(e)} type="range" min={0} max={100} name="padding_all_device" id=""/>
                        </div>
                        <div className="flex flex-col">
                             <label className="font-bold text-sm pb-2">Border Radius</label>
                             <input onChange={(e) => handleDataInput(e)} type="range" min={0} max={100} name="borderRadius_all_device" id=""/>
                        </div>
                </div>

            </div>
    </div>);
}
export default SectionButtonBasicForm;
