'use client';
import React, {FC} from 'react';
import {historyUsecase} from './history.usecase';
import {HistoryCard} from './сomponents/HistoryCard';
import Image from 'next/image';
import {PageLayout} from '@/layouts/PageLayout';
const HistoryPage: FC = () => {
  return (
    <PageLayout
      title='История создания фонда'
      className='bg-gradient-to-t from-transparent to-black/80 from-95% h-dvh'>
      <div className='w-full flex justify-center overflow-x-hidden h-full items-center '>
        <div className='w-80 flex h-full justify-center flex-col items-center max-w-maxContainer mx-auto'>
          {historyUsecase.map((item, index) => {
            return (
              <HistoryCard
                item={item}
                key={index}
                ind={index}
                allCount={historyUsecase.length}
              />
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default HistoryPage;
