import { Inertia } from '@inertiajs/inertia';
import Icon from './Icon'
import Button from './Form/Button'

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

interface PreviewProps{
    licenseId: number;
}


const Preview: React.FC<PreviewProps> = (props) =>  {
    const { licenseId } = props;
    const saveJson = (jsonData: JsonData,metaKey:string) => {
        const payload: Record<string, any> = {
            meta_key:metaKey,
            meta_value: jsonData
        };

        Inertia.post(`/license/${licenseId}/save-settings`, payload, {
          preserveState: true,
          onSuccess: (page) => {
            console.log('success!!!')
          },
          onError: (errors) => {
            console.log('error!!!');
          },
        });
    };
    return (
        <div className="w-full xl:w-4/12">
            <div className="shadow-xl p-6 bg-white rounded-2xl">
                <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                    <div>
                        <h6 className="text-lg">Preview</h6>
                        <p className="text-xs">Choose the installation method</p>
                    </div>
                    <div>
                        <Icon name="arrow-down" size={40}/>
                    </div>
                </div>
                <div className="">
                    <div className="py-4">
                        <div className="bg-slate-100 w-full relative rounded-xl h-96">
                            <div className="absolute flex p-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-white rounded-xl shadow-xl px-4 py-2">Contact Us</span>
                                    <a href="#" className="bg-primary shadow-xl p-4 rounded-xl text-white">
                                        <Icon name="whatsapp" size={40}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Button
                            background="bg-primary hover:bg-blue-900"
                            color="text-white"
                            width="w-full" padding="p-3"
                            onClick={() => {saveJson(jsonData,'btn_settings')}}
                        >
                                Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview
