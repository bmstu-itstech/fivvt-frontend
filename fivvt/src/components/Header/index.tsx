import type {FC} from 'react';
import type Props from './Header.props';

export const Header: FC<Props> = ({className, head, tail, ...props}) => {
  return (
    <header
      className={`${className} w-full sticky  h-16 flex justify-between px-inline-main_px items-center`}
      {...props}>
      {head}
      {tail}
    </header>
  );
};
