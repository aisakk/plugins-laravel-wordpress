import React, { useState } from "react";
import IconWidget from "../../../IconWidget";
function SectionLabelAdvancedForm({ dataJson, handleProperties }) {
    const [deviceMargin, setDeviceMargin] = useState("pc");
    const [devicePadding, setDevicePadding] = useState("pc");
    const [deviceFontSize, setDeviceFontSize] = useState("pc");
    const [deviceBorderRadius, setDeviceBorderRadius] = useState("pc");
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
        let updatedInputsJson;
        if (name === "backgroundColor" || name === "color" || name === "fontFamily") {
            updatedInputsJson = {
                ...inputsJson,
                [name]: value
            };
        }
        else {
            const [property, direction, device] = name.split("_");
            const directionIndex = { top: 0, right: 1, bottom: 2, left: 3 };
            updatedInputsJson = {
                ...inputsJson,
                [property]: {
                    ...inputsJson[property],
                    [device]: inputsJson[property][device].map((val, idx) => idx === directionIndex[direction] ? value : val)
                }
            };
        }
        setInputsJson(updatedInputsJson);
        handleProperties(dataJson.id, name, updatedInputsJson);
    }
    return (<>
          <div className="border-b border-solid border-slate-400 pt-4 pb-4">
                <div>
                    <span className="border rounded-lg font-bold cursor-pointer uppercase py-1 px-2 text-white bg-primary
                    text-[10px]">Label</span>
                </div>
                <div className="flex gap-4">
                    <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                         <div><label className="font-bold text-sm pb-2">Background</label></div>
                         <div>
                              <input onChange={(e) => handleDataInput(e)} type="color" value={inputsJson.backgroundColor} name="backgroundColor" id=""/>
                         </div>
                    </div>
                    <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                        <div><label className="font-bold text-sm pb-2">Color</label></div>
                        <div>
                            <input onChange={(e) => handleDataInput(e)} type="color" value={inputsJson.color} name="color" id=""/>
                        </div>
                    </div>
                    <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                      <div><label className="font-bold text-sm pb-2">Font Family</label></div>
                        <div>
                        <select name="fontFamily" defaultValue={inputsJson.fontFamily} onChange={handleDataInput}>
                            <option value="value1">Value 1</option>
                            <option value="value2">Value 2</option>
                            <option value="value3">Value 3</option>
                        </select>
                        </div>
                    </div>
                <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                    <div className="flex justify-between">
                        <label className="font-bold text-sm pb-2">Font Size</label>
                        <button onClick={() => setDeviceFontSize("pc")}>
                            <IconWidget stylesEmotionCss="" name="desktop" color={`${deviceFontSize === "pc" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>
                        </button>
                        <button onClick={() => setDeviceFontSize("tablet")}>
                            <IconWidget stylesEmotionCss="" name="tablet" color={`${deviceFontSize === "tablet" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>
                        </button>
                        <button onClick={() => setDeviceFontSize("movil")}>
                             <IconWidget stylesEmotionCss="" name="mobile" color={`${deviceFontSize === "movil" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>

                        </button>
                    </div>
                        <div className="relative">
                        {deviceFontSize === 'pc' && (<>
                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.fontSize.pc[0]} onChange={(e) => handleDataInput(e)} type="number" name="fontSize_top_pc" id=""/>

                        </>)}
                            {deviceFontSize === 'tablet' && (<>
                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.fontSize.tablet[0]} onChange={(e) => handleDataInput(e)} type="number" name="fontSize_top_tablet" id=""/>
                        </>)}
                            {deviceFontSize === 'movil' && (<>
                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.fontSize.movil[0]} onChange={(e) => handleDataInput(e)} type="number" name="fontSize_top_movil" id=""/>
                        </>)}
                          <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 pt-3">
                     <div className="w-full pr-2 sm:pr-0">
                         <div className="flex gap-3 w-6/12">
                            <label className="font-bold text-sm pb-2">Border Radius</label>
                            <button onClick={() => setDeviceBorderRadius("pc")}>
                             <IconWidget stylesEmotionCss="" name="desktop" color={`${deviceBorderRadius === "pc" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>

                            </button>
                            <button onClick={() => setDeviceBorderRadius("tablet")}>
                             <IconWidget stylesEmotionCss="" name="tablet" color={`${deviceBorderRadius === "tablet" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>

                            </button>
                            <button onClick={() => setDeviceBorderRadius("movil")}>
                                <IconWidget stylesEmotionCss="" name="mobile" color={`${deviceBorderRadius === "movil" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>

                            </button>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap">
                        {deviceBorderRadius === 'pc' && (<>
                                 <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Top</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.pc[0]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_top_pc" id=""/>
                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Right</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.pc[1]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_right_pc" id=""/>

                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.pc[2]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_bottom_pc" id=""/>

                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Left</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.pc[3]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_left_pc" id=""/>
                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                </>)}
                            {deviceBorderRadius === 'tablet' && (<>
                                 <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Top</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.tablet[0]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_top_tablet" id=""/>
                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Right</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.tablet[1]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_right_tablet" id=""/>

                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.tablet[2]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_bottom_tablet" id=""/>

                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Left</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.tablet[3]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_left_tablet" id=""/>
                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                </>)}
                                {deviceBorderRadius === 'movil' && (<>
                                 <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Top</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.movil[0]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_top_movil" id=""/>
                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Right</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.movil[1]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_right_movil" id=""/>

                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.movil[2]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_bottom_movil" id=""/>

                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                <div className="relative">
                                    <small className="block text-[10px] uppercase pt-1">Left</small>
                                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.borderRadius.movil[3]} onChange={(e) => handleDataInput(e)} type="number" name="borderRadius_left_movil" id=""/>
                                    <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">px</span>
                                </div>
                                </>)}

                        </div>
                    </div>
                </div>
                <div className="flex gap-3 pt-3">
                    <div className="w-6/12 pr-2 sm:pr-0">
                        <div className="flex gap-3">
                            <label className="font-bold text-sm pb-2">Margin</label>
                            <button onClick={() => setDeviceMargin("pc")}>

                                <IconWidget stylesEmotionCss="" name="desktop" color={`${deviceMargin === "pc" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>
                            </button>
                            <button onClick={() => setDeviceMargin("tablet")}>
                              <IconWidget stylesEmotionCss="" name="tablet" color={`${deviceMargin === "tablet" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>

                            </button>
                            <button onClick={() => setDeviceMargin("movil")}>
                              <IconWidget stylesEmotionCss="" name="mobile" color={`${deviceMargin === "mobile" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>
                            </button>
                        </div>
                        <div>
                            {deviceMargin === "pc" && (<>
                                    <div className="flex flex-wrap md:flex-nowrap">
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Top</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.pc[0]} onChange={(e) => handleDataInput(e)} type="number" name="margin_top_pc" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Right</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.pc[1]} onChange={(e) => handleDataInput(e)} type="number" name="margin_right_pc" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.pc[2]} onChange={(e) => handleDataInput(e)} type="number" name="margin_bottom_pc" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Left</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.pc[3]} onChange={(e) => handleDataInput(e)} type="number" name="margin_left_pc" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                    </div>
                                </>)}
                            {deviceMargin === "tablet" && (<>
                                    <div className="flex flex-wrap md:flex-nowrap">
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Top</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.tablet[0]} onChange={(e) => handleDataInput(e)} type="number" name="margin_top_tablet" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Right</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.tablet[1]} onChange={(e) => handleDataInput(e)} type="number" name="margin_right_tablet" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.tablet[2]} onChange={(e) => handleDataInput(e)} type="number" name="margin_bottom_tablet" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Left</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.tablet[3]} onChange={(e) => handleDataInput(e)} type="number" name="margin_left_tablet" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                    </div>
                                </>)}
                            {deviceMargin === "movil" && (<>
                                    <div className="flex flex-wrap md:flex-nowrap">
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Top</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.movil[0]} onChange={(e) => handleDataInput(e)} type="number" name="margin_top_movil" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Right</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.movil[1]} onChange={(e) => handleDataInput(e)} type="number" name="margin_right_movil" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.movil[2]} onChange={(e) => handleDataInput(e)} type="number" name="margin_bottom_movil" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Left</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.margin.movil[3]} onChange={(e) => handleDataInput(e)} type="number" name="margin_left_movil" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                    </div>
                                </>)}
                        </div>
                    </div>
                    <div className="w-6/12 pr-2 sm:pr-0">
                        <div className="flex gap-3 ">
                            <label className="font-bold text-sm pb-2">
                                Padding
                            </label>
                            <button onClick={() => setDevicePadding("pc")}>
                                <IconWidget stylesEmotionCss="" name="desktop" color={`${devicePadding === "pc" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>

                            </button>
                            <button onClick={() => setDevicePadding("tablet")}>
                             <IconWidget stylesEmotionCss="" name="tablet" color={`${devicePadding === "tablet" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>
                            </button>
                            <button onClick={() => setDevicePadding("movil")}>
                             <IconWidget stylesEmotionCss="" name="mobile" color={`${devicePadding === "movil" ? "#5F5F5F" : "#E4E4E4"}`} size={16}/>
                            </button>
                        </div>
                        <div>
                            {devicePadding === "pc" && (<>
                                    <div className="flex flex-wrap md:flex-nowrap">
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Top</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.pc[0]} onChange={(e) => handleDataInput(e)} type="number" name="padding_top_pc" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Right</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.pc[1]} onChange={(e) => handleDataInput(e)} type="number" name="padding_right_pc" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.pc[2]} onChange={(e) => handleDataInput(e)} type="number" name="padding_bottom_pc" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Left</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.pc[3]} onChange={(e) => handleDataInput(e)} type="number" name="padding_left_pc" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                    </div>
                                </>)}
                            {devicePadding === "tablet" && (<>
                                    <div className="flex flex-wrap md:flex-nowrap">
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Top</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.tablet[0]} onChange={(e) => handleDataInput(e)} type="number" name="padding_top_tablet" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Right</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.tablet[1]} onChange={(e) => handleDataInput(e)} type="number" name="padding_right_tablet" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.tablet[2]} onChange={(e) => handleDataInput(e)} type="number" name="padding_bottom_tablet" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Left</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.tablet[3]} onChange={(e) => handleDataInput(e)} type="number" name="padding_left_tablet" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                    </div>
                                </>)}
                            {devicePadding === "movil" && (<>
                                    <div className="flex flex-wrap md:flex-nowrap">
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Top</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.movil[0]} onChange={(e) => handleDataInput(e)} type="number" name="padding_top_movil" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Right</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.movil[1]} onChange={(e) => handleDataInput(e)} type="number" name="padding_right_movil" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Bottom</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.movil[2]} onChange={(e) => handleDataInput(e)} type="number" name="padding_bottom_movil" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                        <div className="relative">
                                        <small className="block text-[10px] uppercase pt-1">Left</small>
                                            <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" value={inputsJson.padding.movil[3]} onChange={(e) => handleDataInput(e)} type="number" name="padding_left_movil" id=""/>
                                            <span className="absolute right-0 bottom-0 bg-slate-300 p-2 rounded-xl text-xs">
                                                px
                                            </span>
                                        </div>
                                    </div>
                                </>)}
                       </div>
                    </div>
                </div>
          </div>
        </>);
}
export default SectionLabelAdvancedForm;
