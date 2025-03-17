import type {FC} from 'react';
import type Props from './DocumentIcon.props';
import Image from 'next/image';
import src from '@/assets/documents.svg';

export const DocumentIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className ?? ''} `}
      {...props}
      src={src}
      alt='DocumentIcon'
      width={20}
      height={20}
    />
  );
};
