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
            className='w-1/2 aspect-square rounded-2xl object-center object-cover pb-4 pe-4 border-b-2 border-e-2 border-amber-500'
          />
          <Divider isVertical className='bg-gray-200' />
          <div className='flex flex-col gap-4 justify-center items-center w-full max-w-1/2'>
            <p className='text-2xl'>{data.author.name}</p>
            <p className='text-gray-500 text-xl'>{data.author.post}</p>
          </div>
        </div>
        <div className='w-full flex flex-wrap'>
          {data.materials.map((item, index) => {
            return (
              <div className='p-4 h-80 w-full max-w-1/4' key={index}>
                <CreativeBookCard className='' data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </CreativeCardLayout>
  );
};
