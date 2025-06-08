'use client';
import './style.css';
import type {FC} from 'react';
import {Props} from './OffcanvasMenu.props';
import {CrossIcon} from '../icons/CrossIcon';
import {Burger} from '../icons/BurgerMenu';
import React from 'react';
import {MenuUsecase} from './OffcanvasMenu.usecase';
import {Offcanvas} from '@/layouts/OffcanvasLayout';
export const OffcanvasMenu: FC<Props> = ({className}) => {
  return (
    <Offcanvas
      hasOverlayShadowing
      isOpenedObject={<CrossIcon className='w-12 h-12' />}
      isClosedObject={<Burger className='w-24 h-12' />}
      className={`z-10 cursor-pointer text-white rounded  bg-transparent ${className}`}>
      <nav className='flex h-[min(80dvh,65rem)] !pr-12'>
        <ul className='flex flex-col justify-around w-fit h-full'>
          {MenuUsecase.map(item => {
            return (
              <li key={item.id} className='w-full justify-end items-center text-right flex menu-el'>
                <a
                  href={item.href}
                  className='text-white text-5xl lg:text-7xl align-super transition-transform duration-300'>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Offcanvas>
  );
};
