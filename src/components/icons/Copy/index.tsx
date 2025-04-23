import type {FC} from 'react';
import { Props } from './Copy.props';
import Image from 'next/image';
import src from '@/assets/copy.svg';

export const Copy: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='Copy'
      width={20}
      height={20}
    />
  );
};
