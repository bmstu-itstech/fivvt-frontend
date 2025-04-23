'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {BenefitsCardUsecase} from '@/components/BenefitCard/BenefitCard.usecase';
import {BenefitCard} from '@/components/BenefitCard';
const Page: FC = () => {
  return (
    <PageLayout title='Законодательство' className='overflow-hidden'>
      <div className='w-full flex flex-col gap-12 items-center'>
        {BenefitsCardUsecase.map((item, index) => {
          return (
            <BenefitCard
              key={index}
              data={item}
              className='odd:animate-appear-start-block-800 even:animate-appear-end-block-800'
            />
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Page;
