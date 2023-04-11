import SectionIconBasicForm from './SubFormBasic/SectionIconBasicForm';
import SectionTemplateForm from './SectionTemplateForm';
import SectionButtonBasicForm from './SubFormBasic/SectionButtonBasicForm';
import SectionLabelBasicForm from './SubFormBasic/SectionLabelBasicForm';
import IconWidget from '../../IconWidget';
function FormGeneralBasic({ dataJson, deleteButton, changeSelectionTemplateProperties, changeSelectionButtonPropertiesBasic, changeSelectionLabelPropertiesBasic, changeSelectionIconPropertiesBasic }) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    function updateSectionIconPropertiesBasic(id, propertyKey, newValue) {
        changeSelectionIconPropertiesBasic(id, propertyKey, newValue);
    }
    function updateSectionButtonPropertiesBasic(id, propertyKey, newValue) {
        changeSelectionButtonPropertiesBasic(id, propertyKey, newValue);
    }
    function updateSectionLabelPropertiesBasic(id, propertyKey, newValue) {
        changeSelectionLabelPropertiesBasic(id, propertyKey, newValue);
    }
    function updateSectionTemplateProperties(id, propertyKey, newValue) {
        changeSelectionTemplateProperties(id, propertyKey, newValue);
    }
    return (<>
            <form onSubmit={handleSubmit} className='w-7/12 md:w-7/12 bg-white shadow-xl p-6 rounded-xl relative'>
                 <div className='flex justify-between'>
                    <div className='flex justify-between'>
                        <strong>{dataJson.nombreButton}</strong>

                    </div>
                    <button
                            className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center bg-red-100 hover:bg-red-200 text-red-400 w-auto border-red-100 p-2 text-sm rounded-2xl"
                            onClick={() => deleteButton(dataJson.id)}>
                                <IconWidget stylesEmotionCss="" name="trash" size={16} color="red" />
                        </button>
                 </div>
                <SectionTemplateForm dataJson={dataJson} handleProperties={updateSectionTemplateProperties}/>
                <SectionButtonBasicForm dataJson={dataJson} handleProperties={updateSectionButtonPropertiesBasic}/>
                <SectionLabelBasicForm dataJson={dataJson} handleProperties={updateSectionLabelPropertiesBasic}/>
                <SectionIconBasicForm dataJson={dataJson} handleProperties={updateSectionIconPropertiesBasic}/>
            </form>
        </>);
}
export default FormGeneralBasic;
