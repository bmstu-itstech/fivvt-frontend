import {memo, type FC, useState, useCallback} from 'react';
import {ArrowRightIcon} from '@/components/icons/ArrowRightIcon';
import Image from 'next/image';
import {CrossIcon} from '@/components/icons/CrossIcon';
import Props from './ModalInformation.props';

const ModalInformation: FC<Props> = ({data, onClick}) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const openImage = useCallback(
    (idx: number) => {
      setSelectedImage(idx);
      setIsImageOpen(true);
    },
    [isImageOpen],
  );
  const closeImage = useCallback(() => {
    setIsImageOpen(false);
    setSelectedImage(0);
  }, [isImageOpen]);
  const nextImage = useCallback(() => {
    setSelectedImage((selectedImage + 1) % data.photos.length);
  }, [selectedImage]);
  const prevImage = useCallback(() => {
    setSelectedImage(
      selectedImage - 1 >= 0 ? selectedImage - 1 : data.photos.length - 1,
    );
  }, [selectedImage]);

  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div
        className={`fixed inset-0 bg-gray-500/75
         transition-opacity`}
        aria-hidden='true'></div>
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end h-full justify-center p-4 text-center sm:items-center sm:p-0'>
          <div
            className={`relative transform overflow-y-auto overflow-x-hidden  
              min-w-[80vw] w-[80vw] h-[93dvh] rounded-xl ${
                isImageOpen && 'invisible'
              }  text-left shadow-xl  bg-white
               my-8 max-w-lg px-4 pt-12 pb-4 flex flex-wrap`}>
            <CrossIcon
              onClick={onClick}
              className='w-12 h-12 absolute top-1 right-1 cursor-pointer'
            />
            <p className='w-full mx-auto mb-4 text-center text-2xl'>
              {data.title}
            </p>
            {data.photos.map((item, index) => (
              <Image
                src={item.image}
                key={index}
                width={1500}
                height={1000}
                alt='photo'
                onClick={() => openImage(index)} // открываем изображение при клике
                className='rounded-lg w-1/3 p-2 cursor-pointer object-center object-cover' // добавляем курсор для указания, что изображение кликабельно
              />
            ))}
          </div>
        </div>
      </div>
      {/* Увеличенное изображение */}
      {isImageOpen && (
        <div className='fixed inset-0 bg-black/50 bg-opacity-75 flex items-center  justify-center z-20'>
          <ArrowRightIcon
            onClick={nextImage}
            className='absolute top-1/2 right-0 -translate-x-1/2 cursor-pointer'
          />
          <ArrowRightIcon
            onClick={prevImage}
            className='absolute top-1/2 left-0 rotate-180 cursor-pointer translate-x-1/2 '
          />
          <CrossIcon
            onClick={onClick}
            isWhite
            className='w-12 h-12 absolute top-1 right-5 cursor-pointer'
          />
          <Image
            src={data.photos[selectedImage].image!}
            alt='Enlarged'
            width={1900}
            height={1080}
            className='max-w-4/5 max-h-4/5 object-center object-contain'
            onClick={closeImage} // закрываем увеличение при клике
          />
        </div>
      )}
    </div>
  );
};
export default memo(ModalInformation);
