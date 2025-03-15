'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {EventCard} from '@/components/EventCard';
import {allEventCards} from '@/components/EventCard/EventCard.usecase';
const Page: FC = () => {
  return (
    <PageLayout title='Мероприятия'>
      <div className='w-full flex flex-wrap'>
        {allEventCards.map((item, index) => {
          return (
            <div
              key={index}
              className='px-2 py-2 w-1/4 flex justify-center items-center'>
              <EventCard className='w-full h-full' {...item}></EventCard>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Page;
