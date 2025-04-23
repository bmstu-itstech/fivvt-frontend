import type {FC} from 'react';
import Props from './PenIcon.props';
import Image from 'next/image';
import src from '@/assets/pen.svg';

export const PenIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={className ?? ''}
      {...props}
      alt='PenIcon'
      width={600}
      height={600}
    />
  );
};
