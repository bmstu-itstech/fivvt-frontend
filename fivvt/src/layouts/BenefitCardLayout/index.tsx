import type {FC} from 'react';
import type Props from './BenefitCardLayout.props';

export const BenefitCardLayout: FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`${className} shadow-2xl w-full rounded-2xl p-12 `}
      {...props}>
      {children}
    </div>
  );
};
