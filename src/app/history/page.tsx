'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {historyUsecase} from './history.usecase';
import {firstUsecase} from './history.usecase';
const Page: FC = () => {
  return (
    <PageLayout title='История фонда' className='overflow-hidden'>
      <div className='w-full flex justify-center'>
        <div className='w-80 flex flex-col items-center '>
          <div className='flex w-full even:flex-row-reverse animate-appear-end-block-1500  items-center justify-start even:translate-x-[calc(-1*(50%-1rem))] odd:translate-x-[calc(50%-1rem)]'>
            <div className='flex self-end'>
              <div className='w-8 h-8 rounded-full border-2 border-amber-400' />
            </div>

            <div className='w-40 items-center  flex flex-col translate-y-1/4'>
              <p>{firstUsecase.year}</p>
              <p>{firstUsecase.desc}</p>
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

                <div className='w-40 items-center flex flex-col translate-y-1/2'>
                  <p>{item.year}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
