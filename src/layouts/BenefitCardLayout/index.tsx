import type {FC} from 'react';
import {Props} from './BenefitCardLayout.props';

export const BenefitCardLayout: FC<Props> = ({className, children, ...props}) => {
  return (
    <div className={`${className} shadow-2xl border-l-4 border-amber-400 w-full rounded-2xl p-12 `} {...props}>
      {children}
    </div>
  );
};
