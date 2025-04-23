import type {FC} from 'react';
import type Props from './EventsIcon.props';
import Image from 'next/image';
import src from '@/assets/events.svg';

export const EventsIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='EventsIcon'
      width={20}
      height={20}
    />
  );
};
