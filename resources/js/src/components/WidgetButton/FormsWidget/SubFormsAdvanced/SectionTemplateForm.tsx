import React, {useState} from 'react';
import Icon from '../../../Icon'
function SectionTemplateForm({dataJson, handleProperties}){
    const [inputLayout, setInputLayout] = useState("facebook")
    const [labelProperties, setLabelProperties] = useState({
        labelText: dataJson.labelText,
        phone: dataJson.phone,
        whatsapp: dataJson.whatsapp,
        facebook: dataJson.facebook,
        instagram: dataJson.instagram,
        email: dataJson.email,
        link: dataJson.link,
        icon: dataJson.icon,
      });

     function handleIcon(property, nameIcon){
        setInputLayout(nameIcon)
        const updateLabelProperties = {
            ...labelProperties,
            [property]: nameIcon,
          };

        setLabelProperties(updateLabelProperties)
        handleProperties(dataJson.id, property,updateLabelProperties)

     }

     function handleDataInput(e) {
        const { name, value } = e.target;
        const updateLabelProperties = {
          ...labelProperties,
          [name]: value,
        };
        setLabelProperties(updateLabelProperties);
        handleProperties(dataJson.id, name, updateLabelProperties);
      }

    return(
        <>
            <div className="containerLayout flex gap-14">
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={()=>handleIcon("icon","facebook")}>
                    <div className="icon">
                        <Icon name={"facebook"} size={30} />
                    </div>
                    <span>Facebook</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={()=>handleIcon("icon","whatsapp")}>
                    <div className="icon">
                        <Icon name={"whatsapp"} size={30} />
                    </div>
                    <span>Whatsapp</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={()=>handleIcon("icon","instagram")}>
                    <div className="icon">
                        <Icon name={"instagram"} size={30} />
                    </div>
                    <span>Instagram</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={()=>handleIcon("icon","phone")}>
                    <div className="icon">
                        <Icon name={"phone"} size={30} />
                    </div>
                    <span>phone</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={()=>handleIcon("icon","email")}>
                    <div className="icon">
                        <Icon name={"email"} size={30} />
                    </div>
                    <span>Email</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={()=>handleIcon("icon","link")}>
                    <div className="icon">
                        <Icon name={"link"} size={30} />
                    </div>
                    <span>Link</span>
                </div>
            </div>
            <div className="container-form flex">
                {inputLayout === "facebook" && (
                    <>
                    <label htmlFor="">facebook</label>
                    <input onChange={(e)=> handleDataInput(e)} type="text" name="facebook" id="" value={labelProperties.facebook} placeholder='Nickname'/>
                    </>
                )}
                {inputLayout === "whatsapp" && (
                    <>
                        <label htmlFor="">Whatsapp</label>
                        <input onChange={(e)=> handleDataInput(e)} type="text" name="whatsapp" id="" value={labelProperties.whatsapp} placeholder='+326574836221' />
                    </>

                )}
                {inputLayout === "instagram" && (
                         <>
                         <label htmlFor="">instagram</label>
                         <input onChange={(e)=> handleDataInput(e)} type="text" name="instagram" id=""value={labelProperties.instagram}  placeholder='Nickname'/>
                         </>

                )}
                {inputLayout === "phone" && (
                    <>
                    <label htmlFor="">phone</label>
                    <input onChange={(e)=> handleDataInput(e)} type="text" name="phone" id=""value={labelProperties.phone}  placeholder='+326574836221' />
                    </>

                )}
                {inputLayout === "email" && (
                   <>
                    <label htmlFor="">email</label>
                    <input onChange={(e)=> handleDataInput(e)} type="text" name="email" id="" value={labelProperties.email} placeholder='email' />
                    </>
                )}
                {inputLayout === "link" && (
                    <>
                        <label htmlFor="">Link</label>
                        <input onChange={(e)=> handleDataInput(e)} type="text" name="link" id=""value={labelProperties.link}  placeholder='url'/>
                    </>
                )}
                <>
                <label htmlFor="">Label</label>
                <input onChange={(e)=> handleDataInput(e)} type="text" name="labelText" id="" value={labelProperties.labelText} placeholder='Contact Us' />
                </>
            </div>
        </>
    )
}

export default SectionTemplateForm;
