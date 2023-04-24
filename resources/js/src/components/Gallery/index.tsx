import Icon from '../Icon';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '../Form/Button';
  type GalleryProps = {
    images: [];
  };


const Gallery: React.FC<GalleryProps> = ({ images }) => {
    let [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal(index) {
        setIsOpen(true);
        setSelectedImageIndex(index)

    }

  return (
    <div className="pt-6">
        <div className="flex flex-wrap items-center">

            { images.map((image,index) => (
                <div key={index} className="w-full sm:w-4/12  p-3 group">
                    <div className="rounded-xl relative overflow-hidden">
                        <img src={ image } className="w-full h-60 object-cover" alt={ image } title={ image } />
                        <div onClick={()=>openModal(index)} className="absolute top-0 left-0 w-full h-full flex justify-center opacity-0 group-hover:opacity-100 items-center bg-black bg-opacity-[40%] text-white">
                            <Icon name="search" className="w-5 md:w-6"/>
                        </div>
                    </div>
                </div>
            ))}
              <Transition appear show={isOpen} as={Fragment}>
                                        <Dialog as="div" className="relative z-50" onClose={closeModal}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  p-6 text-left align-middle transition-all">

                                                 <img src={ images[selectedImageIndex] } className="w-full h-full shadow-xl object-cover" alt={ images[selectedImageIndex] } title={ images[selectedImageIndex] } />

                                                <div className="mt-6 flex gap-3 justify-center">
                                                    <Button
                                                        background="bg-gray-100 hover:bg-gray-200 border-none"
                                                        color="text-gray-500"
                                                        size="text-xs"
                                                        onClick={closeModal}
                                                        >
                                                        Close
                                                    </Button>
                                                </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                            </div>
                                        </div>
                                     </Dialog>
                        </Transition>
        </div>
    </div>
  )
}

export default Gallery
