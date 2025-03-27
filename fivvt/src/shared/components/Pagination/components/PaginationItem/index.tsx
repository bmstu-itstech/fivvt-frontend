import type {FC} from 'react';
import type Props from './PaginationItem.props';

export const PaginationItem: FC<Props> = ({
  className,
  onClick,
  children,
  isChosen = false,
  inActive = false,
  isCorner = false,
  ...props
}) => {
  return (
    <button
      className={`${className} duration-50 transition-all h-full ${
        isCorner ? 'w-fit' : 'w-8'
      } flex gap-2 flex-nowrap items-center text-gray-400  border-gray-300 ${
        isChosen ? '!text-amber-400 !border-amber-400 border-t-2' : ''
      } ${!inActive ? 'hover:border-t-2' : ''} ${
        !inActive ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
      {...props}>
      <p className='w-full h-full flex justify-center items-center text-inherit '>
        {children}
      </p>
    </button>
  );
};
