import Icon from '../Icon';



  type GalleryProps = {
    images: [];
  };


const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="pt-6">
        <div className="flex flex-wrap items-center">

            { images.map((image,index) => (
                <div key={index} className="w-full sm:w-4/12  p-3 group">
                    <div className="rounded-xl relative rounded-xl overflow-hidden">
                        <img src={ image } className="w-full shadow-xl h-60 object-cover" alt={ image } title={ image } />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center opacity-0 group-hover:opacity-100 items-center bg-black bg-opacity-[40%] text-white">
                            <Icon name="search" className="w-5 md:w-6"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Gallery
