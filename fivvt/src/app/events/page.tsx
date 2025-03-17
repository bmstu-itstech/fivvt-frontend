'use client';
import React, {FC, useEffect} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {EventCard} from '@/components/EventCard';
import {useGetAlbums} from '@/hooks/albums/useGetAlbums';
import {EventCardSkeleton} from '@/components/EventCard/EventCard.skeleton';
const Page: FC = () => {
  const {data, isLoading} = useGetAlbums();
  useEffect(() => {
    console.log(data);
  }, [isLoading]);
  return (
    <PageLayout title='Мероприятия'>
      <div className='w-full flex flex-wrap'>
        {isLoading || !data ? (
          <>
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
          </>
        ) : (
          data.map((item, index) => {
            return (
              <div
                key={index}
                className='px-2 py-2 w-1/4 flex justify-center items-center'>
                <EventCard className='w-full h-full' data={item} />
              </div>
            );
          })
        )}
      </div>
    </PageLayout>
  );
};

export default Page;
