import type {FC} from 'react';
import type Props from './CrossIcon.props';
import Image from 'next/image';
import src from '@/assets/cross.svg';
import src_white from '@/assets/cross_white.svg';

export const CrossIcon: FC<Props> = ({
  className,
  isWhite = false,
  ...props
}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={isWhite ? src_white : src}
      alt='Cross'
      width={20}
      height={20}
    />
  );
};
