'use client';
import React, {FC} from 'react';
import {historyUsecase} from './history.usecase';
import {firstUsecase} from './history.usecase';
import Image from 'next/image';
const HistoryPage: FC = () => {
  return (
    <div className='w-full flex justify-center overflow-x-hidden h-dvh items-center bg-gradient-to-t from-transparent to-black/80 from-95%'>
      <div className='w-80 flex flex-col items-center '>
        <div className='flex w-full even:flex-row-reverse animate-appear-end-block-1500  items-center justify-start even:translate-x-[calc(-1*(50%-1rem))] odd:translate-x-[calc(50%-1rem)]'>
          <div className='flex self-end'>
            <div className='w-8 h-8 rounded-full border-2 border-amber-400' />
          </div>

          <div className='w-40 items-center  flex flex-col translate-y-1/4'>
            <p>{firstUsecase.year}</p>
            <p>{firstUsecase.title}</p>
          </div>
        </div>

        {historyUsecase.map((item, index) => {
          return (
            <div
              className='flex w-full even:animate-appear-start-block-1500 odd:animate-appear-end-block-1500  even:flex-row-reverse  items-center justify-start even:translate-x-[calc(-1*(50%-1rem))] odd:translate-x-[calc(50%-1rem)]'
              key={index}>
              <div className='flex flex-col'>
                <div className='w-1 h-12 bg-amber-400 mx-auto' />
                <div className='w-8 h-8 rounded-full border-2 border-amber-400' />
              </div>
              <div className='w-40 items-center flex flex-col translate-y-1/2 group cursor-pointer relative'>
                <p>{item.year}</p>
                <p>{item.title}</p>
                <div
                  className={` duration-1000 transition-all
                  group-hover:translate-x-0 absolute opacity-0
                  group-hover:opacity-100 top-1/2 ${
                    index % 2 == 1
                      ? 'left-full translate-x-100'
                      : 'right-full -translate-x-100'
                  }  w-92 h-45 bg-transparent
                   border-2 border-amber-400 rounded-2xl overflow-hidden -translate-y-1/2`}>
                  <Image
                    src={item.photo}
                    alt='event photo'
                    width={400}
                    height={400}
                    className='object-center object-cover w-full h-full'
                  />
                  <div className='w-1/2 h-1/2 absolute z-20 bottom-0 right-0 bg-white rounded-tl-2xl overflow-hidden' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryPage;
