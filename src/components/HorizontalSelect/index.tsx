import type {FC} from 'react';
import type {Props} from './HorizontalSelect.props';

export const HorizontalSelect: FC<Props> = ({
  variants,
  active,
  setSelected,
  className,
  ...props
}) => {
  return (
    <div
      className={`${className} flex gap-4 items-center h-16  justify-start overflow-x-auto
       w-full 
       [&::-webkit-scrollbar]:h-1
       focus:[&::-webkit-scrollbar]:h-3
       [&::-webkit-scrollbar-track]:rounded-full
       [&::-webkit-scrollbar-thumb]:rounded-full
    dark:[&::-webkit-scrollbar-thumb]:bg-gray-200`}
      {...props}>
      {variants.map((item, index) => {
        return (
          <button
            className={`rounded-2xl cursor-pointer text-nowrap
             py-2.5 px-4  border-none transition-all
              duration-300 ease-in-out text-sm hover:bg-amber-400 hover:text-white ${
                item == active ? 'bg-amber-400 text-white' : 'bg-gray-200 text-black'
              }`}
            key={index}
            data-category={item}
            onClick={() => setSelected(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
