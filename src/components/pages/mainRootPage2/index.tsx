'use client';
import type {FC} from 'react';
import Image from 'next/image';
import {PageLayout} from '@/layouts/PageLayout';
import {Divider} from '@/shared/components/Divider';
import {MainRootPage2Usecase} from './MainRootPage2.usecase';
export const MainRootPage2: FC = () => {
  return (
    <PageLayout className='mx-auto bg-white shadow-inner shadow-black'>
      <div className='flex w-full gap-4 h-full flex-row-reverse'>
        <div className='w-full max-w-2/3 flex flex-col p-2 h-full justify-between items-center'>
          <div className='flex flex-col h-full  gap-4 w-full items-center'>
            <p
              className='text-2xl w-full truncate text-center'
              data-aos='fade-down'
              data-aos-duration='1000'>
              {MainRootPage2Usecase.title}
            </p>
            <Divider className=' bg-black' />
          </div>
          <div className='w-full h-fit pt-4' data-aos='zoom-in-left' data-aos-duration='1000'>
            <p className='line-clamp-10 text-ellipsis whitespace-pre-wrap'>
              {MainRootPage2Usecase.text_desc}
            </p>
          </div>
        </div>
        <Image
          src={MainRootPage2Usecase.photo}
          data-aos='fade-right'
          data-aos-duration='1000'
          alt='member'
          width={800}
          height={800}
          className='object-center object-cover p-2 h-full rounded-2xl aspect-square w-1/3 max-w-1/3 cursor-pointer'
        />
      </div>
    </PageLayout>
  );
};
