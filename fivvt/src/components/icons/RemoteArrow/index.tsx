import type {FC} from 'react';
import Props from './RemoteArrow.props';
import Image from 'next/image';
import src from '@/assets/remote_arrow_icon.svg';

export const RemoteArrow: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={className}
      {...props}
      alt='RemoteArrow'
      width={600}
      height={600}
    />
  );
};
