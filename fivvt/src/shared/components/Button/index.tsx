import type {FC} from 'react';
import type Props from './Button.props';

export const Button: FC<Props> = ({className, children, icon, ...props}) => {
  return (
    <button
      className={`${className} min-w-4 min-h-4 h-full max-h-10 px-6 rounded-xl w-fit items-center justify-center flex gap-2 cursor-pointer`}
      {...props}>
      {icon}
      <p className='text-nowrap w-full text-xs'>{children}</p>
    </button>
  );
};
