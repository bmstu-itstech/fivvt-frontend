'use client';
import type {FC} from 'react';
import Image from 'next/image';
import {MainScrollPageUsecase} from './mainScrollPage.usecase';
import {Divider} from '@/shared/components/Divider';
import {EmblaOptionsType} from 'embla-carousel';
import EmblaCarousel from '@/components/EmblaCarousel';

export const MainScrollPage: FC = () => {
  const OPTIONS: EmblaOptionsType = {loop: true};
  return (
    <div className='relative w-full h-dvh bg-gradient-to-b from-transparent to-black/90 from-60% overflow-hidden'>
      <div className='fixed -z-10 inset-0 w-full max-w-full'>
        <Image
          src={MainScrollPageUsecase.photo}
          alt='war'
          fill
          className='object-cover object-center brightness-20 w-full h-full'
          quality={100}
        />
      </div>
      <div className='flex w-full justify-end items-center translate-y-1/5 h-full overflow-hidden max-w-maxContainer mx-auto'>
        <div className='bg-transparent max-w-1/2 text-white flex flex-col gap-4 items-end rounded-bl-2xl py-4 ps-8 pe-inline-main_px'>
          <Divider className='bg-white' data-aos='fade-down' data-aos-duration='1000' />
          <EmblaCarousel
            hasDots
            data-aos='fade-left'
            data-aos-duration='1000'
            options={OPTIONS}
            screenTime={8000}
            slides={MainScrollPageUsecase.text.map((item, index) => (
              <p key={index} className='leading-normal text-pretty select-none text-lg'>
                {item}
              </p>
            ))}
          />
        </div>
      </div>
    </div>
  );
};
