import type {FC} from 'react';
import type Props from './MemberCard.props';
import {MemberCardLayout} from '@/layouts/MemberCardLayout';
import Image from 'next/image';
import {Divider} from '@/shared/components/Divider';
export const MembersCard: FC<Props> = ({className, data, ...props}) => {
  return (
    <MemberCardLayout
      className={`${className} w-full flex justify-between  items-center max-h-95 h-95`}
      {...props}>
      <div className='w-full flex flex-col p-2 h-full justify-between items-center max-w-2/3'>
        <div className='flex flex-col  gap-4 w-full items-center'>
          <p className='text-2xl w-full truncate text-center'>
            {data.full_name}
          </p>
          <Divider className=' bg-black' />
          <p className='text-xl w-full truncate text-center'>{data.post}</p>
        </div>
        <div className='w-full pb-20'>
          <p className='line-clamp-6 text-ellipsis text-sm'>{data.biography}</p>
        </div>
      </div>
      <Image
        src={data.image}
        alt='member'
        width={800}
        height={800}
        className='object-center object-cover p-2 h-full rounded-2xl aspect-square w-1/3 max-w-1/3 cursor-pointer'
      />
    </MemberCardLayout>
  );
};
