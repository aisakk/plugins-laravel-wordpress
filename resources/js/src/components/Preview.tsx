import Icon from './Icon'
import Button from './Form/Button'

const Preview = () => {
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
                        <Button background="bg-primary hover:bg-blue-900" color="text-white" width="w-full" padding="p-3">Save</Button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Preview
