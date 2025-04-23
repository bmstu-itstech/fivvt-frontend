'use client';
import React, {FC, useEffect} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {HospitalCard} from '@/components/HospitalCard';
import {HospitalCardSkeleton} from '@/components/HospitalCard/HospitalCard.skeleton';
import {useGetHospitals} from '@/hooks/hospitals/useGetHospitals';
const Page: FC = () => {
  const {data, isLoading} = useGetHospitals();

  return (
    <PageLayout title='Госпитали' className='overflow-x-hidden'>
      {isLoading || !data ? (
        <>
          <HospitalCardSkeleton />
          <HospitalCardSkeleton />
          <HospitalCardSkeleton />
        </>
      ) : (
        <>
          <div className='w-full gap-12 flex flex-col '>
            {data.map((item, index) => {
              return (
                <HospitalCard
                  className='even:flex-row-reverse'
                  key={index}
                  data={item}
                />
              );
            })}
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default Page;
