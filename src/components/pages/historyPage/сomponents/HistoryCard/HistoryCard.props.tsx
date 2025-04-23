import type { HTMLAttributes } from 'react';
import type { historyItem } from '../../history.usecase';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  ind: number;
  item: historyItem;
  allCount: number;
}