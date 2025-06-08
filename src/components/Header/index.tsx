'use client';
import type {FC} from 'react';
import type Props from './Header.props';
import {useRouter} from 'next/navigation';
export const Header: FC<Props> = ({className, head, tail, ...props}) => {
  const router = useRouter();
  return (
    <header className={`${className} z-10 w-full bg-white sticky h-16 `} {...props}>
      <div className='w-full mx-auto h-full max-w-maxContainer flex justify-between items-center px-inline-main_px_mobile lg:px-inline-main_px'>
        <button
          className='bg-transparent border-0'
          onClick={() => {
            router.push('/');
          }}>
          {head}
        </button>

        {tail}
      </div>
    </header>
  );
};
