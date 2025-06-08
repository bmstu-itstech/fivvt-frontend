'use client';
import type {FC} from 'react';
import Image from 'next/image';
import {Button} from '@/shared/components/Button';
import {useRouter} from 'next/navigation';
import war from '@/assets/war_bg_1.jpg';
import {MainPageUsecase} from './MainPage.usecase';

export const MainPage: FC = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col relative w-full h-dvh bg-gradient-to-b from-transparent to-black/90 from-60%'>
      <Image
        src={war}
        alt='war'
        width={1920}
        height={1080}
        className='-z-10 absolute top-0 left-0  object-center object-cover brightness-20 h-full w-full'
      />
      <div className='flex w-full justify-between overflow-hidden max-w-maxContainer mx-auto'>
        <div
          data-twe-animation-on-scroll='repeat'
          className='flex flex-col justify-center gap-8 items-center z-10  text-white w-full max-w-1/2  animate-appear-start-block-1500'>
          <p className='text-2xl text-center max-w-1/2'>{MainPageUsecase.title}</p>
          <Button
            onClick={() => {
              router.push('/charity');
            }}
            className='border-white/60 animate-pulse-custom border-2 !h-32 hover:bg-green_main hover:text-gray_light hover:border-gray_light duration-200 transition-all'>
            Поддержать
          </Button>
        </div>

        <div
          className=' h-[clamp(16rem,54vh,22rem)] animate-appear-end-block-1500  bg-transparent border-b-2 border-l-2
         text-white flex flex-col gap-4 justify-center items-start
           border-white/20 rounded-bl-2xl py-4 ps-8 pe-inline-main_px 
           text-pretty w-fit max-w-1/2 whitespace-pre-wrap'>
          <p className='pb-2'>{MainPageUsecase.text_desc}</p>
          {/* <p>
            Сегодня это почти 60 инвалидов 1 группы и около 300 - 2 группы.
            Остальная часть их составляет инвалиды 3 группы и ветераны боевых
            действий, своим посильным вкладов оказывающих помощь собратьям по
            оружию.
          </p> */}
        </div>
      </div>
    </div>
  );
};
