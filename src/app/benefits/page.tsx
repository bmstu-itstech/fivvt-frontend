'use client';
import React, {FC, useEffect, useState} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {BenefitsCardUsecase} from '@/components/BenefitCard/BenefitCard.usecase';
import {BenefitCard} from '@/components/BenefitCard';
import {HorizontalSelect} from '@/components/HorizontalSelect';
import {HorizontalSelectDefaultUsecase} from '@/components/HorizontalSelect/HorizontalSelected.usecase';
const Page: FC = () => {
  const [lgota, setLgota] = useState<string>(HorizontalSelectDefaultUsecase[0]);
  useEffect(() => {
    console.log(lgota);
  }, [lgota]);
  const allCategories = 'Все категории';
  return (
    <PageLayout title='Законодательство' className='overflow-hidden'>
      <HorizontalSelect
        active={lgota}
        setSelected={setLgota}
        variants={HorizontalSelectDefaultUsecase}
      />
      <div className='w-full flex flex-col gap-12 items-center'>
        {BenefitsCardUsecase.filter(item => item.lgota == lgota || lgota == allCategories).map(
          (item, index) => {
            return (
              <BenefitCard
                key={index}
                data={item}
                className='odd:animate-appear-start-block-800 even:animate-appear-end-block-800'
              />
            );
          },
        )}
      </div>
    </PageLayout>
  );
};

export default Page;
