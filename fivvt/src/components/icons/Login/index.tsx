import type {FC} from 'react';
import Props from './Login.props';
import Image from 'next/image';
import src from '@/assets/login.svg'

export const Login: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      className={`${className} `}
      {...props}
      src={src}
      alt='login'
      width={40}
      height={40}
    />
  );
};
