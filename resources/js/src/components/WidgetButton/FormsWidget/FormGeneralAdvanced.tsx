import {useState} from 'react';
import SectionButtonAdvancedForm from './SubFormsAdvanced/SectionButtonAdvancedFom';
import SectionLabelAdvancedForm from './SubFormsAdvanced/SectionLabelAdvancedForm';
import SectionIconAdvancedForm from './SubFormsAdvanced/SectionIconAdvancedForm';
import SectionTemplateForm from './SubFormsAdvanced/SectionTemplateForm';

function FormGeneralAdvanced({dataJson, changeSelectionButtonProperties, changeSelectionLabelProperties, changeSelectionIconProperties, changeSelectionTemplateProperties }){

    function handleSubmit(e){
        e.preventDefault()
    }

    function updateSectionButtonProperties(id, propertyKey, newValue) {
        changeSelectionButtonProperties(id, propertyKey, newValue);
    }
    function updateSectionLabelProperties(id, propertyKey, newValue) {
        changeSelectionLabelProperties(id, propertyKey, newValue);
    }

    function updateSectionIconProperties(id, propertyKey, newValue){
        changeSelectionIconProperties(id, propertyKey, newValue)
    }

    function updateSectionTemplateProperties(id, propertyKey, newValue){
        changeSelectionTemplateProperties(id, propertyKey, newValue)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {<SectionTemplateForm dataJson={dataJson} handleProperties={updateSectionTemplateProperties}/>}
                {/*<SectionButtonForm dataJson={dataJson} handleProperties={updateSectionButtonProperties}/> */}
                {/*<SectionLabelForm dataJson={dataJson} handleProperties={updateSectionLabelProperties}/> */}
                {/*<SectionIconForm dataJson={dataJson} handleProperties={updateSectionIconProperties}/>*/}
            </form>
        </>
    )
}


export default FormGeneralAdvanced;
