import type {FC} from 'react';
import Props from './Hospital.props';
import Image from 'next/image';
import src from '@/assets/hospital_icon.svg';

export const Hospital: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className}`}
      {...props}
      src={src}
      alt='Hospital'
      width={40}
      height={40}
    />
  );
};
