'use client';
import {type FC} from 'react';
import type Props from './DropdownActions.props';
export const DropDownActions: FC<Props> = ({className, items, ...props}) => {
  return (
    <ul className='flex relative gap-6'>
      <li className='group w-fit'>
        <a className='h-4'>wefknwlenfwelfnts</a>
        <ul className='block group-hover:animate-appear animate-disappear absolute bg-red-500 w-dvw left-0 pl-28 pt-5 top-6'>
          <li className=''>
            <a>aaaaa</a>
          </li>
          <li className=''>
            <a>bbbbb</a>
          </li>
          <li className=''>
            <a>ccccc</a>
          </li>
          <li className=''>
            <a>dddd</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
