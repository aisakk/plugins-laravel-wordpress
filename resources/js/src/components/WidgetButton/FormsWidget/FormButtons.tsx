import React, {useState} from "react";
import IconWidget from "../../IconWidget";

function FormButtons({ createButton, deleteButton, json, changeForm, stateForm, searchFormArea }) {
    const [showSelect, setShowSelect] = useState(null)

    function handleSelectAndSearch(e){
        let { dataset } = e.currentTarget
        let { value:dataValue} = dataset
        setShowSelect(dataValue)
        searchFormArea(e)
    }
    return (<>
         <form onSubmit={createButton} className="flex flex-col w-11/12 md:w-8/12 relative p-3">
            <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                <div>
                    <h6 className="text-lg font-bold">Area</h6>
                     <p className="text-xs">Select the area you want to modify</p>
                </div>
            </div>
            <div className="container-area flex gap-2">
                <div data-value={null} onClick={(e)=> handleSelectAndSearch(e)} className="container-area cursor-pointer flex flex-col items-center justify-center">
                        <div className={`area flex bg-white items-center relative ${showSelect == null ? 'border-green-200' : 'border-slate-50'} w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                          <span className="w-4 h-4 bg-black block rounded-md"></span>
                        </div>
                        <span>All</span>
                 </div>
                <div data-value="left_top" onClick={(e)=> handleSelectAndSearch(e)} className="container-area cursor-pointer flex flex-col items-center justify-center">
                        <div className={`area flex bg-white relative ${showSelect == "left_top" ? 'border-green-200' : 'border-slate-50'} w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                          <span className="w-4 h-4 bg-black block rounded-md"></span>
                        </div>
                        <span>Left Top</span>
                 </div>
                 <div data-value="left_mid" onClick={(e)=> handleSelectAndSearch(e)} className="container-area cursor-pointer flex flex-col items-center justify-center">
                        <div className={`area flex items-center bg-white ${showSelect == "left_mid" ? 'border-green-200' : 'border-slate-50'} relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                          <span className="w-4 h-4 bg-black block rounded-md"></span>
                        </div>
                        <span>Left Mid</span>
                 </div>
                 <div data-value="left_bottom" onClick={(e)=> handleSelectAndSearch(e)} className="container-area cursor-pointer flex flex-col items-center justify-center">
                        <div className={`area flex bg-white relative w-full h-20 ${showSelect == "left_bottom" ? 'border-green-200' : 'border-slate-50'}  items-end  border-2 rounded-lg p-2 shadow-md`}>
                          <span className="w-4 h-4 bg-black block rounded-md"></span>
                        </div>
                        <span>Left Bottom</span>
                 </div>
                 <div data-value="right_top" onClick={(e)=> handleSelectAndSearch(e)} className="container-area cursor-pointer flex flex-col items-center justify-center">
                        <div className={`area flex justify-end ${showSelect == "right_top" ? 'border-green-200' : 'border-slate-50'} bg-white relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                          <span className="w-4 h-4 bg-black block rounded-md"></span>
                        </div>
                        <span>Right Top</span>
                 </div>
                 <div data-value="right_mid" onClick={(e)=> handleSelectAndSearch(e)} className="container-area cursor-pointer flex flex-col items-center justify-center">
                        <div className={`area flex justify-end items-center ${showSelect == "right_mid" ? 'border-green-200' : 'border-slate-50'} bg-white relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                          <span className="w-4 h-4 bg-black block rounded-md"></span>
                        </div>
                        <span>Right Mid</span>
                 </div>
                 <div data-value="right_bottom" onClick={(e)=> handleSelectAndSearch(e)} className="container-area cursor-pointer flex flex-col items-center justify-center">
                        <div className={`area flex bg-white relative ${showSelect == "right_bottom" ? 'border-green-200' : 'border-slate-50'} w-full h-20  justify-end items-end  border-2 rounded-lg p-2 shadow-md`}>
                          <span className="w-4 h-4 bg-black block rounded-md"></span>
                        </div>
                        <span>Right Bottom</span>
                 </div>
            </div>
                <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                    <div className="flex flex-col">
                        <label htmlFor="">Buttons</label>
                        <span>Select the area you want to modify</span>
                     </div>

                     <button type="submit" className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center bg-white hover:bg-slate-100 text-slate-600 w-auto border-slate-300 py-2 px-6 text-sm rounded-2xl">
                         Add New
                    </button>
                </div>
            </form>
            <div>
                {json.contentButtons.map((json) => (<div key={json.id} className="flex justify-between w-11/12 md:w-8/12">
                        {json.nombreButton}{" "}
                        <button className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center bg-red-100 hover:bg-red-200 text-red-400 w-auto border-red-100 p-2 text-sm rounded-2xl" onClick={() => deleteButton(json.id)}>
                            <IconWidget stylesEmotionCss="" name="trash" size={16} color="red"/>
                        </button>
                    </div>))}
                <div className="flex flex-col pt-4">
                  <label className="text-xs font-bold">Edition type</label>
                  <div className="flex gap-3 pt-3">
                     <button onClick={() => changeForm("basic")} className={`${stateForm === 'basic' ? "bg-blue-100 text-blue-400 uppercase text-xs font-bold border border-solid border-blue-100 px-4 py-2 rounded-2xl" : "bg-white text-slate-800 uppercase text-xs font-bold border border-solid border-slate-300 px-4 py-2 rounded-2xl"}`}>Basic</button>
                     <button onClick={() => changeForm("advanced")} className={`${stateForm === "advanced" ? "bg-blue-100 text-blue-400 uppercase text-xs font-bold border border-solid border-blue-100 px-4 py-2 rounded-2xl" : "bg-white text-slate-800 uppercase text-xs font-bold border border-solid border-slate-300 px-4 py-2 rounded-2xl"}`}>Advance</button>
                  </div>
                </div>
            </div>
        </>);
}
export default FormButtons;
