import SectionIconBasicForm from './SubFormBasic/SectionIconBasicForm';
import SectionTemplateForm from './SectionTemplateForm';
import SectionButtonBasicForm from './SubFormBasic/SectionButtonBasicForm'
import SectionLabelBasicForm from './SubFormBasic/SectionLabelBasicForm'

function FormGeneralBasic({ dataJson, removeForm,changeSelectionTemplateProperties, changeSelectionButtonPropertiesBasic, changeSelectionLabelPropertiesBasic, changeSelectionIconPropertiesBasic }) {
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
                 <div className='flex'>
                    <div>
                        <strong>{dataJson.nombreButton}</strong>
                    </div>
                    <div>
                        <button onClick={()=>removeForm(dataJson.id)}> Delete</button>
                    </div>
                 </div>
                <SectionTemplateForm dataJson={dataJson} handleProperties={updateSectionTemplateProperties}/>
                <SectionButtonBasicForm dataJson={dataJson} handleProperties={updateSectionButtonPropertiesBasic}/>
                <SectionLabelBasicForm dataJson={dataJson} handleProperties={updateSectionLabelPropertiesBasic}/>
                <SectionIconBasicForm dataJson={dataJson} handleProperties={updateSectionIconPropertiesBasic}/>
            </form>
        </>);
}
export default FormGeneralBasic;
