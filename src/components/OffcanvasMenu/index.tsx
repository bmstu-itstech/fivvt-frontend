'use client';
import type {FC} from 'react';
import {Props} from './OffcanvasMenu.props';
import {CrossIcon} from '../icons/CrossIcon';
import {Burger} from '../icons/BurgerMenu';
import React, {useCallback} from 'react';
import {MenuUsecase} from './OffcanvasMenu.usecase';
import {Offcanvas} from '@/layouts/OffcanvasLayout';
import {useOffcanvas} from '@/layouts/OffcanvasLayout/OffcanvasContext';
import Link from 'next/link';
export const OffcanvasMenu: FC<Props> = ({className}) => {
  const Content = useCallback(() => {
    const {setIsOpen} = useOffcanvas();
    return (
      <nav className='flex h-[min(80dvh,65rem)] !pr-12'>
        <CrossIcon
          isWhite
          className='absolute top-0 lg:top-16 size-20 right-7 cursor-pointer z-10'
          onClick={() => setIsOpen(prev => !prev)}
        />
        <ul className='flex flex-col justify-around w-fit h-full items-end'>
          {MenuUsecase.map(item => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className='text-white text-right text-4xl align-super text-pretty w-full max-w-5/6'>
                {item.title}
              </Link>
            );
          })}
        </ul>
      </nav>
    );
  }, []);

  return (
    <Offcanvas
      hasOverlayShadowing
      hideIconOnOpen
      icon={<Burger className='w-24 h-12' />}
      className={`z-10 cursor-pointer text-white rounded  bg-transparent ${className}`}>
      <Content />
    </Offcanvas>
  );
};
