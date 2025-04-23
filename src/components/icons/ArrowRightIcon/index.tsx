import type {FC} from 'react';
import { Props } from './ArrowRightIcon.props';
import Image from 'next/image';
import src from '@/assets/arrow_right.svg';

export const ArrowRightIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='ArrowRightIcon'
      width={40}
      height={40}
    />
  );
};
