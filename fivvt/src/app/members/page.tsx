'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {allMemberCards} from '@/components/MemberCard/MemberCard.usecase';
import {MembersCard} from '@/components/MemberCard';
const Page: FC = () => {
  return (
    <PageLayout title='Правление'>
      <div className='w-full gap-12 flex flex-col '>
        {allMemberCards.map((item, index) => {
          return <MembersCard key={index} data={item} className='odd:flex-row-reverse' />;
        })}
      </div>
    </PageLayout>
  );
};

export default Page;
