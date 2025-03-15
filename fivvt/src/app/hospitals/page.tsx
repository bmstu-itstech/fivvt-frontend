'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {HospitalCard} from '@/components/HospitalCard';
import {AllHospitalUsecase} from '@/components/HospitalCard/HospitalCard.usecase';
const Page: FC = () => {
  return (
    <PageLayout title='Госпитали'>
      <div className='w-full gap-12 flex flex-col '>
        {AllHospitalUsecase.map((item, index) => {
          return (
            <HospitalCard
              className='even:flex-row-reverse'
              key={index}
              {...item}
            />
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Page;
