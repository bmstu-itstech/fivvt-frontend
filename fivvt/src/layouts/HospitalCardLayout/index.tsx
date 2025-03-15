import type {FC} from 'react';
import type Props from './HospitalCardLayout.props';

export const HospitalCardLayout: FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`${className} p-4 shadow-2xl shadow-gray_light  w-full border-2 border-gray_light_xl rounded-2xl min-h-36 h-fit`}
      {...props}>
      {children}
    </div>
  );
};
