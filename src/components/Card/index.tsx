'use client';
import type {FC} from 'react';
import type Props from './Card.props';
import {CardLayout} from '@/layouts/CardLayout';

export const Card: FC<Props> = ({className, data, ...props}) => {
  return (
    <CardLayout className={`${className}`} {...props}>
      {data}
    </CardLayout>
  );
};
