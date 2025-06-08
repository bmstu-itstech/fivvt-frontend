'use client';
import {type FC} from 'react';
import type Props from './DropdownActions.props';
export const DropDownActions: FC<Props> = ({className, items, ...props}) => {
  return (
    <ul className={`${className} relative w-full h-14 bg-gray_light_xl hidden lg:block`} {...props}>
      <div className='flex  justify-between items-center w-full h-full px-inline-main_px max-w-maxContainer mx-auto'>
        {items.map((item, index) => {
          return (
            <li className='group w-fit h-full flex items-center' key={index}>
              <div className='hover:shadow px-2 flex items-center hover:scale-95 duration-200 transition-all h-full rounded-md'>
                {item.href ? (
                  <a href={item.href} className='h-full flex items-center cursor-pointer  '>
                    {item.icon}
                    {item.visual}
                  </a>
                ) : (
                  <p className='h-fit flex items-center'>
                    {item.icon}
                    {item.visual}
                  </p>
                )}
              </div>

              <div
                className={`hidden mx-auto bg-gray_light_xl w-full h-fit transition-all py-4 ${
                  !item.href && 'group-hover:block'
                } translate-y-8  group-hover:translate-y-8 group-hover:animate-appear
                   animate-disappear absolute z-100 left-0  pt-5 top-6`}>
                <div className='w-full max-w-maxContainer px-inline-main_px mx-auto'>
                  <div className='flex gap-4 w-full mx-auto'>
                    {item.hidden.map((col, index_col) => {
                      return (
                        <div key={index_col} className='flex w-full flex-col gap-4'>
                          <p className=' text-md font-semibold'>{col.title}</p>
                          {col.content.map((sub, index_row) => {
                            return (
                              <div
                                key={index_row}
                                className='flex gap-2 p-2 duration-200 w-fit rounded-xl items-center transition-all  hover:scale-105 hover:shadow'>
                                {sub.icon}
                                <a href={sub.href} className='text-xs w-fit '>
                                  {sub.title}
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </ul>
  );
};
