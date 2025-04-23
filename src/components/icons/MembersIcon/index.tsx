import type {FC} from 'react';
import { Props } from './MembersIcon.props';
import Image from 'next/image';
import src from '@/assets/members.svg';

export const MembersIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='MembersIcon'
      width={20}
      height={20}
    />
  );
};
