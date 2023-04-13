import React, {useState} from 'react';
import IconWidget from '../../IconWidget';

function SectionVisibleTrash({dataJson, handleProperties, deleteButton}){

    const [inputJson, setInputsJson] = useState({
        selectFormChecked: dataJson.selectFormChecked,
        hiddenPreviewChecked: dataJson.hiddenPreviewChecked,
        visiblityButtonPreview: dataJson.visiblityButtonPreview,
    })
    function handleDataInput(e) {
        const { name, value, checked, dataset } = e.currentTarget;
        const { value: dataValue, name:dataName } = dataset;
        const newBool = dataValue == "true" ? "false" : "true"
        setInputsJson((prevState)=>{
            let newState = {...prevState}
            switch (name || dataName) {
                case "selectFormChecked":
                    newState.selectFormChecked = checked ? "true" : "false"
                    break;
                case "hiddenPreviewChecked":
                    newState.hiddenPreviewChecked = newBool
                    break;
                case "visiblityButtonPreview":
                    newState.visiblityButtonPreview = value
                    break;
                default:
                    break;
            }
            handleProperties(dataJson.id, name || dataName, newState);
            return newState
        })


      }

    return(
        <div>
               <div className='flex justify-between pb-2'>
                    <div className=''>
                       <input type="checkbox" name="selectFormChecked" checked={JSON.parse(inputJson.selectFormChecked)}  value={JSON.parse(inputJson.selectFormChecked)} onClick={(e)=> handleDataInput(e)}/>
                        <strong>{dataJson.nombreButton}</strong>
                    </div>
                    <div className="flex">
                        <select name="visiblityButtonPreview" id="" value={inputJson.visiblityButtonPreview} onChange={(e)=> handleDataInput(e)}>
                                <option value="pc">Desktop</option>
                                <option value="tablet">Tablet</option>
                                <option value="movil">Movil</option>
                                <option value="all">All</option>
                        </select>
                        <button data-name="hiddenPreviewChecked" data-value={JSON.parse(inputJson.hiddenPreviewChecked)} className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center
                     bg-blue-100 hover:bg-blue-200 text-blue-400 w-auto border-blue-100 p-2 text-sm rounded-2xl"
                        onClick={(e) => {
                            handleDataInput(e)
                        }}
                                    >
                            <IconWidget
                                stylesEmotionCss=""
                                name="eye"
                                size={16}
                                color="#60a5fab3"
                            />
                        </button>
                        <button
                            className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center bg-red-100 hover:bg-red-200 text-red-400 w-auto border-red-100 p-2 text-sm rounded-2xl"
                            onClick={() => deleteButton(dataJson.id)}
                        >
                            <IconWidget
                                stylesEmotionCss=""
                                name="trash"
                                size={16}
                                color="red"
                            />
                        </button>
                    </div>
                 </div>
        </div>
    )
}

export default SectionVisibleTrash;
