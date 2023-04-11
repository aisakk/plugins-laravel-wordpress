import SectionButtonAdvancedForm from './SubFormsAdvanced/SectionButtonAdvancedFom';
import SectionLabelAdvancedForm from './SubFormsAdvanced/SectionLabelAdvancedForm';
import SectionIconAdvancedForm from './SubFormsAdvanced/SectionIconAdvancedForm';
import SectionTemplateForm from './SectionTemplateForm';
import IconWidget from '../../IconWidget';
function FormGeneralAdvanced({ dataJson, deleteButton,changeSelectionButtonProperties, changeSelectionLabelProperties, changeSelectionIconProperties, changeSelectionTemplateProperties }) {
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
    function handleDeleteButtonClick (){
        deleteButton(dataJson.id)
    }
    return (<>
            <form onSubmit={handleSubmit} className='w-11/12 md:w-8/12 bg-white shadow-xl p-6 rounded-xl relative'>
                  <div className='flex justify-between'>
                    <strong>{dataJson.nombreButton}</strong>
                    <button
                        className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center bg-red-100 hover:bg-red-200 text-red-400 w-auto border-red-100 p-2 text-sm rounded-2xl"
                         onClick={() => deleteButton(dataJson.id)}>
                            <IconWidget stylesEmotionCss="" name="trash" size={16} color="red" />
                    </button>
                </div>
                {<SectionTemplateForm dataJson={dataJson} handleProperties={updateSectionTemplateProperties}/>}
                {<SectionButtonAdvancedForm dataJson={dataJson} handleProperties={updateSectionButtonProperties}/>}
                {<SectionLabelAdvancedForm dataJson={dataJson} handleProperties={updateSectionLabelProperties}/>}
                {<SectionIconAdvancedForm dataJson={dataJson} handleProperties={updateSectionIconProperties}/>}
            </form>
        </>);
}
export default FormGeneralAdvanced;
