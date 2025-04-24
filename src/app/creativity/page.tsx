'use client';
import React, {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {CreativeCardUsecases} from '@/components/CreativeCard/CreativeCard.usecase';
import {CreativeCard} from '@/components/CreativeCard';

const Page: FC = () => {
  // const data = useGet...
  // const itemsPerPage = 3;
  const data = CreativeCardUsecases;
  // const NextData = useCallback(() => {}, []);
  // const PrevData = useCallback(() => {}, []);
  return (
    <PageLayout title='Творчество ветеранов' className='overflow-hidden'>
      <div className='w-full flex flex-col gap-4'>
        {data.map((item, index) => {
          return <CreativeCard data={item} key={index} />;
        })}
      </div>
      {/* <Pagination
        clickNext={NextData}
        clickPrev={PrevData}
        itemsPerSlide={itemsPerPage}
        countOfItems={CreativeCardUsecases.length}
      /> */}
    </PageLayout>
  );
};

export default Page;
