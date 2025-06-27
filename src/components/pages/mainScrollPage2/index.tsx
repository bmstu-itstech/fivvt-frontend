'use client';
import type {FC} from 'react';
import Image from 'next/image';
import {Divider} from '@/shared/components/Divider';
import {EmblaOptionsType} from 'embla-carousel';
import EmblaCarousel from '@/components/EmblaCarousel';
import {MainScrollPage2Usecase} from './mainScrollPage2.usecase';

export const MainScrollPage2: FC = () => {
  const OPTIONS: EmblaOptionsType = {loop: true};
  return (
    <div className='flex flex-col relative w-full h-dvh bg-gradient-to-b from-transparent to-black/90 from-60%'>
      <Image
        src={MainScrollPage2Usecase.photo}
        alt='war'
        width={1920}
        height={1080}
        className='-z-10 inset-0 absolute top-0 left-0  object-center object-cover brightness-20 h-full w-full'
      />
      <div className='flex w-full justify-end items-center translate-y-1/5 h-full overflow-hidden max-w-maxContainer mx-auto'>
        <div
          className=' bg-transparent
         text-white flex flex-col gap-4 justify-center items-end
           rounded-bl-2xl py-4 ps-8 pe-inline-main_px 
           text-pretty w-fit max-w-1/2 whitespace-pre-wrap select-none'>
          <Divider className='bg-white' data-aos='fade-down' data-aos-duration='1000' />
          <EmblaCarousel
            hasDots
            data-aos='fade-left'
            data-aos-duration='1000'
            screenTime={8000}
            className='h-max'
            imageClassname='rounded-xl aspect-sque h-full w-full max-h-full'
            options={OPTIONS}
            slides={MainScrollPage2Usecase.text.map((item, id) => (
              <p className=' leading-normal text-pretty text-lg' key={id}>{item}</p>
            ))}
          />
        </div>
      </div>
    </div>
  );
};
