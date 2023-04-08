import {useState} from 'react';



function SectionButtonBasicForm({dataJson, handleProperties}){
    const [inputsJson, setInputsJson] = useState({
        backgroundColor: dataJson.cssDesign.buttonDesign.backgroundColor,
        borderRadius:{
            pc: [...dataJson.cssDesign.buttonDesign.borderRadius.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.borderRadius.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.borderRadius.movil]
        },
        padding:{
            pc: [...dataJson.cssDesign.buttonDesign.padding.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.padding.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.padding.movil]
        },
        margin:{
            pc: [...dataJson.cssDesign.buttonDesign.margin.pc],
            tablet: [...dataJson.cssDesign.buttonDesign.margin.tablet],
            movil: [...dataJson.cssDesign.buttonDesign.margin.movil]
        }
    })
    function handleDataInput(e) {
        const { name, value } = e.target;

        setInputsJson((prevState) => {
          const newState = { ...prevState };

          switch (name) {
            case "backgroundColor":
              newState.backgroundColor = value;
              break;
            case "margin_all_device":
            case "padding_all_device":
            case "borderRadius_all_device":
              const property = name.split("_")[0];
              newState[property].pc = [value, value, value, value];
              newState[property].tablet = [value, value, value, value];
              newState[property].movil = [value, value, value, value];
              break;
            default:
              break;
          }

          return newState;
        });

        // Pass the updated data to the parent component
        handleProperties(dataJson.id,name,inputsJson);
      }

    return(
        <div className='flex'>
        <div>{/* Contenedor del Input Color */}
            <div>
                <p>Background</p>
            </div>
            <input onChange={(e)=> handleDataInput(e) } type="color" value={inputsJson.backgroundColor} name="backgroundColor" id=""  />
        </div>
        <div>{/*Contenedor del Margin*/}
             <p>Margin</p>
             <input onChange={(e)=> handleDataInput(e)} type="range"min={0} max={100} name="margin_all_device" id="" />
        </div>
        <div>{/*Contenedor del Padding*/}
             <p>Padding</p>
             <input onChange={(e)=> handleDataInput(e)} type="range" min={0} max={100}name="padding_all_device" id="" />
        </div>
        <div>{/*Contenedor del borderRadius*/}
             <p>borderRadius</p>
             <input onChange={(e)=> handleDataInput(e)} type="range" min={0} max={100}name="borderRadius_all_device" id="" />
        </div>
        </div>
    )
}



export default SectionButtonBasicForm;
