import {useState} from 'react';
import SectionButtonForm from './SubFormsAdvanced/SectionButtonFom';

function FormGeneralAdvanced({dataJson, changeSelectionButtonProperties}){

    function handleSubmit(e){
        e.preventDefault()
    }

    function updateSectionButtonProperties(id, propertyKey, newValue) {
        changeSelectionButtonProperties(id, propertyKey, newValue);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <SectionButtonForm dataJson={dataJson} handleProperties={updateSectionButtonProperties}/>
            </form>
        </>
    )
}


export default FormGeneralAdvanced;
