import type {FC} from 'react';
import Props from './QR.props';
import Image from 'next/image';
import src from '@/assets/qr_payment.png';

export const QR: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={className}
      {...props}
      alt='qr'
      width={600}
      height={600}
    />
  );
};
