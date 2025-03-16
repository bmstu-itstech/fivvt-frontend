'use client';
import React, {FC, useEffect} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {HospitalCard} from '@/components/HospitalCard';
import {AllHospitalUsecase} from '@/components/HospitalCard/HospitalCard.usecase';
import {useGetHospitals} from '@/hooks/hospitals/useGetHospitals';
const Page: FC = () => {
  const {data, isLoading} = useGetHospitals();

  return (
    <PageLayout title='Госпитали'>
      <div className='w-full gap-12 flex flex-col '>
        {isLoading ? (
          <div>Грузимся</div>
        ) : (
          (data ?? []).map((item, index) => {
            return (
              <HospitalCard
                className='even:flex-row-reverse'
                key={index}
                data={item}
              />
            );
          })
        )}
      </div>
    </PageLayout>
  );
};

export default Page;
