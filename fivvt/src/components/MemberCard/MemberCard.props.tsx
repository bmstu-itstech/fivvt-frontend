import type {IBoard} from '@/domain/entitites/board';
import type {HTMLAttributes} from 'react';

export interface MemberCardData extends IBoard {}

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: MemberCardData;
}
