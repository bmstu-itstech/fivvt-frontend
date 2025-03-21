import {BenefitCardLayout} from '@/layouts/BenefitCardLayout';
import type {FC} from 'react';
import type Props from './BenefitCard.props';
import {Divider} from '@/shared/components/Divider';
import {RemoteArrow} from '../icons/RemoteArrow';
export const BenefitCard: FC<Props> = ({className, data, ...props}) => {
  return (
    <BenefitCardLayout className={`${className} h-56 `} {...props}>
      <div className='w-full flex justify-between items-center h-full'>
        <p className='h-full flex items-start justify-center text-xl'>
          {data.title}
        </p>
        <Divider isVertical className='bg-gray-200 ms-auto me-8' />
        <div className='h-full flex flex-col gap-4 w-1/2'>
          {data.value.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                className={`${
                  item.href ? 'cursor-pointer hover:shadow hover:scale-95' : ''
                } flex gap-1 duration-200 transition-all truncate w-full max-w-full  px-2`}>
                {item.title} {item.href && <RemoteArrow className='w-4 h-4' />}
              </a>
            );
          })}
        </div>
      </div>
    </BenefitCardLayout>
  );
};
