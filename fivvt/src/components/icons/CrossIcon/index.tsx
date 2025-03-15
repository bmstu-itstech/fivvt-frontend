import type {FC} from 'react';
import type Props from './CrossIcon.props';
import Image from 'next/image';
import src from '@/assets/cross.svg';

export const CrossIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='Cross'
      width={20}
      height={20}
    />
  );
};
