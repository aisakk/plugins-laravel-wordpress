import Icon from '../Icon';

type Screenshot = {
    name: string;
    source: string;
  };

  type GalleryProps = {
    images: Screenshot[];
  };


const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="pt-6">
        <div className="flex flex-wrap items-center">

            { images.map((image) => (
                <div className="w-full sm:w-4/12  p-3 group">
                    <div className="rounded-xl relative rounded-xl overflow-hidden">
                        <img src={ image.source } className="w-full shadow-xl h-60 object-cover" alt={ image.name } title={ image.name } />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center opacity-0 group-hover:opacity-100 items-center bg-black bg-opacity-[40%] text-white">
                            <Icon name="search" size={25}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Gallery
