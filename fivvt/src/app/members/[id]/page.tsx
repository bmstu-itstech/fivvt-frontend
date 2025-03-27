'use client';
import React, {FC, useEffect} from 'react';
import {useGetBoardById} from '@/hooks/boards/useGetBoardById';
import Image from 'next/image';
import {BoardsPlaceholder} from '@/utils/placeholder/boards';
import {usePathname} from 'next/navigation';
import no_photo from '@/assets/members.svg';
const Page = (id: number) => {
  // const {data, isLoading} = useGetBoardById(1);
  const path = usePathname();
  const idd = Number(path.slice(path.lastIndexOf('/') + 1));
  const data = BoardsPlaceholder.find(item => (item.id = idd));

  return (
    <div className='w-full flex flex-col px-inline-main_px py-10 max-w-maxContainer'>
      <p className='text-2xl pb-4'>{data?.full_name}</p>
      <p className='max-w-96 w-full truncate pb-8 text-gray-600'>
        {data?.post}
      </p>
      <div className='w-full flex gap-6'>
        <Image
          src={data?.image ?? no_photo}
          alt='person'
          height={600}
          width={600}
          className='w-80 h-96 object-center object-cover rounded-2xl'
        />
        <p className='w-full text-pretty'>{data?.biography}</p>
      </div>
    </div>
  );
};

export default Page;
