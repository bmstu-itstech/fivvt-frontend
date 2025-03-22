'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {Card} from '@/components/Card';
import {
  CardQRUsecase,
  CardInformationUsecase,
} from '@/components/Card/Card.usecase';

const Page: FC = () => {
  return (
    <PageLayout title='Платежные реквизиты' className='overflow-hidden'>
      <div className='w-full  gap-[min(10%,5rem)] flex flex-nowrap'>
        <Card
          {...CardInformationUsecase}
          className=' animate-appear-start-block-800'
        />
        <Card {...CardQRUsecase} className=' animate-appear-end-block-800' />
      </div>
    </PageLayout>
  );
};

export default Page;
