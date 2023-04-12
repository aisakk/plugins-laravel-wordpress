import React, { useState } from 'react';
import Icon from '../../Icon';
function SectionTemplateForm({ dataJson, handleProperties }) {
    const [inputLayout, setInputLayout] = useState("facebook");
    const [labelProperties, setLabelProperties] = useState({
        labelText: dataJson.labelText,
        phone: dataJson.phone,
        whatsapp: dataJson.whatsapp,
        facebook: dataJson.facebook,
        email: dataJson.email,
        instagram: dataJson.instagram,
        link: dataJson.link,
        icon: dataJson.icon,
    });
    function handleIcon(property, nameIcon) {
        setInputLayout(nameIcon);
        const updateLabelProperties = {
            ...labelProperties,
            [property]: nameIcon,
        };
        setLabelProperties(updateLabelProperties);
        handleProperties(dataJson.id, property, updateLabelProperties);
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
    return (<>
            <div className="containerLayout flex gap-10 flex-wrap">
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={() => handleIcon("icon", "facebook")}>
                    <div className={`icon flex items-center justify-center bg-white ${inputLayout === 'facebook' ? 'border-green-200' : 'border-slate-50'}   relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                        <Icon name={"facebook"} size={40}/>
                    </div>
                    <span>Facebook</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={() => handleIcon("icon", "whatsapp")}>
                    <div className={`icon flex items-center justify-center bg-white  ${inputLayout === 'whatsapp' ? 'border-green-200' : 'border-slate-50'} relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                        <Icon name={"whatsapp"} size={40}/>
                    </div>
                    <span>Whatsapp</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={() => handleIcon("icon", "instagram")}>
                    <div className={`icon flex items-center justify-center bg-white  ${inputLayout === 'instagram' ? 'border-green-200' : 'border-slate-50'} relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                        <Icon name={"instagram"} size={40}/>
                    </div>
                    <span>Instagram</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={() => handleIcon("icon", "phone")}>
                    <div className={`icon flex items-center justify-center bg-white  ${inputLayout === 'phone' ? 'border-green-200' : 'border-slate-50'} relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                        <Icon name={"phone"} size={40}/>
                    </div>
                    <span>phone</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={() => handleIcon("icon", "email")}>
                    <div className={`icon flex items-center justify-center bg-white  ${inputLayout === 'email' ? 'border-green-200' : 'border-slate-50'} relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                        <Icon name={"email"} size={40}/>
                    </div>
                    <span>Email</span>
                </div>
                <div className="container-icon cursor-pointer flex flex-col items-center justify-center" onClick={() => handleIcon("icon", "link")}>
                    <div className={`icon flex items-center justify-center bg-white  ${inputLayout === 'link' ? 'border-green-200' : 'border-slate-50'} relative w-full h-20  border-2 rounded-lg p-2 shadow-md`}>
                        <Icon name={"link"} size={40}/>
                    </div>
                    <span>Link</span>
                </div>
            </div>
            <div className="container-form flex pt-6 gap-6 flex-wrap">
                {inputLayout === "facebook" && (<>
                    <div className='flex flex-col'>
                         <label className="font-bold text-sm pb-2" htmlFor="">facebook</label>
                         <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" onChange={(e) => handleDataInput(e)} type="text" name="facebook" id="" value={labelProperties.facebook} placeholder='Nickname'/>
                    </div>
                    </>)}
                {inputLayout === "whatsapp" && (<>
                    <div className='flex flex-col'>
                        <label className="font-bold text-sm pb-2" htmlFor="">Whatsapp</label>
                        <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" onChange={(e) => handleDataInput(e)} type="text" name="whatsapp" id="" value={labelProperties.whatsapp} placeholder='+326574836221'/>
                    </div>
                    </>)}
                {inputLayout === "instagram" && (<>
                    <div className='flex flex-col'>
                         <label className="font-bold text-sm pb-2" htmlFor="">instagram</label>
                         <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" onChange={(e) => handleDataInput(e)} type="text" name="instagram" id="" value={labelProperties.instagram} placeholder='Nickname'/>
                    </div>
                         </>)}
                {inputLayout === "phone" && (<>
                    <div className='flex flex-col'>
                    <label className="font-bold text-sm pb-2" htmlFor="">phone</label>
                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" onChange={(e) => handleDataInput(e)} type="text" name="phone" id="" value={labelProperties.phone} placeholder='+326574836221'/>
                   </div>
                    </>)}
                {inputLayout === "email" && (<>
                    <div className='flex flex-col'>
                    <label className="font-bold text-sm pb-2" htmlFor="">email</label>
                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" onChange={(e) => handleDataInput(e)} type="text" name="email" id="" value={labelProperties.email} placeholder='email'/>
                    </div>
                    </>)}
                {inputLayout === "link" && (<>
                    <div className='flex flex-col'>
                        <label className="font-bold text-sm pb-2" htmlFor="">Link</label>
                        <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" onChange={(e) => handleDataInput(e)} type="text" name="link" id="" value={labelProperties.link} placeholder='url'/>
                    </div>
                    </>)}
                <>
                <div className='flex flex-col'>
                    <label className="font-bold text-sm pb-2">Label</label>
                    <input className="rounded-xl border w-full border-slate-200 py-2 px-4 text-xs" onChange={(e) => handleDataInput(e)} type="text" name="labelText" id="" value={labelProperties.labelText} placeholder='Contact Us'/>
                </div>
                <div className="flex flex-col">


                </div>
                </>
            </div>
            <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                    <div>
                        <h6 className="text-lg font-bold">2. Design</h6>
                        <p className="text-xs">Choose the elements you want to customize</p>
                        </div>
                        <div>
                    </div>
                </div>
        </>);
}
export default SectionTemplateForm;
