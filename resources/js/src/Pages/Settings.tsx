import React from 'react';
import MainLayout from '../layouts/MainLayout';
import RadioGroupArea from '../components/Form/RadioGroupArea';
import RadioGroupButton from '../components/Form/RadioGroupButton';
import Icon from '../components/Icon';
import Button from '../components/Form/Button';
import Label from '../components/Form/Label';
import Input from '../components/Form/Input';
import InputMultiple from '../components/Form/InputMultiple';
import InputColor from '../components/Form/InputColor';
import InputRange from '../components/Form/InputRange';
import Select from '../components/Form/Select';
import Badge from '../components/Badge';
import Preview from '../components/Preview';
import Card from '../components/Card';

interface Option {
  name: string;
  value: string;
}
interface Label {
    name: string;
    value:string;

}
const Settings: React.FC = () => {
    const order: Option[] = [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '6', value: '6' },
        { name: '7', value: '7' },
        { name: '8', value: '8' },
        { name: '9', value: '9' },
        { name: '10', value: '10' }
      ];

      const font_size: Option[] = [
        { name: '10', value: '10' },
        { name: '11', value: '11' },
        { name: '12', value: '12' },
        { name: '13', value: '13' },
        { name: '14', value: '14' },
      ];

      const font_family: Option[] = [
        { name: 'Helvetica', value: 'helvetica' },
        { name: 'Arial', value: 'arial' },
        { name: 'Verdana', value: 'verdana' },
        { name: 'Tahoma', value: 'tahoma' },
        { name: 'Trebuchet', value: 'trebuchet' },
      ];

      const label:Label[]=[
        {name:'label',value:'value'},
        {name:'label',value:'value'},
        {name:'label',value:'value'},
        {name:'label',value:'value'}
      ]
      const speed_actions: Option[] = [
        { name: 'Toggle buttons selected to Active', value: '1' },
        { name: 'Toggle buttons selected to Inactive', value: '2' },
        { name: 'Remove buttons selected', value: '3' },
        { name: 'Move buttons selected to Left Top', value: '4' },
        { name: 'Move buttons selected to Left Center', value: '5' },
        { name: 'Move buttons selected to Left Bottom', value: '6' },
        { name: 'Move buttons selected to Right Top', value: '7' },
        { name: 'Move buttons selected to Right Center', value: '8' },
        { name: 'Move buttons selected to Right Bottom', value: '9' }
      ];
      return (
        <MainLayout>
          <div className="pt-10">
          <div>
                    <div className="flex flex-wrap xl:flex-nowrap gap-6">

                        <div className="w-full xl:w-8/12">
                            <Card>
                                <div className="pb-10">
                                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                                        <div>
                                            <h6 className="text-lg font-bold">Area</h6>
                                            <p className="text-xs">Select the area you want to modify</p>
                                        </div>
                                        <div>
                                            <Icon name="arrow-down" size={25}/>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <RadioGroupArea item={order[0]}/>
                                    </div>

                                </div>
                                <div className="pb-10">
                                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                                        <div>
                                            <h6 className="text-lg font-bold">General design</h6>
                                            <p className="text-xs">Values ​​only affect the layout of the current area</p>
                                        </div>
                                        <div>
                                            <Icon name="arrow-down" size={25}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap sm:flex-nowrap gap-6 pb-4 pt-6">
                                        <div className="w-full sm:w-4/12">
                                            <InputMultiple label="Padding" basic />
                                        </div>
                                        <div className="w-full sm:w-4/12">
                                            <InputMultiple label="Margin" basic />
                                        </div>
                                        <div className="w-full sm:w-4/12">
                                            <InputMultiple label="Border radius" basic />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                                        <div className="w-6/12">
                                            <h6 className="text-lg">Buttons</h6>
                                            <p className="text-xs">Select the area you want to modify</p>
                                        </div>
                                        <div>
                                            <Button>Add New</Button>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <label htmlFor="" className="text-xs font-bold">Edition type</label>
                                        <div className="pt-4 flex gap-3">
                                            <button className="bg-blue-100 text-blue-400 uppercase text-xs font-bold border border-solid border-blue-100 px-4 py-2 rounded-2xl">Basic</button>
                                            <button className="bg-white text-slate-800 uppercase text-xs font-bold border border-solid border-slate-300 px-4 py-2 rounded-2xl">Advance</button>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <div className="flex justify-end items-center gap-6 px-2 py-10">
                                <Label>Speed actions</Label>
                                <div className="w-64">
                                    <Select label={speed_actions} options={ speed_actions } />
                                </div>
                            </div>

                            <div className="flex gap-6 flex-col">
                                <Card>
                                    <div className="flex justify-between items-start border-b border-solid border-slate-400 pb-4">
                                        <div>
                                            <h4 className="text-2xl pb-6 font-bold"><input type="checkbox" /> Button #1</h4>
                                            <h6 className="text-lg font-bold">1. Template</h6>
                                            <p className="text-xs">Choose the name and layout to use</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <Button background="bg-blue-100 hover:bg-blue-200" color="text-blue-400" border="border-blue-100" padding="p-2">
                                                <Icon name="eye" size={25}/>
                                            </Button>
                                            <Button background="bg-red-100 hover:bg-red-200" color="text-red-400" border="border-red-100" padding="p-2">
                                                <Icon name="trash" size={25}/>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="py-6">
                                        <div className="">
                                            <Label>Layout</Label>
                                            <RadioGroupButton />
                                        </div>

                                        <div className="flex flex-wrap sm:flex-nowrap gap-6 pt-6">
                                            <div className="w-full sm:w-4/12">
                                                <Label>Phone Number</Label>
                                                <Input label={label[0].name} placeholder="+11234567" />
                                            </div>
                                            <div className="w-full sm:w-4/12">
                                                <Label>Label Text</Label>
                                                <Input label={label[0].name} placeholder="Example: Let's talk!" />
                                            </div>
                                            <div className="w-full sm:w-4/12">
                                                <Label>Order</Label>
                                                <Select label={label} options={ order } />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                                        <div>
                                            <h6 className="text-lg font-bold">2. Design</h6>
                                            <p className="text-xs">Choose the elements you want to customize</p>
                                        </div>

                                        <div>

                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <div className="border-b border-solid border-slate-400">
                                            <Badge>Button</Badge>
                                            <div className="flex gap-6 pb-4 pt-4">
                                                <div className="w-6/12 pr-2 sm:w-2/12">
                                                    <Label>Background</Label>
                                                    <InputColor label={label[0].name}/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="border-b border-solid border-slate-400 pt-4">

                                        <Badge>Label</Badge>
                                        <div className="flex flex-wrap gap-y-4 sm:gap-6 pb-4 pt-4">
                                                <div className="w-6/12 pr-2 sm:w-2/12">
                                                    <Label>Background</Label>
                                                    <InputColor label={label[0].name}/>
                                                </div>
                                                <div className="w-6/12 pl-2 sm:w-2/12">
                                                    <Label>Color</Label>
                                                    <InputColor label={label[0].name}/>
                                                </div>
                                                <div className="w-6/12 pr-2 sm:w-2/12">
                                                    <Label>Font family</Label>
                                                    <Select label={label} options={ font_family } />
                                                </div>
                                                <div className="w-6/12 pl-2 sm:w-2/12">
                                                    <Select options={ font_size } label={label} responsive />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="pt-4">

                                        <Badge>Icon</Badge>
                                        <div className="flex flex-wrap sm:gap-6 pb-4 pt-4">
                                                <div className="w-6/12 pr-2 sm:w-2/12">
                                                    <Label>Color</Label>
                                                    <InputColor label={label[0].name}/>
                                                </div>
                                                <div className="w-6/12 pl-2 sm:pl-0 sm:w-2/12">
                                                    <Input label="Size" responsive units />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="flex justify-between items-start border-b border-solid border-slate-400 pb-4">
                                        <div>
                                            <h4 className="text-2xl pb-6 font-bold"><input type="checkbox" /> Button #2</h4>
                                            <h6 className="text-lg font-bold">1. Template</h6>
                                            <p className="text-xs">Choose the name and layout to use</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <Button background="bg-blue-100 hover:bg-blue-200" color="text-blue-400" border="border-blue-100" padding="p-2">
                                                <Icon name="eye" size={25}/>
                                            </Button>
                                            <Button background="bg-red-100 hover:bg-red-200" color="text-red-400" border="border-red-100" padding="p-2">
                                                <Icon name="trash" size={25}/>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="py-6">
                                        <div className="">
                                            <Label>Layout</Label>
                                            <RadioGroupButton />
                                        </div>

                                        <div className="flex flex-wrap sm:flex-nowrap gap-6 pt-6">
                                            <div className="w-full sm:w-4/12">
                                                <Label>Phone Number</Label>
                                                <Input label={label[0].name} placeholder="+11234567" />
                                            </div>
                                            <div className="w-full sm:w-4/12">
                                                <Label>Label Text</Label>
                                                <Input label={label[0].name} placeholder="Example: Let's talk!" />
                                            </div>
                                            <div className="w-full sm:w-4/12">
                                                <Label>Order</Label>
                                                <Select label={label} options={ order } />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-solid border-slate-400 pb-4">
                                        <div>
                                            <h6 className="text-lg font-bold">2. Design</h6>
                                            <p className="text-xs">Choose the elements you want to customize</p>
                                        </div>

                                        <div>

                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <div className="border-b border-solid border-slate-400 pt-4 pb-4">
                                            <Badge>Button</Badge>
                                            <div className="flex flex-wrap sm:flex-nowrap gap-6 pb-4 pt-4">
                                                <div className="w-6/12 sm:w-2/12">
                                                    <InputColor label="Background" description="Custom" />
                                                </div>
                                                <div className="w-full sm:w-10/12">
                                                    <div className="flex gap-3">
                                                        <div className="w-6/12">
                                                            <InputMultiple label="Border radius" values={ ['Left Top', 'Right Top', 'Right Bottom', 'Left Bottom'] } responsive units />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="flex flex-wrap sm:flex-nowrap gap-6">
                                                <div className="w-full sm:w-6/12">
                                                    <InputMultiple label="Margin" values={ ['Top', 'Right', 'Bottom', 'Left'] } responsive units />
                                                </div>
                                                <div className="w-full sm:w-6/12">
                                                    <InputMultiple label="Padding" values={ ['Top', 'Right', 'Bottom', 'Left'] } responsive units />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="border-b border-solid border-slate-400 pt-4">

                                        <Badge>Label</Badge>
                                        <div className="flex flex-wrap gap-y-4 sm:gap-6 pb-4 pt-4">
                                                <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                                                    <Label>Background</Label>
                                                    <InputColor label={label[0].name}/>
                                                </div>
                                                <div className="w-6/12 pl-2 sm:pl-0 sm:w-2/12">
                                                    <Label>Color</Label>
                                                    <InputColor label={label[0].name}/>
                                                </div>
                                                <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                                                    <Label>Font family</Label>
                                                    <Select label={label} options={font_family} />
                                                </div>
                                                <div className="w-6/12 pl-2 sm:pl-0 sm:w-2/12">
                                                    <Select label={label} options={ font_size } responsive />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap sm:flex-nowrap gap-6 pb-4 pt-4">
                                                <div className="w-full sm:w-6/12">
                                                    <InputMultiple label="Padding" values={ ['Top', 'Right', 'Bottom', 'Left'] } responsive units />
                                                </div>
                                                <div className="w-full sm:w-6/12">
                                                    <InputMultiple label="Margin" values={ ['Top', 'Right', 'Bottom', 'Left'] } responsive units />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4">

                                            <Badge>Icon</Badge>
                                            <div className="flex sm:gap-6 pt-4 pb-4">
                                                <div className="w-6/12 pr-2 sm:pr-0 sm:w-2/12">
                                                    <Label>Color</Label>
                                                    <InputColor label={label[0].name}/>
                                                </div>
                                                <div className="w-6/12 pl-2 sm:pl-0 sm:w-2/12">
                                                    <Input label="Font size" units responsive />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap sm:flex-nowrap gap-6 pt-4 pb-4">
                                                <div className="w-full sm:w-6/12">
                                                    <InputMultiple label="Padding" values={ ['Top', 'Right', 'Bottom', 'Left'] } responsive units />
                                                </div>
                                                <div className="w-full sm:w-6/12">
                                                    <InputMultiple label="Margin" values={ ['Top', 'Right', 'Bottom', 'Left'] } responsive units />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <Preview />
                    </div>

                </div>
          </div>
    </MainLayout>
  );
};

export default Settings;
