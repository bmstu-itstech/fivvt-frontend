import type {FC} from 'react';
import type Props from './Footer.props';
import {Divider} from '@/shared/components/Divider';

export const Footer: FC<Props> = ({className, fond_name, data, ...props}) => {
  return (
    <footer
      className={`${className} p-8  bg-gray_main w-full  flex items-center justify-center `}
      {...props}>
      <div className='w-full flex flex-col gap-8 justify-between px-inline-main_px items-center max-w-maxContainer '>
        {data}
        <Divider className='bg-gray_light' />
        <div className='me-auto'>
          <p className='text-white'>{fond_name}</p>
        </div>
      </div>
    </footer>
  );
};
