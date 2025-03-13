import {type FC} from 'react';
import type Props from './CardLayout.props';

export const CardLayout: FC<Props> = ({children, className, ...props}) => {
  return (
    <div
      className={`${className} rounded-2xl bg-gray_light_xl p-8 w-full aspect-square`}
      {...props}>
      {children}
    </div>
  );
};
