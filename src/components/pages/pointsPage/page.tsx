'use client';
import React, {FC} from 'react';
import {PointsUsecase} from './points.usecase';
import {PointCard} from './сomponents/HistoryCard';
import {PageLayout} from '@/layouts/PageLayout';
const PointsPage: FC = () => {
  return (
    <PageLayout className='bg-white h-dvh'>
      <div className='flex flex-col justify-between h-full w-full'>
        <p className='text-start w-full text-xl'>На текущий момент в состав Фонда входят: </p>
        <div className='w-full flex justify-center overflow-x-hidden h-full items-center '>
          <div className='w-80 flex h-full justify-center flex-col items-center max-w-maxContainer mx-auto'>
            {PointsUsecase.map((item, index) => {
              return (
                <PointCard item={item} key={index} ind={index} allCount={PointsUsecase.length} />
              );
            })}
          </div>
        </div>
        <p className='text-start w-full'>
          Особую ценность представляет бескорыстная работа ветеранов-альтруистов, которые
          безвозмездно оказывают помощь своим товарищам по оружию.
        </p>
      </div>
    </PageLayout>
  );
};

export default PointsPage;
