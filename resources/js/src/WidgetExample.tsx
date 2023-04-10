import React, {useEffect, useState} from 'react';
import WidgetPreviewButton from './components/WidgetButton/WidgetPeviewButton';
import FormButtons from './components/WidgetButton/FormsWidget/FormButtons';
import FormGeneralAdvanced from './components/WidgetButton/FormsWidget/FormGeneralAdvanced';
import FormGeneralBasic from './components/WidgetButton/FormsWidget/FormGeneralBasic';

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
    cssDesign: CssDesign;
  }

  interface JsonData {
    contentButtons: ContentButton[];
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
                    "pc": ["0", "0", "0", "0"],
                    "tablet": ["0", "0", "0", "0"],
                    "movil": ["0", "0", "0", "0"]
                }
            },
            "labelDesign": {
                "backgroundColor": "",
                "color": "",
                "fontFamily": "",
                "borderRadius":{
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
                    "pc": ["0", "0","0", "0"],
                    "tablet": ["0", "0","0", "0"],
                    "movil": ["0", "0","0", "0"]
                },
                "margin": {
                    "pc": ["0", "0","0", "0"],
                    "tablet": ["0", "0","0", "0"],
                    "movil": ["0", "0","0", "0"]
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
interface Button {
    id: number;
    nombre: string;
  }

function WidgetExamples() {
    const [json, setJson] = useState<JsonData>(jsonData)
    const [button, setButton] = useState<Button[]>([])

    function addButton(e: React.FormEvent){
        e.preventDefault()
        const nuevoBoton = { id: button.length + 1, nombre: `Button ${button.length + 1}` };
        let formatDataJson:ContentButton = {
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
            "cssDesign": {
                "buttonDesign": {
                    "backgroundColor": "",
                    "borderRadius":{
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
                    "borderRadius":{
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
                        "pc": ["0", "0","0", "0"],
                        "tablet": ["0", "0","0", "0"],
                        "movil": ["0", "0","0", "0"]
                    },
                    "margin": {
                        "pc": ["0", "0","0", "0"],
                        "tablet": ["0", "0","0", "0"],
                        "movil": ["0", "0","0", "0"]
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
    function removeButton(id:number){
        setButton(button.filter((boton) => boton.id !== id));
        setJson((prevState) => ({
            ...prevState,
            contentButtons: prevState.contentButtons.filter((item) => item.id !== `${id}`),
          }));

    }

    function changeSelectionButtonProperties(id: string, name: string, inputsJson: any) {
        setJson((prevState) => {
          const newDataJson = { ...prevState };
          const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);

          if (name === "backgroundColor") {
            newDataJson.contentButtons[objIndex].cssDesign.buttonDesign.backgroundColor = inputsJson.backgroundColor;
          } else {
            const [property, direction, device] = name.split("_");
            const directionIndex = { top: 0, right: 1, bottom: 2, left: 3 };
            newDataJson.contentButtons[objIndex].cssDesign.buttonDesign[property][device][directionIndex[direction]] = inputsJson[property][device][directionIndex[direction]];
          }

          return newDataJson;
        });
      }

      function changeSelectionLabelProperties(id: string, name: string, inputsJson: any) {
        const [property, ...rest] = name.split("_");
        const [direction, device] = rest;
        const directionIndex = { top: 0, right: 1, bottom: 2, left: 3 };

        setJson((prevState) => {
          const newDataJson = { ...prevState };
          const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);

          if (property === "backgroundColor" || property === "color" || property === "fontFamily") {
            newDataJson.contentButtons[objIndex].cssDesign.labelDesign[property] = inputsJson[property];
          } else {
            if (property === "fontSize") {
              newDataJson.contentButtons[objIndex].cssDesign.labelDesign[property][device] = inputsJson[property][device];
            } else {
                newDataJson.contentButtons[objIndex].cssDesign.labelDesign[property][device][directionIndex[direction]] = inputsJson[property][device][directionIndex[direction]];
            }
          }

          return newDataJson;
        });

      }

      function changeSelectionIconProperties(id:string, name:string, inputsJson:any) {
        const [property, ...rest] = name.split("_");
        const [direction, device] = rest;
        const directionIndex = { top: 0, right: 1, bottom: 2, left: 3 };

        setJson((prevState) => {
          const newDataJson = { ...prevState };
          const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);

          if (property === "color" || property === "iconSize") {
            newDataJson.contentButtons[objIndex].cssDesign.iconDesign[property] = inputsJson[property];
          } else {
            if (property === "fontSize") {
              newDataJson.contentButtons[objIndex].cssDesign.iconDesign[property][device] = inputsJson[property][device];
            } else {
              newDataJson.contentButtons[objIndex].cssDesign.iconDesign[property][device][directionIndex[direction]] = inputsJson[property][device][directionIndex[direction]];
            }
          }

          return newDataJson;
        });
      }

      function changeSelectionTemplateProperties(id,name,inputsJson){
        setJson((prevState) => {
          const newDataJson = { ...prevState };
          const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
           newDataJson.contentButtons[objIndex][name] = inputsJson[name];
           return newDataJson;
        });
      }

      function generateLinktoIcon(id:string){
        let objIndex = json.contentButtons.findIndex((obj) => obj.id === id)
        if(json.contentButtons[objIndex].whatsapp !== ''  ){
            return `https://api.whatsapp.com/send?phone=${json.contentButtons[objIndex].whatsapp}`
        }
        if(json.contentButtons[objIndex].facebook !== ''  ){
            return ` https://www.facebook.com/${json.contentButtons[objIndex].facebook}`
        }
        if(json.contentButtons[objIndex].instagram !== ''  ){
            return ` https://www.instagram.com/${json.contentButtons[objIndex].instagram}`
        }
        if(json.contentButtons[objIndex].phone !== ''  ){
            return `tel:${json.contentButtons[objIndex].phone}`
        }
        if(json.contentButtons[objIndex].email !== ''  ){
            return `mail:${json.contentButtons[objIndex].email}`
        }
        if(json.contentButtons[objIndex].link !== ''  ){
            return `tel:${json.contentButtons[objIndex].link}`
        }
      }

      function changeSelectionButtonPropertiesBasic(id,name,inputsJson){
            setJson((prevState)=>{
                const newDataJson = { ...prevState };
                const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
                const property = name.split("_")[0];
                if (name === "backgroundColor") {
                    newDataJson.contentButtons[objIndex].cssDesign.buttonDesign.backgroundColor = inputsJson.backgroundColor;
                  } else {
                    newDataJson.contentButtons[objIndex].cssDesign.buttonDesign[property] = inputsJson[property]
                  }
                  return newDataJson
            })
      }

      function changeSelectionLabelPropertiesBasic(id,name,inputsJson){

       setJson((prevState)=>{
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            const property = name.split("_")[0];
            newDataJson.contentButtons[objIndex].cssDesign.labelDesign[property] = inputsJson[property]
            return newDataJson
        })

      }
      function changeSelectionIconPropertiesBasic(id,name,inputsJson){
        setJson((prevState)=>{
            const newDataJson = { ...prevState };
            const objIndex = newDataJson.contentButtons.findIndex((obj) => obj.id === id);
            const property = name.split("_")[0];
            newDataJson.contentButtons[objIndex].cssDesign.iconDesign[property] = inputsJson[property]
            return newDataJson
        })
      }
        return (<>

            <FormButtons createButton={addButton} deleteButton={removeButton} dataButton={button}/>
            {json.contentButtons.map((item, index) => {
            return <FormGeneralBasic
                key={index}
                dataJson={item}
                removeForm={removeButton}
                changeSelectionTemplateProperties={changeSelectionTemplateProperties}
                changeSelectionButtonPropertiesBasic={changeSelectionButtonPropertiesBasic}
                changeSelectionLabelPropertiesBasic={changeSelectionLabelPropertiesBasic}
                changeSelectionIconPropertiesBasic={changeSelectionIconPropertiesBasic}
            />
            /*<FormGeneralAdvanced key={index} dataJson={item} changeSelectionButtonProperties={changeSelectionButtonProperties} changeSelectionLabelProperties={changeSelectionLabelProperties} changeSelectionIconProperties={changeSelectionIconProperties} changeSelectionTemplateProperties={changeSelectionTemplateProperties}/>; */
        })}

            {json.contentButtons.map((item, index) => {
            return <WidgetPreviewButton key={index} labelText={item.labelText} link={`${generateLinktoIcon(item.id)}`} icon={item.icon} cssDesign={item.cssDesign}/>;
        })}

    </>);;
}
export default WidgetExamples;


