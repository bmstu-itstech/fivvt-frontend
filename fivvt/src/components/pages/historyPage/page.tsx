'use client';
import React, {FC} from 'react';
import {historyUsecase} from './history.usecase';

import Image from 'next/image';
import {PageLayout} from '@/layouts/PageLayout';
const HistoryPage: FC = () => {
  return (
    <PageLayout
      title='История создания фонда'
      className='bg-gradient-to-t from-transparent to-black/80 from-95%'>
      <div className='w-full flex justify-center overflow-x-hidden h-dvh items-center '>
        <div className='w-80 flex h-full justify-center flex-col items-center max-w-maxContainer mx-auto'>
          {historyUsecase.map((item, index) => {
            return (
              <div
                className='flex w-full odd:animate-appear-start-block-1500 group
               even:animate-appear-end-block-1500  odd:flex-row-reverse
                 items-center justify-start odd:translate-x-[calc(-1*(50%-1rem))]
                  even:translate-x-[calc(50%-1rem)]'
                key={index}>
                <div className='flex flex-col h-fit group-first:mt-auto'>
                  <div className='w-1 h-16 bg-amber-400 mx-auto group-first:hidden' />
                  <div className='w-8 h-8 rounded-full border-2 border-amber-400' />
                </div>
                <div
                  className={`w-40 items-center flex flex-col translate-y-1/2 group-first:translate-y-0  group cursor-pointer relative`}>
                  <p>{item.year}</p>
                  <p>{item.title}</p>
                  <div
                    className={` duration-1000 transition-all
                  group-hover:translate-x-0 absolute opacity-0
                  group-hover:opacity-100  top-1/2 ${
                    index % 2 == 1
                      ? 'left-full translate-x-100'
                      : 'right-full -translate-x-100'
                  }  w-92 h-45 bg-transparent
                   border-2 border-amber-400 rounded-2xl
                    overflow-hidden -translate-y-full ${
                      index != historyUsecase.length - 1
                        ? '!-translate-y-1/2'
                        : ''
                    }  group-first:!-translate-y-0 
                     `}>
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
    </PageLayout>
  );
};

export default HistoryPage;
