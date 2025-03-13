import type {FC} from 'react';
import type Props from './PageLayout.props';

export const PageLayout: FC<Props> = ({className, children, ...props}) => {
  return (
    <div className={`${className} w-full flex flex-col px-inline-main_px`} {...props}>
      {children}
    </div>
  );
};
