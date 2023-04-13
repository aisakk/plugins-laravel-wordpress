import React, {useState} from 'react'


function SelectPositionButton({handlePositionChange}){
    const [inputJson, setInputJson] = useState({
        position: 'left_top',
    })
    function onPositionChange(e) {
        setInputJson((prevState)=>({
            ...prevState,
            position: e.target.value
        }))
        handlePositionChange(e.target.name, e.target.value, );
    }

    return(
        <select
            className="bg-white text-left rounded-xl border border-slate-200 p-2 px-4 text-xs w-8/12"
            name="position"
            value={`${inputJson.position}`}
            onChange={onPositionChange}>
            <option value="left_top">Left Top</option>
            <option value="left_mid">Left Mid</option>
            <option value="left_bottom">Left Bottom</option>
            <option value="right_top">Right Top</option>
            <option value="right_mid">Right Mid</option>
            <option value="right_bottom">Right Bottom</option>
        </select>
    )
}

export default SelectPositionButton;
