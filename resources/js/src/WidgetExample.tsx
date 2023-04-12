import React, { useState } from 'react';
import WidgetPreviewButton from './components/WidgetButton/WidgetPeviewButton';
import FormButtons from './components/WidgetButton/FormsWidget/FormButtons';
import FormGeneralAdvanced from './components/WidgetButton/FormsWidget/FormGeneralAdvanced';
import FormGeneralBasic from './components/WidgetButton/FormsWidget/FormGeneralBasic';
import SelectPositionButton from './components/WidgetButton/FormsWidget/SelectPositionButton';

interface BorderRadius {
    pc: string[];
    tablet: string[];
    movil: string[];
  }

  interface Padding {
    pc: string[];
    tablet: string[];
    movil: string[];
  }

  interface Margin {
    pc: string[];
    tablet: string[];
    movil: string[];
  }

  interface ButtonDesign {
    backgroundColor: string;
    borderRadius: BorderRadius;
    padding: Padding;
    margin: Margin;
  }

  interface LabelDesign {
    backgroundColor: string;
    color: string;
    fontFamily: string;
    borderRadius: BorderRadius;
    fontSize: {
      pc: string[];
      tablet: string[];
      movil: string[];
    };
    padding: Padding;
    margin: Margin;
  }

  interface IconDesign {
    color: string;
    iconSize: string;
    fontSize: {
      pc: string[];
      tablet: string[];
      movil: string[];
    };
    padding: Padding;
    margin: Margin;
  }

  interface ContainerDesign {
    position: string;
    top: string;
    right: string;
    left: string;
    bottom: string;
  }

  interface CssDesign {
    buttonDesign: ButtonDesign;
    labelDesign: LabelDesign;
    iconDesign: IconDesign;
    containerDesign: ContainerDesign;
  }

  interface ContentButton {
    id: string;
    nombreButton: string;
    labelText: string;
    facebook: string;
    whatsapp: string;
    instagram: string;
    email: string;
    phone: string;
    link: string;
    icon: string;
    position: string,
    hiddenPreviewChecked: string,
    selectFormChecked: string,
    visiblityButtonPreview:string,
    cssDesign: CssDesign;
  }

  interface JsonData {
    contentButtons: ContentButton[];
  }

interface Button {
    id: number;
    nombre: string;
  }

