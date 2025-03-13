// 'use client';
// import {type FC} from 'react';
// import type Props from './DropdownActions.props';
// export const DropDownActions: FC<Props> = ({className, items, ...props}) => {
//   return (
//     <div
//       className={`${className} w-full h-14 bg-gray_light_xl px-inline-main_px`}
//       {...props}>
//       <div className='flex gap-6 flex-nowrap relative w-full items-center h-full'>
//         {items.map((item, index) => {
//           return (
//             <div className={`h-full group relative`} key={index}>
//               <p className='flex items-center justify-center h-full group-hover:cursor-pointer'>
//                 {item.visual}
//               </p>
//               <div
//                 className='bg-gray_light w-dvw h-fit opacity-0 absolute left-0 top-full
//                 group-hover:opacity-100 duration-200 transition-all py-4'>
//                 <div className='flex gap-4 w-full'>
//                   {item.hidden.map((col, index_col) => {
//                     return (
//                       <div
//                         key={index_col}
//                         className='flex w-full flex-col gap-6'>
//                         <p className='font-bold text-sm'>{col.title}</p>
//                         {col.content.map((sub, index_row) => {
//                           return (
//                             <a key={index_row} href='#' className='text-xs'>
//                               {sub}
//                             </a>
//                           );
//                         })}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
'use client';
import {type FC} from 'react';
import type Props from './DropdownActions.props';
export const DropDownActions: FC<Props> = ({className, items, ...props}) => {
  return (
    <ul
      className={`flex relative  ${className} items-center w-full h-14 bg-gray_light_xl px-inline-main_px`}
      {...props}>
      {items.map((item, index) => {
        return (
          <li className='group w-fit h-full pe-6 flex items-center' key={index}>
            <a className='h-fit'>{item.visual}</a>
            <div
              className='hidden bg-gray_light w-dvw h-fit  transition-all py-4 group-hover:block
                  translate-y-8  group-hover:translate-y-8 group-hover:animate-appear
                   animate-disappear absolute  left-0 pl-28 pt-5 top-6'>
              <div className='flex gap-4 w-full'>
                {item.hidden.map((col, index_col) => {
                  return (
                    <div key={index_col} className='flex w-full flex-col gap-6'>
                      <p className='font-bold text-sm text-white'>
                        {col.title}
                      </p>
                      {col.content.map((sub, index_row) => {
                        return (
                          <a
                            key={index_row}
                            href='#'
                            className='text-xs text-white'>
                            {sub}
                          </a>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
