import React, {useEffect, useState} from 'react';
import WidgetPreviewButton from './components/WidgetButton/WidgetPeviewButton';
import FormButtons from './components/WidgetButton/FormsWidget/FormButtons';
import FormGeneralAdvanced from './components/WidgetButton/FormsWidget/FormGeneralAdvanced';

let jsonData = {
    "contentButtons": [{
        "id": "0",
        "nombreButton": "Button 0",
        "labelText": "Contact us",
        "phone": "+5843254321",
        "link": "https://wa.me/",
        "icon": "whatsapp",
        "cssDesign": {
            "buttonDesign": {
                "backgroundColor": "red",
                "borderRadius":{
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
                    "pc": [],
                    "tablet": [],
                    "movil": []
                }
            },
            "labelDesign": {
                "backgroundColor": "",
                "color": "",
                "fontFamily": "",
                "fontSize": {
                    "pc": ["12"],
                    "tablet": [],
                    "movil": ["24"]
                },
                "padding": {
                    "pc": [],
                    "tablet": [],
                    "movil": []
                },
                "margin": {
                    "pc": [],
                    "tablet": [],
                    "movil": []
                }
            },
            "iconDesign": {
                "color": "white",
                "fontSize": {
                    "pc": [],
                    "tablet": [],
                    "movil": []
                },
                "padding": {
                    "pc": [],
                    "tablet": [],
                    "movil": []
                },
                "margin": {
                    "pc": [],
                    "tablet": [],
                    "movil": []
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
}



function WidgetExamples() {
    const [json, setJson] = useState(jsonData)
    const [button, setButton] = useState([])

    function addButton(e){
        e.preventDefault()
        const nuevoBoton = { id: button.length + 1, nombre: `Button ${button.length + 1}` };
        let formatDataJson = {
            "id": `${nuevoBoton.id}`,
            "nombreButton": `${nuevoBoton.nombre}`,
            "labelText": "test",
            "phone": "",
            "link": "",
            "icon": "whatsapp",
            "cssDesign": {
                "buttonDesign": {
                    "backgroundColor": "",
                    "borderRadius": "",
                    "padding": {
                        "pc": [],
                        "tablet": [],
                        "movil": []
                    },
                    "margin": {
                        "pc": [],
                        "tablet": [],
                        "movil": []
                    }
                },
                "labelDesign": {
                    "backgroundColor": "",
                    "color": "",
                    "fontFamily": "",
                    "fontSize": {
                        "pc": "",
                        "tablet": "",
                        "movil": ""
                    },
                    "padding": {
                        "pc": [],
                        "tablet": [],
                        "movil": []
                    },
                    "margin": {
                        "pc": [],
                        "tablet": [],
                        "movil": []
                    }
                },
                "iconDesign": {
                    "color": "",
                    "fontSize": {
                        "pc": [],
                        "tablet": [],
                        "movil": []
                    },
                    "padding": {
                        "pc": [],
                        "tablet": [],
                        "movil": []
                    },
                    "margin": {
                        "pc": [],
                        "tablet": [],
                        "movil": []
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
        }
        setJson((prevState)=>({
            ...prevState,
            contentButtons: [...prevState.contentButtons, formatDataJson],
        }))

        setButton([...button, nuevoBoton]);

    }
    function removeButton(id){
        setButton(button.filter((boton) => boton.id !== id));
        setJson((prevState) => ({
            ...prevState,
            contentButtons: prevState.contentButtons.filter((item) => item.id !== `${id}`),
          }));

    }
    function changeSelectionButtonProperties(id, propertyKey, newValue){
        const [property, device] = propertyKey.split("-");

    }
/*     function changeSelectionButtonProperties(id, propertyKey, newValue) {
        setJson((prevState) => {
          const selectDataButtonIndex = prevState.contentButtons.findIndex(
            (objeto) => objeto.id === `${id}`
          );
          const selectDataButton = {
            ...prevState.contentButtons[selectDataButtonIndex],
          };
          selectDataButton.cssDesign.buttonDesign.backgroundColor = newValue;

          return {
            ...prevState,
            contentButtons: [
              ...prevState.contentButtons.slice(0, selectDataButtonIndex),
              selectDataButton,
              ...prevState.contentButtons.slice(selectDataButtonIndex + 1),
            ],
          };
        });
      }
 */
    return (
        <>

            <FormButtons createButton={addButton} deleteButton={removeButton} dataButton={button}/>
            {json.contentButtons.map((item,index)=>{
            return  <FormGeneralAdvanced key={index} dataJson={item} changeSelectionButtonProperties={changeSelectionButtonProperties}/>
            })}

            {json.contentButtons.map((item,index)=>{
                return <WidgetPreviewButton key={index} labelText={item.labelText} link={`${item.link}${item.phone}`} icon={item.icon} cssDesign={item.cssDesign}/>

            })}

        </>);
}
export default WidgetExamples;
