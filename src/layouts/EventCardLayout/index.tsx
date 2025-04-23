import type {FC} from 'react';
import type Props from './EventCardLayout.props';
import DateFormat from '@/utils/calc/dateFormat';
import Image from 'next/image';
export const EventCardLayout: FC<Props> = ({
  className,
  title,
  date,
  count,
  onClick,
  children,
  photo
}) => {
  return (
    <button
      className={`${className} border-2 border-gray-300 flex-col gap-2 bg-cover
       bg-center bg-no-repeat  min-w-48 min-h-48  relative aspect-square
        flex p-4 items-center justify-end rounded-xl overflow-hidden
         hover:shadow-2xl cursor-pointer duration-200 transition-all`}>
      <Image
        className='w-full h-full absolute z-0 top-0 left-0 object-center object-cover'
        src={photo}
        alt='photo'
        onClick={onClick}
        width={800}
        height={800}
      />
      <p className='text-white z-[5] font-medium w-full max-w-2/3 truncate'>
        <DateFormat>{date}</DateFormat>
      </p>
      <p className='text-white z-[5] font-medium w-full max-w-2/3 truncate'>
        {title}
      </p>
      {children}

      <p className='absolute bottom-4 right-4 text-white text-sm'>{count}</p>
    </button>
  );
};
