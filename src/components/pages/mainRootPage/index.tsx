'use client';
import type {FC} from 'react';
import Image from 'next/image';
import {MainRootPageUsecase} from './MainRootPage.usecase';
import {PageLayout} from '@/layouts/PageLayout';
import {Divider} from '@/shared/components/Divider';
import EmblaCarousel from '@/components/EmblaCarousel';
import {EmblaOptionsType} from 'embla-carousel';

export const MainRootPage: FC = () => {
  const OPTIONS: EmblaOptionsType = {loop: true};
  return (
    <PageLayout className='mx-auto bg-white shadow-inner shadow-black'>
      <div className='flex flex-col-reverse lg:flex-row w-full h-full'>
        <div className='w-full lg:max-w-2/3 flex flex-col p-2 h-full justify-between items-center'>
          <div className='flex flex-col h-full  gap-4 w-full items-center'>
            <p
              className='text-2xl w-full lg:truncate text-pretty text-center'
              data-aos='fade-down'
              data-aos-duration='1000'>
              {MainRootPageUsecase.title}
            </p>
            <Divider className=' bg-black' />
          </div>
          <div className='w-full h-fit pt-4' data-aos='zoom-in-right' data-aos-duration='1000'>
            <div className='w-full h-fit flex-col gap-4 hidden lg:flex'>
              {MainRootPageUsecase.text_desc.map((item, id) => {
                return (
                  <p
                    key={id}
                    className='text-pretty text-lg line-clamp-6 text-ellipsis text-center w-full lg:text-start  whitespace-pre-wrap'>
                    {item}
                  </p>
                );
              })}
            </div>
            <div className='lg:hidden'>
              <EmblaCarousel
                hasDots
                data-aos='fade-left'
                data-aos-duration='1000'
                options={OPTIONS}
                screenTime={8000}
                slides={MainRootPageUsecase.text_desc.map((item, index) => (
                  <p key={index} className='leading-normal text-pretty select-none text-lg'>
                    {item}
                  </p>
                ))}
              />
            </div>
          </div>
        </div>
        <Image
          src={MainRootPageUsecase.photo}
          data-aos='fade-left'
          data-aos-duration='1000'
          alt='member'
          width={800}
          height={800}
          className='object-center object-cover lg:p-2 h-full rounded-2xl aspect-square lg:w-1/3 lg:max-w-1/3 cursor-pointer'
        />
      </div>
    </PageLayout>
  );
};
