import type {FC} from 'react';
import type Props from './PageLayout.props';
import React from 'react';

export const PageLayout: FC<Props> = ({className, titleClassName, title, children, ...props}) => {
  return (
    <div
      className={`${className} mx-auto w-full flex flex-col gap-8 items-center px-inline-main_px py-8`}
      {...props}>
      {title && <p className={`font-bold z-10 text-3xl ${titleClassName ?? ''}`}>{title}</p>}
      <div className='max-w-maxContainer w-full h-full'>{children}</div>
    </div>
  );
};
