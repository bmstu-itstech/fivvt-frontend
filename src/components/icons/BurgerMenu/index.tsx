import type {FC} from 'react';
import { Props } from './Burger.props';
import Image from 'next/image';
import src from '@/assets/burger_icon.svg';

export const Burger: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='Burger'
      width={20}
      height={20}
    />
  );
};
