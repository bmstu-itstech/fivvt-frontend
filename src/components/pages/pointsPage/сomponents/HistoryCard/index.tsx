import type {FC} from 'react';
import type Props from './PointCard.props';
import {Divider} from '@/shared/components/Divider';
import Image from 'next/image';

export const PointCard: FC<Props> = ({item, ind, allCount}) => {
  return (
    <div
      className='flex w-full  group gap-8  odd:flex-row-reverse
                 items-end justify-start odd:translate-x-[calc(-1*(50%-1rem))]
                  even:translate-x-[calc(50%-1rem)]'
      key={ind}>
      <div className='flex flex-col h-fit group-first:mt-auto'>
        <div className='w-1 h-26 bg-amber-400 mx-auto group-first:hidden' />
        <div
          className='w-8 h-8 rounded-full border-2 border-amber-400'
          data-aos={ind % 2 == 1 ? 'fade-right' : 'fade-left'}
          data-aos-duration='1000'
          data-aos-delay={250 * ind}
        />
      </div>
      <div
        className={`w-52 items-center flex flex-col translate-y-1/4 group-first:translate-y-0  cursor-pointer relative`}>
        <p
          className='group-even:text-start group-odd:text-end text-balance w-fit text-xl'
          data-aos-duration='1000'
          data-aos={ind % 2 == 1 ? 'fade-down-left' : 'fade-down-right'}
          data-aos-delay={750}>
          {item.title}
        </p>
        <div
          className={` duration-1000 transition-all
                  group-hover:translate-x-0 absolute opacity-0
                  group-hover:opacity-100 group-first:!top-0 top-full ${
                    ind % 2 == 1 ? 'left-full translate-x-90' : 'right-full -translate-x-90'
                  }  w-72 h-65 bg-transparent
                   border-2 border-amber-400 rounded-2xl
                    overflow-hidden -translate-y-full ${
                      ind != allCount - 1 ? '!-translate-y-1/2 !top-1/2' : ''
                    }  group-first:!-translate-y-0 
                     `}>
          <Image
            src={item.photo}
            alt='event photo'
            width={400}
            height={400}
            className='object-center absolute top-0 left-0 object-cover w-full brightness-50 h-full -z-10'
          />
          <div className='w-full h-full flex flex-col items-center p-4 gap-2'>
            <p className='text-white text-center  text-xl'>{item.title}</p>
            <Divider className='bg-amber-400' />
            <p className='text-white/90 text-center h-full overflow-y-auto scrollbar text-pretty'>
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
