import type {FC} from 'react';
import type Props from './Money.props';
import Image from 'next/image';
import src from '@/assets/money.svg';

export const Money: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='Money'
      width={20}
      height={20}
    />
  );
};
