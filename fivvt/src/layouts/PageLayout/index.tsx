import type {FC} from 'react';
import type Props from './PageLayout.props';

export const PageLayout: FC<Props> = ({
  className,
  title,
  children,
  ...props
}) => {
  return (
    <div
      className={`${className} w-full flex flex-col gap-8 items-center px-inline-main_px py-8`}
      {...props}>
      {title && <p className='font-bold text-3xl'>{title}</p>}
      {children}
    </div>
  );
};
