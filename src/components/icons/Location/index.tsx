import type {FC} from 'react';
import { Props } from './Location.props';
import Image from 'next/image';
import src from '@/assets/location.svg';

export const Location: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className}`}
      {...props}
      src={src}
      alt='location'
      width={40}
      height={40}
    />
  );
};
