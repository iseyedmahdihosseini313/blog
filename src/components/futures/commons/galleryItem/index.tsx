import Image from 'next/image';
import IGalleryItem from './galleryItem';
const GallleryItem = ({ src, alt, classname }: IGalleryItem) => {
     return (
          <div className={classname}>
               <Image
                    alt={alt}
                    src={`/images/${src}`}
                    fill
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
               />
          </div>
     );
};

export default GallleryItem;
