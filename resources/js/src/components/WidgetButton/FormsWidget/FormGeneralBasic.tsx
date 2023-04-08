
import {useState} from 'react';
import SectionTemplateForm from './SubFormsAdvanced/SectionTemplateForm';
import SectionButtonBasicForm from './SubFormBasic/SectionButtonBasicForm';
import SectionIconBasicForm from './SubFormBasic/SectionIconBasicForm';
import SectionLabelBasicForm from './SubFormBasic/SectionLabelBasicForm';

function FormGeneralBasic({dataJson, changeSelectionButtonPropertiesBasic, changeSelectionLabelPropertiesBasic, changeSelectionIconPropertiesBasic}){
    function handleSubmit(e){
        e.preventDefault()
    }
/*     function updateSectionButtonPropertiesBasic(id, propertyKey, newValue) {
        changeSelectionButtonPropertiesBasic(id, propertyKey, newValue);
    } */

/*    function updateSectionLabelPropertiesBasic(id, propertyKey, newValue) {
        changeSelectionLabelPropertiesBasic(id, propertyKey, newValue);
    } */

    function updateSectionIconPropertiesBasic(id, propertyKey, newValue){
        changeSelectionIconPropertiesBasic(id, propertyKey, newValue)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {/*<SectionTemplateForm dataJson={dataJson} handleProperties={updateSectionTemplateProperties}/> */}
                {/* <SectionButtonBasicForm dataJson={dataJson} handleProperties={updateSectionButtonPropertiesBasic} /> */}
                {/* <SectionLabelBasicForm dataJson={dataJson} handleProperties={updateSectionLabelPropertiesBasic} /> */ }
                {<SectionIconBasicForm dataJson={dataJson} handleProperties={updateSectionIconPropertiesBasic} /> }
            </form>
        </>
    )
}

export default FormGeneralBasic;
