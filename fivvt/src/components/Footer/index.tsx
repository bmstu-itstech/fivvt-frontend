import type {FC} from 'react';
import type Props from './Footer.props';
import {Divider} from '@/shared/components/Divider';

export const Footer: FC<Props> = ({className, fond_name, data, ...props}) => {
  return (
    <footer
      className={`${className} p-8 flex bg-gray_main flex-col gap-8 justify-between items-center w-full px-inline-main_px`}
      {...props}>
      {data}
      <Divider className='bg-gray_light' />
      <div className='me-auto'>
        <p className='text-white'>{fond_name}</p>
      </div>
    </footer>
  );
};
