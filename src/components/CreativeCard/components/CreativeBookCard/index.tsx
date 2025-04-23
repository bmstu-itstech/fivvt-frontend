import {CreativeBookCardLayout} from '@/layouts/CreativeBookCardLayout';
import type Props from './CreativeBookCard.props';
import {memo, type FC} from 'react';

const CreativeBookCard: FC<Props> = ({className, data, ...props}) => {
  return (
    <CreativeBookCardLayout href={data.href} photo={data.photo} {...props}>
      <div className='w-full flex flex-col items-center gap-2 h-fit z-10 max-w-5/6 '>
        <p className='text-white '>{data.year}</p>
        <p className='text-white text-lg text-center line-clamp-2'>
          {data.label}
        </p>
      </div>
    </CreativeBookCardLayout>
  );
};

export default memo(CreativeBookCard);
