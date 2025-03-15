import {memo, type FC} from 'react';
import {EventCardData} from '../../EventCard.props';
import Image from 'next/image';
import {CrossIcon} from '@/components/icons/CrossIcon';
import Props from './ModalInformation.props';

const ModalInformation: FC<Props> = ({data, onClick}) => {
  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      {/*   
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
   */}
      <div
        className='fixed inset-0 bg-gray-500/75 transition-opacity'
        aria-hidden='true'></div>

      <div className='fixed inset-0 z-10 w-screen  overflow-y-auto'>
        <div className='flex min-h-full items-end h-full justify-center p-4 text-center sm:items-center sm:p-0'>
          {/* Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
       */}
          <div
            className='relative transform overflow-y-auto  overflow-x-hidden  
              min-w-[80vw] w-[80vw] h-[93dvh] rounded-lg bg-white text-left shadow-xl transition-all
               my-8  max-w-lg px-4 pt-12 pb-4  flex flex-wrap '>
            <CrossIcon
              onClick={onClick}
              className='w-12 h-12 absolute top-1 right-1 cursor-pointer'
            />
            <p className='w-full mx-auto mb-4 text-center text-2xl'>
              {data.title}
            </p>
            {data.photos.map((item, index) => {
              return (
                <Image
                  src={item}
                  key={index}
                  width={1500}
                  height={1000}
                  alt='photo'
                  className='rounded-2xl w-1/3 p-2'
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalInformation);
