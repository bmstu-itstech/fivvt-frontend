import type {FC} from 'react';
import { Props } from './HelpfullIcon.props';
import Image from 'next/image';
import src from '@/assets/helpful_icon.svg';

export const HelpfullIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className}`}
      {...props}
      src={src}
      alt='HelpfullIcon'
      width={40}
      height={40}
    />
  );
};
