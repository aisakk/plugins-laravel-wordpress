import React, { useEffect } from "react";
import IconWidget from "../../IconWidget";

function FormButtons({ createButton, deleteButton, json, changeForm, stateForm }) {
    return (
        <>
            <form onSubmit={createButton} className="flex flex-col w-11/12 md:w-8/12 relative">
                <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                    <div className="flex flex-col">
                        <label htmlFor="">Buttons</label>
                        <span>Select the area you want to modify</span>
                     </div>

                     <button
                    type="submit"
                    className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center bg-white hover:bg-slate-100 text-slate-600 w-auto border-slate-300 py-2 px-6 text-sm rounded-2xl"
                >
                    Add New
                </button>
                </div>


            </form>
            <div>
                {json.contentButtons.map((json) => (
                    <div key={json.id} className="flex justify-between w-11/12 md:w-8/12">
                        {json.nombreButton}{" "}
                        <button
                        className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center bg-red-100 hover:bg-red-200 text-red-400 w-auto border-red-100 p-2 text-sm rounded-2xl"
                         onClick={() => deleteButton(json.id)}>
                            <IconWidget stylesEmotionCss="" name="trash" size={16} color="red" />
                        </button>
                    </div>
                ))}
                <div className="flex flex-col pt-4">
                  <label className="text-xs font-bold">Edition type</label>
                  <div className="flex gap-3 pt-3">
                     <button onClick={()=> changeForm("basic")} className={`${stateForm ==='basic' ? "bg-blue-100 text-blue-400 uppercase text-xs font-bold border border-solid border-blue-100 px-4 py-2 rounded-2xl": "bg-white text-slate-800 uppercase text-xs font-bold border border-solid border-slate-300 px-4 py-2 rounded-2xl" }`}>Basic</button>
                     <button onClick={()=> changeForm("advanced")} className={`${stateForm === "advanced"? "bg-blue-100 text-blue-400 uppercase text-xs font-bold border border-solid border-blue-100 px-4 py-2 rounded-2xl" : "bg-white text-slate-800 uppercase text-xs font-bold border border-solid border-slate-300 px-4 py-2 rounded-2xl"}`}>Advance</button>
                  </div>
                </div>
            </div>
        </>
    );
}
export default FormButtons;
