import type {FC} from 'react';
import type Props from './CreativeCardLayout.props';

export const CreativeCardLayout: FC<Props> = ({children, className}) => {
  return (
    <div className={`${className} shadow-2xl flex flex-col gap-4  w-full`}>
      {children}
    </div>
  );
};
