'use client';
import React, {FC} from 'react';
import {AboutFundPageUsecase} from './AboutFundPage.usecase';
import {PageLayout} from '@/layouts/PageLayout';
import Image from 'next/image';
import bg from '@/assets/10.jpg';
import Link from 'next/link';
const AboutFundPage: FC = () => {
  return (
    <PageLayout
      title={AboutFundPageUsecase.title}
      titleClassName='text-white text-4xl'
      className='h-dvh relative'>
      <Image
        src={bg.src}
        alt='war'
        width={1920}
        height={1080}
        className='-z-10 inset-0 absolute top-0 left-0  object-center object-cover brightness-20 h-full w-full'
      />
      <div className='relative p-4 border-white border rounded-md shadow shadow-white/60 '>
        <div className='absolute inset-0 bg-white/5 blur-sm'></div>
        <p className='relative text-center text-2xl text-white'>{AboutFundPageUsecase.text}</p>
      </div>
      <div className='h-full w-full items-center justify-center flex'>
        <Link
          href='/charity'
          className='text-white text-3xl shadow-sm shadow-white 
        border border-white p-4 rounded-2xl cursor-pointer 
        hover:scale-105 transition-transform animate-pulse-custom'>
          Поддержать
        </Link>
      </div>
    </PageLayout>
  );
};

export default AboutFundPage;
