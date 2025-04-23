import type {FC} from 'react';
import { Props } from './HistoryIcon.props';
import Image from 'next/image';
import src from '@/assets/history.svg';

export const HistoryIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='HistoryIcon'
      width={20}
      height={20}
    />
  );
};
