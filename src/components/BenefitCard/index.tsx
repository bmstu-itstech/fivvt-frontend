'use client';
import {BenefitCardLayout} from '@/layouts/BenefitCardLayout';
import type {FC} from 'react';
import type Props from './BenefitCard.props';
import {RemoteArrow} from '../icons/RemoteArrow';
export const BenefitCard: FC<Props> = ({className, data, ...props}) => {
  return (
    <BenefitCardLayout className={`${className} `} {...props}>
      <div className='w-full flex-col gap-6 flex items-start justify-start h-full'>
        <p className='h-10 px-2.5 flex items-center justify-center rounded-2xl text-sm text-white bg-amber-400 '>
          {data.lgota}
        </p>
        <p className='text-lg text-gray-700 font-medium'>{data.type_of_lgota}</p>
        <div className='flex gap-y-4 w-full flex-wrap min-h-20 h-fit'>
          {data.value.map((item, index) => {
            return (
              <div key={index} className='flex w-1/2 pe-8 flex-wrap'>
                <a
                  href={item.href}
                  className={`${
                    item.href ? 'cursor-pointer hover:shadow hover:scale-95' : ''
                  } flex gap-1 duration-200 w-fit transition-all text-gray-700 text-wrap relative`}>
                  ✔️ {item.title}
                  {item.href && <RemoteArrow className='w-4 h-4 absolute left-full top-0' />}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </BenefitCardLayout>
  );
};
