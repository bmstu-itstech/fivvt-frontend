import type {FC} from 'react';
// import type Props from './MemberCardLayout.props';
import { Props } from './MemberCardLayout.props';
import '@/layouts/MemberCardLayout/MemberCardLayout.css'

export const MemberCardLayout: FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`${className} vintage-card w-full p-2 shadow-2xl border-gray-100 border-2 rounded-xl`}
      {...props}>
      {children}
    </div>
  );
};
