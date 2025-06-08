import type {HTMLAttributes} from 'react';
import type { IPoint } from '../../points.usecase';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  ind: number;
  item: IPoint;
  allCount: number;
}
