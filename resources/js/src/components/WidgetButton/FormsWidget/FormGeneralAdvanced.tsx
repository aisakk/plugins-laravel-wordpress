import SectionButtonAdvancedForm from './SubFormsAdvanced/SectionButtonAdvancedFom';
import SectionLabelAdvancedForm from './SubFormsAdvanced/SectionLabelAdvancedForm';
import SectionIconAdvancedForm from './SubFormsAdvanced/SectionIconAdvancedForm';
import SectionTemplateForm from './SectionTemplateForm';
function FormGeneralAdvanced({ dataJson, changeSelectionButtonProperties, changeSelectionLabelProperties, changeSelectionIconProperties, changeSelectionTemplateProperties }) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    function updateSectionButtonProperties(id, propertyKey, newValue) {
        changeSelectionButtonProperties(id, propertyKey, newValue);
    }
    function updateSectionLabelProperties(id, propertyKey, newValue) {
        changeSelectionLabelProperties(id, propertyKey, newValue);
    }
    function updateSectionIconProperties(id, propertyKey, newValue) {
        changeSelectionIconProperties(id, propertyKey, newValue);
    }
    function updateSectionTemplateProperties(id, propertyKey, newValue) {
        changeSelectionTemplateProperties(id, propertyKey, newValue);
    }
    return (<>
            <form onSubmit={handleSubmit} className='w-11/12 md:w-8/12 bg-white shadow-xl p-6 rounded-xl relative'>
                {<SectionTemplateForm dataJson={dataJson} handleProperties={updateSectionTemplateProperties}/>}
                {<SectionButtonAdvancedForm dataJson={dataJson} handleProperties={updateSectionButtonProperties}/>}
                {<SectionLabelAdvancedForm dataJson={dataJson} handleProperties={updateSectionLabelProperties}/>}
                {<SectionIconAdvancedForm dataJson={dataJson} handleProperties={updateSectionIconProperties}/>}
            </form>
        </>);
}
export default FormGeneralAdvanced;
