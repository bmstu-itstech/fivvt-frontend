'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {MembersCard} from '@/components/MemberCard';
import {useGetBoards} from '@/hooks/boards/useGetBoards';
import {MemberCardSkeleton} from '@/components/MemberCard/MemberCard.skeleton';
const Page: FC = () => {
  const {data, isLoading} = useGetBoards();
  return (
    <PageLayout title='Правление' className='bg-[#e8e0d050]'>
      <div className='w-full gap-12 flex flex-col '>
        {isLoading || !data ? (
          <>
            <MemberCardSkeleton />
            <MemberCardSkeleton />
            <MemberCardSkeleton />
          </>
        ) : (
          data.map((item, index) => {
            return <MembersCard key={index} data={item} className='odd:flex-row-reverse' />;
          })
        )}
      </div>
    </PageLayout>
  );
};

export default Page;
