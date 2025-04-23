import type {FC} from 'react';
import Props from './CreativeCard.props';
import {CreativeCardLayout} from '@/layouts/CreativeCardLayout';
import Image from 'next/image';
import {Divider} from '@/shared/components/Divider';
import CreativeBookCard from './components/CreativeBookCard';

export const CreativeCard: FC<Props> = ({data, className}) => {
  return (
    <CreativeCardLayout className={`${className}`}>
      <div className='flex flex-col gap-8 h-full w-full px-8 py-8 rounded-2xl'>
        <div className='flex gap-4 w-full h-80'>
          <Image
            src={data.author.photo}
            alt='author photo'
            height={600}
            width={600}
            className=' animate-appear-start-block-800 w-1/2 aspect-square rounded-2xl object-center object-cover  border-b-4 border-e-4 border-amber-400'
          />
          <Divider isVertical className='bg-gray-200' />
          <div className='flex relative flex-col gap-4 justify-center items-center w-full max-w-1/2 animate-appear-end-block-800'>
            <p className='text-2xl'>{data.author.name}</p>
            <p className='text-gray-500 text-xl'>{data.author.post}</p>
            <div className='absolute top-0 left-0 p-2 -z-10 flex w-full h-full bg-amber-400'>
              <div className='bg-white z-40 w-full h-full self-center mx-auto'></div>
              <div className='bg-white absolute left-0 top-8 w-full h-[calc(100%-4rem)]'></div>
              <div className='bg-white absolute top-0 right-8  w-[calc(100%-4rem)] h-full'></div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-wrap'>
          {data.materials.map((item, index) => {
            return (
              <div className='p-4 h-80 w-full max-w-1/4 animate-appear-opacity' key={index}>
                <CreativeBookCard className='' data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </CreativeCardLayout>
  );
};
