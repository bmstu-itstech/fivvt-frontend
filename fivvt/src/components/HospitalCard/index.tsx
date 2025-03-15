'use client';

import type {FC} from 'react';
import type Props from './HospitalCard.props';
import {HospitalCardLayout} from '@/layouts/HospitalCardLayout';
import {Copy} from '../icons/Copy';
import Image from 'next/image';
import {Location} from '../icons/Location';

// переписать под нормальный data список , где isVertical будет атрибутом

export const HospitalCard: FC<Props> = ({className, data, ...props}) => {
  return (
    <HospitalCardLayout
      className={`${className} flex justify-between gap-8 items-center`}
      {...props}>
      <Image
        src={data.photo}
        height={2000}
        width={2000}
        alt='HospitalCard'
        className='w-1/3 aspect-square object-cover object-center rounded-2xl'
      />
      <div className='flex flex-col gap-2 h-full justify-around items-start'>
        <p className=' text-2xl'>{data.title}</p>
        <p className=' text-gray_light text-sm'>
          email: <span className='text-black text-base'>{data.email}</span>
        </p>
        <div className='flex justify-between w-full items-center pe-4'>
          <p className='text-gray_light text-sm'>
            Адрес: <span className='text-black text-base'>{data.address}</span>
          </p>
          <a
            href={data.mapUrl}
            className='flex gap-2 rounded-2xl duration-200 transition-all p-4 hover:shadow-2xl hover:scale-95'>
            <Location className='w-5 h-5' />
            Мы на картах
          </a>
        </div>

        <div className='flex flex-col gap-2 items-start w-full'>
          <p>Контакты</p>
          <div className='flex items-center flex-wrap w-full'>
            {data.contacts.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col min-w-1/3 max-w-1/2 gap-2 w-full'>
                  <p className='truncate w-full max-w-full text-gray_light'>
                    {item.title}
                  </p>
                  <p className='truncate w-full max-w-full flex gap-2 items-center cursor-pointer'>
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
