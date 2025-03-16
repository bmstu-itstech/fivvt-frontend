'use client';
import type Props from './Card.props';
import {QR} from '../icons/QR';
import {Button} from '@/shared/components/Button';
import {Copy} from '../icons/Copy';

export const CardQRUsecase: Props = {
  data: (
    <QR className='w-full object-cover object-center aspect-square h-full' />
  ),
};

interface DataBit {
  title: string;
  value: string;
}

const DataInformationUsecase: DataBit[] = [
  {
    title: 'ИНН',
    value: '7731223439',
  },
  {
    title: 'КПП',
    value: '771901001',
  },
  {
    title: 'БИК',
    value: '044525225',
  },
  {
    title: 'р/с',
    value: '40703810738250001512',
  },
];

export const CardInformationUsecase: Props = {
  data: (
    <div className='flex flex-col justify-evenly items-start'>
      {DataInformationUsecase.map((item, index) => {
        return (
          <div key={index} className='flex flex-col gap-2'>
            <p className='text-xl font-medium ps-6'>{item.title}</p>
            <Button
              icon={<Copy className='w-5 h-5' />}
              onClick={() => {
                window.navigator.clipboard.writeText(`${item.value}`);
              }}
              className='!py-2 cursor-pointer flex'>
              {item.value}
            </Button>
          </div>
        );
      })}
    </div>
  ),
};
