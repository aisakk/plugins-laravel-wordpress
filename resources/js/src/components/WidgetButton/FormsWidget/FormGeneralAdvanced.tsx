import SectionButtonAdvancedForm from "./SubFormsAdvanced/SectionButtonAdvancedFom";
import SectionLabelAdvancedForm from "./SubFormsAdvanced/SectionLabelAdvancedForm";
import SectionIconAdvancedForm from "./SubFormsAdvanced/SectionIconAdvancedForm";
import SectionTemplateForm from "./SectionTemplateForm";
import IconWidget from "../../IconWidget";
import SectionVisibleTrash from './SectionVisibleTrash';
function FormGeneralAdvanced({
    dataJson,
    deleteButton,
    changeSelectionButtonProperties,
    changeSelectionLabelProperties,
    changeSelectionIconProperties,
    changeSelectionTemplateProperties,
}) {
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
    function handleDeleteButtonClick() {
        deleteButton(dataJson.id);
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-full  bg-white shadow-xl p-6 rounded-xl relative"
            >
                    <SectionVisibleTrash dataJson={dataJson} handleProperties={updateSectionTemplateProperties} deleteButton={deleteButton}/>

                    <SectionTemplateForm
                        dataJson={dataJson}
                        handleProperties={updateSectionTemplateProperties}
                    />
                    <SectionButtonAdvancedForm
                        dataJson={dataJson}
                        handleProperties={updateSectionButtonProperties}
                    />
                    <SectionLabelAdvancedForm
                        dataJson={dataJson}
                        handleProperties={updateSectionLabelProperties}
                    />
                    <SectionIconAdvancedForm
                        dataJson={dataJson}
                        handleProperties={updateSectionIconProperties}
                    />

            </form>
        </>
    );
}
export default FormGeneralAdvanced;
