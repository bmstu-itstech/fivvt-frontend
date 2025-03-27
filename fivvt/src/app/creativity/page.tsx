'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {CreativeCardUsecases} from '@/components/CreativeCard/CreativeCard.usecase';
import {CreativeCard} from '@/components/CreativeCard';


const Page: FC = () => {
  return (
    <PageLayout title='Творчество ветеранов' className='overflow-hidden'>
      <div className='w-full flex flex-col gap-4'>
        {CreativeCardUsecases.map((item, index) => {
          return <CreativeCard data={item} key={index} />;
        })}
      </div>
    </PageLayout>
  );
};

export default Page;
