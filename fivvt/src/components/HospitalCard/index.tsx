'use client';

import type {FC} from 'react';
import type Props from './HospitalCard.props';
import {HospitalCardLayout} from '@/layouts/HospitalCardLayout';
import {Copy} from '../icons/Copy';
import Image from 'next/image';
import {Location} from '../icons/Location';
import EmblaCarousel from '../EmblaCarousel';
import {EmblaOptionsType} from 'embla-carousel';
// переписать под нормальный data список , где isVertical будет атрибутом

export const HospitalCard: FC<Props> = ({className, data, ...props}) => {
  const OPTIONS: EmblaOptionsType = {loop: true};

  return (
    <HospitalCardLayout
      className={`${className} flex justify-between gap-8 items-center`}
      {...props}>
      <EmblaCarousel
        className='aspect-square h-full max-h-full max-w-1/3'
        imageClassname='rounded-xl aspect-sque h-full w-full max-h-full'
        options={OPTIONS}
        slides={[data.photo, data.photo, data.photo, data.photo]}
      />
      {/* <Image
        src={data.photo}
        height={2000}
        width={2000}
        alt='HospitalCard'
        className='w-1/3 aspect-square object-cover object-center rounded-2xl'
      /> */}
      <div className='flex flex-col gap-4 h-full justify-around items-start'>
        <p className=' text-2xl line-clamp-2'>{data.title}</p>
        <p className=' text-gray-400 text-sm'>
          email: <span className='text-black text-base'>{data.email}</span>
        </p>
        <div className='flex justify-between w-full items-center pe-4'>
          <div className=' flex flex-nowrap gap-1 max-w-3/5 items-start '>
            <p className='my-auto text-gray-400 text-sm'>Адрес: </p>
            <span className='text-black text-base line-clamp-2'>
              {data.address}
            </span>
          </div>
          <a
            href={data.mapUrl}
            className='flex gap-2 rounded-2xl duration-200 transition-all px-4  hover:shadow-2xl hover:scale-95'>
            <Location className='w-5 h-5' />
            Мы на картах
          </a>
        </div>

        <div className='flex flex-col gap-2 items-start w-full'>
          <div className='flex items-center flex-wrap w-full'>
            {data.contacts.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col min-w-1/3 max-w-1/2  w-full'>
                  <p className='truncate w-full max-w-full text-gray-400'>
                    {item.title}
                  </p>
                  <p className=' w-fit max-w-full flex p-2  gap-2 items-center cursor-pointer  rounded-xl duration-200 transition-all  hover:shadow-2xl hover:scale-95'>
                    <Copy />
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HospitalCardLayout>
  );
};
