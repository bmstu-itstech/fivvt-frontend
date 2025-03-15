import type {FC} from 'react';
import type Props from './About.props';
import Image from 'next/image';
import src from '@/assets/about.svg';

export const About: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='About'
      width={20}
      height={20}
    />
  );
};
