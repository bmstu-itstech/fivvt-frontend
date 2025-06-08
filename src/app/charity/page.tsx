'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {Card} from '@/components/Card';
import {QR} from '@/components/icons/QR';
import {CardQRUsecase, CardInformationUsecase} from '@/components/Card/Card.usecase';

const Page: FC = () => {
  return (
    <>
      <PageLayout title='Платежные реквизиты' className='overflow-hidden hidden lg:flex'>
        <div className='w-full gap-[min(10%,5rem)] flex flex-nowrap'>
          <Card {...CardInformationUsecase} className=' animate-appear-start-block-800' />
          <Card {...CardQRUsecase} className=' animate-appear-end-block-800' />
        </div>
      </PageLayout>
      <PageLayout title='Платежные реквизиты' className='overflow-hidden lg:hidden flex !px-0'>
        <div className='w-full flex-col flex gap-4'>
          <div className='bg-amber-500 flex flex-col gap-2 w-full px-inline-main_px'>
            <h1>Поддержите наших бойцов</h1>
            <h4>Ваша помощь важна для фонда</h4>
            <div className='rounded-2xl size-2/5 max-w-40 bg-transparent animate-pulse border border-white'>
              <QR />
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
