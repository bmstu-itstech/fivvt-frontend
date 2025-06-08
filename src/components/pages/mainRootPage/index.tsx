'use client';
import type {FC} from 'react';
import Image from 'next/image';
import {Button} from '@/shared/components/Button';
import {useRouter} from 'next/navigation';
import war from '@/assets/war_bg_1.jpg';
import {MainRootPageUsecase} from './MainRootPage.usecase';
import {PageLayout} from '@/layouts/PageLayout';
import {Divider} from '@/shared/components/Divider';
export const MainRootPage: FC = () => {
  return (
    <PageLayout className='mx-auto bg-white shadow-inner shadow-black'>
      <div className='flex w-full h-full'>
        <div className='w-full max-w-2/3 flex flex-col p-2 h-full justify-between items-center'>
          <div className='flex flex-col h-full  gap-4 w-full items-center'>
            <p className='text-2xl w-full truncate text-center'>{MainRootPageUsecase.title}</p>
            <Divider className=' bg-black' />
          </div>
          <div className='w-full h-fit pt-4'>
            <p className='line-clamp-10 text-ellipsis whitespace-pre-wrap'>
              {MainRootPageUsecase.text_desc}
            </p>
          </div>
        </div>
        <Image
          src={MainRootPageUsecase.photo}
          alt='member'
          width={800}
          height={800}
          className='object-center object-cover p-2 h-full rounded-2xl aspect-square w-1/3 max-w-1/3 cursor-pointer'
        />
      </div>
    </PageLayout>
  );
};
