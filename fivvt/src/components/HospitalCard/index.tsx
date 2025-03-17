'use client';

import type {FC} from 'react';
import type Props from './HospitalCard.props';
import {HospitalCardLayout} from '@/layouts/HospitalCardLayout';
import {Copy} from '../icons/Copy';
import {Location} from '../icons/Location';
import EmblaCarousel from '../EmblaCarousel';
import {EmblaOptionsType} from 'embla-carousel';
import {Button} from '@/shared/components/Button';
import {useRouter} from 'next/navigation';
// переписать под нормальный data список , где isVertical будет атрибутом

export const HospitalCard: FC<Props> = ({className, data, ...props}) => {
  const OPTIONS: EmblaOptionsType = {loop: true};
  const router = useRouter();
  return (
    <HospitalCardLayout
      className={`${className} h-72 flex justify-between gap-8 items-center`}
      {...props}>
      <EmblaCarousel
        className='aspect-square h-full  max-h-full'
        imageClassname='rounded-xl aspect-sque h-full w-full max-h-full'
        options={OPTIONS}
        slides={(data.photos ?? []).map(photo => photo.image)}
      />
      <div className='flex flex-col w-full  h-full justify-around items-start'>
        <p className=' text-2xl line-clamp-2'>{data.name}</p>

        <div className='flex justify-start w-full flex-nowrap gap-1 max-w-3/5 items-start pe-4'>
          <p className='my-auto text-gray-400 text-sm'>Адрес: </p>
          <span className='text-black text-base line-clamp-2'>
            {data.address}
          </span>
        </div>

        <div className='flex flex-col gap-2 items-start w-full'>
          <div className='flex items-center justify-between w-full'>
            {data.phones.map((item, index) => {
              return (
                <div key={index} className='flex flex-col   w-fit'>
                  <p className='truncate w-full max-w-full text-gray-400'>
                    {item.comment}
                  </p>
                  <p className=' w-fit max-w-full flex p-2  gap-2 items-center cursor-pointer  rounded-xl duration-200 transition-all  hover:shadow-2xl hover:scale-95'>
                    <Copy />
                    {item.phone}
                  </p>
                </div>
              );
            })}
            <div className='flex flex-col justify-between gap-4 w-fit items-center'>
              <Button
                onClick={() => router.push(data.url)}
                className='text-black text-base border-1 border-gray-300 py-2 w-full'>
                Наш сайт
              </Button>
              <a
                href={data.url_on_map}
                className='flex gap-2 rounded-2xl duration-200 transition-all px-4  hover:shadow-2xl hover:scale-95'>
                <Location className='w-5 h-5' />
                Мы на картах
              </a>
            </div>
          </div>
        </div>
      </div>
    </HospitalCardLayout>
  );
};