let jsonData = {
    "contentButtons": [{
            "id": "0",
            "nombreButton": "Button 0",
            "labelText": "Contact us",
            "facebook": "",
            "whatsapp": "",
            "instagram": "",
            "email": "",
            "phone": "",
            "link": "",
            "icon": "whatsapp",
            "position": "left_top",
            "hiddenPreviewChecked": "true",
            "selectFormChecked": "false",
            "visiblityButtonPreview":"all",
            "cssDesign": {
                "buttonDesign": {
                    "backgroundColor": "red",
                    "borderRadius": {
                        "pc": ["05", "05", "08", "08"],
                        "tablet": ["10", "0", "0", "0"],
                        "movil": ["15", "0", "0", "0"]
                    },
                    "padding": {
                        "pc": ["05", "0", "0", "00"],
                        "tablet": ["10", "0", "0", "0"],
                        "movil": ["15", "0", "0", "0"]
                    },
                    "margin": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    }
                },
                "labelDesign": {
                    "backgroundColor": "",
                    "color": "",
                    "fontFamily": "",
                    "borderRadius": {
                        "pc": ["05", "05", "08", "08"],
                        "tablet": ["10", "0", "0", "0"],
                        "movil": ["15", "0", "0", "0"]
                    },
                    "fontSize": {
                        "pc": ["20"],
                        "tablet": ["20"],
                        "movil": ["24"]
                    },
                    "padding": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    },
                    "margin": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    }
                },
                "iconDesign": {
                    "color": "white",
                    "iconSize": "30",
                    "fontSize": {
                        "pc": ["0"],
                        "tablet": ["0"],
                        "movil": ["0"]
                    },
                    "padding": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    },
                    "margin": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    }
                },
                "containerDesign": {
                    "position": "",
                    "top": "",
                    "right": "",
                    "left": "",
                    "bottom": ""
                }
            }
    }]
};
function WidgetExamples() {
    const [json, setJson] = useState<JsonData>(jsonData);
    const [button, setButton] = useState<Button[]>([]);
    const [showAdvancedForm, setShowAdvancedForm] = useState("basic");
    const [showFormArea, setShowFormArea] = useState("left_mid");
    const [selectedPosition, setSelectedPosition] = useState(null);

    function addButton(e) {
        e.preventDefault();
        const nuevoBoton = { id: button.length + 1, nombre: `Button ${button.length + 1}` };
        let formatDataJson = {
            "id": `${nuevoBoton.id}`,
            "nombreButton": `${nuevoBoton.nombre}`,
            "labelText": "test",
            "facebook": "",
            "whatsapp": "",
            "instagram": "",
            "email": "",
            "phone": "",
            "link": "",
            "icon": "whatsapp",
            "position": "left_top",
            "hiddenPreviewChecked": "true",
            "selectFormChecked": "false",
            "visiblityButtonPreview":"all",
            "cssDesign": {
                "buttonDesign": {
                    "backgroundColor": "",
                    "borderRadius": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    },
                    "padding": {
                        "pc": ["0", "0", "0", "00"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    },
                    "margin": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    }
                },
                "labelDesign": {
                    "backgroundColor": "",
                    "color": "",
                    "fontFamily": "",
                    "borderRadius": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    },
                    "fontSize": {
                        "pc": ["20"],
                        "tablet": ["20"],
                        "movil": ["20"]
                    },
                    "padding": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    },
                    "margin": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    }
                },
                "iconDesign": {
                    "color": "white",
                    "iconSize": "30",
                    "fontSize": {
                        "pc": ["20"],
                        "tablet": ["20"],
                        "movil": ["20"]
                    },
                    "padding": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    },
                    "margin": {
                        "pc": ["0", "0", "0", "0"],
                        "tablet": ["0", "0", "0", "0"],
                        "movil": ["0", "0", "0", "0"]
                    }
                },
                "containerDesign": {
                    "position": "",
                    "top": "",
                    "right": "",
                    "left": "",
                    "bottom": ""
                }
            }
        };
        setJson((prevState) => ({
            ...prevState,
            contentButtons: [...prevState.contentButtons, formatDataJson],
        }));
        setButton([...button, nuevoBoton]);
    }
    function removeButton(id) {
        setButton(button.filter((boton) => boton.id !== id));
        setJson((prevState) => ({
            ...prevState,
            contentButtons: prevState.contentButtons.filter((item) => item.id !== `${id}`),
        }));
    }
    function changeSelectionButtonProperties(id, name, inputsJson) {
        setJson((prevState) => {
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            if (name === "backgroundColor") {
                newDataJson.contentButtons[objIndex].cssDesign.buttonDesign.backgroundColor = inputsJson.backgroundColor;
            }
            else {
                const [property, direction, device] = name.split("_");
                const directionIndex = { top: 0, right: 1, bottom: 2, left: 3 };
                newDataJson.contentButtons[objIndex].cssDesign.buttonDesign[property][device][directionIndex[direction]] = inputsJson[property][device][directionIndex[direction]];
            }
            return newDataJson;
        });
    }
    function changeSelectionLabelProperties(id, name, inputsJson) {
        const [property, ...rest] = name.split("_");
        const [direction, device] = rest;
        const directionIndex = { top: 0, right: 1, bottom: 2, left: 3 };
        setJson((prevState) => {
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            if (property === "backgroundColor" || property === "color" || property === "fontFamily") {
                newDataJson.contentButtons[objIndex].cssDesign.labelDesign[property] = inputsJson[property];
            }
            else {
                if (property === "fontSize") {
                    newDataJson.contentButtons[objIndex].cssDesign.labelDesign[property][device] = inputsJson[property][device];
                }
                else {
                    newDataJson.contentButtons[objIndex].cssDesign.labelDesign[property][device][directionIndex[direction]] = inputsJson[property][device][directionIndex[direction]];
                }
            }
            return newDataJson;
        });
    }
    function changeSelectionIconProperties(id, name, inputsJson) {
        const [property, ...rest] = name.split("_");
        const [direction, device] = rest;
        const directionIndex = { top: 0, right: 1, bottom: 2, left: 3 };
        setJson((prevState) => {
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            if (property === "color" || property === "iconSize") {
                newDataJson.contentButtons[objIndex].cssDesign.iconDesign[property] = inputsJson[property];
            }
            else {
                if (property === "fontSize") {
                    newDataJson.contentButtons[objIndex].cssDesign.iconDesign[property][device] = inputsJson[property][device];
                }
                else {
                    newDataJson.contentButtons[objIndex].cssDesign.iconDesign[property][device][directionIndex[direction]] = inputsJson[property][device][directionIndex[direction]];
                }
            }
            return newDataJson;
        });
    }
    function changeSelectionTemplateProperties(id, name, inputsJson) {
        setJson((prevState) => {
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            newDataJson.contentButtons[objIndex][name] = inputsJson[name];
            return newDataJson;
        });
    }
    function generateLinktoIcon(id) {
        let objIndex = json.contentButtons.findIndex((obj) => obj.id === id);
        if (json.contentButtons[objIndex].whatsapp !== '') {
            return `https://api.whatsapp.com/send?phone=${json.contentButtons[objIndex].whatsapp}`;
        }
        if (json.contentButtons[objIndex].facebook !== '') {
            return ` https://www.facebook.com/${json.contentButtons[objIndex].facebook}`;
        }
        if (json.contentButtons[objIndex].instagram !== '') {
            return ` https://www.instagram.com/${json.contentButtons[objIndex].instagram}`;
        }
        if (json.contentButtons[objIndex].phone !== '') {
            return `tel:${json.contentButtons[objIndex].phone}`;
        }
        if (json.contentButtons[objIndex].email !== '') {
            return `mail:${json.contentButtons[objIndex].email}`;
        }
        if (json.contentButtons[objIndex].link !== '') {
            return `tel:${json.contentButtons[objIndex].link}`;
        }
    }
    function changeSelectionButtonPropertiesBasic(id, name, inputsJson) {
        setJson((prevState) => {
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            const property = name.split("_")[0];
            if (name === "backgroundColor") {
                newDataJson.contentButtons[objIndex].cssDesign.buttonDesign.backgroundColor = inputsJson.backgroundColor;
            }
            else {
                newDataJson.contentButtons[objIndex].cssDesign.buttonDesign[property] = inputsJson[property];
            }
            return newDataJson;
        });
    }
    function changeSelectionLabelPropertiesBasic(id, name, inputsJson) {
        setJson((prevState) => {
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            const property = name.split("_")[0];
            newDataJson.contentButtons[objIndex].cssDesign.labelDesign[property] = inputsJson[property];
            return newDataJson;
        });
    }
    function changeSelectionIconPropertiesBasic(id, name, inputsJson) {
        setJson((prevState) => {
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            const property = name.split("_")[0];
            newDataJson.contentButtons[objIndex].cssDesign.iconDesign[property] = inputsJson[property];
            return newDataJson;
        });
    }

    function changePosition(name, value){
        setJson((prevState)=>{
          let newStateJson = {...prevState}
          const objIndex = newStateJson.contentButtons
            .filter((item) => item.selectFormChecked === "true")
            .map((item) => item.id);

          if (objIndex.length !== 0){
            objIndex.forEach(id => {
              const obj = newStateJson.contentButtons.find((item) => item.id === id);
              if (obj !== undefined) {
                switch (value) {
                  case 'left_top':
                    obj.position = value;
                    obj.cssDesign.containerDesign.top = "0";
                    obj.cssDesign.containerDesign.left = "0";
                    obj.cssDesign.containerDesign.bottom = "";
                    obj.cssDesign.containerDesign.right = "";
                    break;
                  case 'left_mid':
                    obj.position = value;
                    obj.cssDesign.containerDesign.left = "0";
                    obj.cssDesign.containerDesign.top = "";
                    obj.cssDesign.containerDesign.bottom = "";
                    obj.cssDesign.containerDesign.right = "";
                    break;
                  case 'left_bottom':
                    obj.position = value;
                    obj.cssDesign.containerDesign.left = "0";
                    obj.cssDesign.containerDesign.top = "";
                    obj.cssDesign.containerDesign.bottom = "0";
                    obj.cssDesign.containerDesign.right = "";
                    break;
                  case 'right_top':
                    obj.position = value;
                    obj.cssDesign.containerDesign.top = "0";
                    obj.cssDesign.containerDesign.right = "0";
                    obj.cssDesign.containerDesign.bottom = "";
                    obj.cssDesign.containerDesign.left = "";
                    break;
                  case 'right_mid':
                    obj.position = value;
                    obj.cssDesign.containerDesign.right = "0";
                    obj.cssDesign.containerDesign.top = "";
                    obj.cssDesign.containerDesign.bottom = "";
                    obj.cssDesign.containerDesign.left = "";
                    break;
                  case 'right_bottom':
                    obj.position = value;
                    obj.cssDesign.containerDesign.right = "0";
                    obj.cssDesign.containerDesign.top = "";
                    obj.cssDesign.containerDesign.bottom = "0";
                    obj.cssDesign.containerDesign.left = "";
                    break;
                  default:
                    break;
                }
              }
            });
          }
          console.log(newStateJson)
          return newStateJson;
        });
      }

    function toggleFormType(string) {
        string === "basic" ? setShowAdvancedForm(string) : setShowAdvancedForm(string);
    }
    function searchFormAreaPosition(event){
       let { dataset } = event.currentTarget
       let { value:dataValue} = dataset
       setShowFormArea(dataValue)
       setSelectedPosition(dataValue)
    }

    function sendDataJson(e) {
        e.preventDefault();
    }

    return (<>

        <FormButtons searchFormArea={searchFormAreaPosition} createButton={addButton} deleteButton={removeButton} json={json} stateForm={showAdvancedForm} changeForm={toggleFormType}/>
        <SelectPositionButton handlePositionChange={changePosition}/>
        <div className='flex gap-3'>
            <div className="flex flex-col">
                {json.contentButtons.filter((item) => selectedPosition == null || item.position === selectedPosition).map((item, index) => {
                    return showAdvancedForm === "advanced" ?
                    (<><FormGeneralAdvanced key={index} dataJson={item} deleteButton={removeButton} changeSelectionButtonProperties={changeSelectionButtonProperties} changeSelectionLabelProperties={changeSelectionLabelProperties} changeSelectionIconProperties={changeSelectionIconProperties} changeSelectionTemplateProperties={changeSelectionTemplateProperties}/><br/> </>)
                    : (<><FormGeneralBasic  key={index} dataJson={item} deleteButton={removeButton} changeSelectionTemplateProperties={changeSelectionTemplateProperties} changeSelectionButtonPropertiesBasic={changeSelectionButtonPropertiesBasic} changeSelectionLabelPropertiesBasic={changeSelectionLabelPropertiesBasic} changeSelectionIconPropertiesBasic={changeSelectionIconPropertiesBasic}/> <br /></>);
                })}
            </div>
            <div className='flex flex-col bg-white shadow-xl p-6 rounded-xl relative h-auto'>
                <div style={{position:'relative', width: '500px', height: '500px'}} className='bg-slate-100 w-full rounded-xl p-4'>
                    {json.contentButtons.map((item, index) => {
                            return (<>
                                <WidgetPreviewButton key={index} labelText={item.labelText} link={`${generateLinktoIcon(item.id)}`} icon={item.icon} cssDesign={item.cssDesign} propertyJson={item}/>
                                <br/><br/>
                                </>
                                );
                    })}

                </div>
              <form onSubmit={sendDataJson} className='mt-3'>
                    <button type="submit" className="border font-bold cursor-pointer uppercase flex items-center gap-2 justify-center
        bg-primary hover:bg-blue-900
        text-white
        w-full
        border-slate-300
        p-3
        text-sm
        rounded-2xl
    ">Guardar</button>
                </form>
            </div>
        </div>


    </>);
}
export default WidgetExamples;
