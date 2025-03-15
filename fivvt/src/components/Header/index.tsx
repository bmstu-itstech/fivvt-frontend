'use client';
import type {FC} from 'react';
import type Props from './Header.props';
import {useRouter} from 'next/navigation';
export const Header: FC<Props> = ({className, head, tail, ...props}) => {
  const router = useRouter();
  return (
    <header
      className={`${className} w-full sticky  h-16 flex justify-between px-inline-main_px items-center`}
      {...props}>
      <button
        className='bg-transparent border-0'
        onClick={() => {
          router.push('/');
        }}>
        {head}
      </button>

      {tail}
    </header>
  );
};
