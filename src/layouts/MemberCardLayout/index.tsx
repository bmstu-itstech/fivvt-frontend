import type {FC} from 'react';
// import type Props from './MemberCardLayout.props';
import {Props} from './MemberCardLayout.props';
import '@/layouts/MemberCardLayout/MemberCardLayout.css';

export const MemberCardLayout: FC<Props> = ({className, children, ...props}) => {
  return (
    <div
      className={`${className} relative vintage-card  w-full p-2  shadow-2xl border-gray-100 border-2 rounded-xl`}
      {...props}>
      {children}
      <div className='absolute flex justify-end items-end rounded-xs  bg-amber-400 top-0 left-0 -translate-y-1/4 -translate-x-1/4 -z-20 w-12 h-12'>
        <div className='-z-10 w-3/4 h-3/4 bg-white '></div>
      </div>
      <div className='absolute bg-amber-400 rounded-xs flex justify-start items-start bottom-0 right-0 translate-y-1/4 translate-x-1/4 -z-10 w-12 h-12'>
        <div className='-z-10 w-3/4 h-3/4 bg-white'></div>
      </div>
    </div>
  );
};

// <div className='relative w-72 h-48 border border-gray-300 p-5 bg-white'>
//   <div className='absolute  bg-amber-400 -top-2.5 -left-2.5 -z-10 w-12 h-12'></div>
//   <div className='absolute  bg-amber-400 -bottom-2.5 -right-2.5 -z-10 w-12 h-12'></div>
//   <div className='content'>
//     <h1 className='text-xl font-bold'>Ваш контент</h1>
//     <p>Здесь находится основной контент вашего компонента.</p>
//   </div>
// </div>;
