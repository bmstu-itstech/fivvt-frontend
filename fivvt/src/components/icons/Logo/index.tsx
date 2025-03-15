'use client';
import type {FC} from 'react';
import type Props from './Logo.props';
import Image from 'next/image';
import src from '@/assets/logo.svg';

export const Logo: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={`${className}`}
      style={{cursor: 'pointer'}}
      {...props}
      alt='logo'
      width={550}
      height={200}
    />
  );
};
