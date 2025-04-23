import type {IBoard} from '@/domain/entitites/board';
import type {HTMLAttributes} from 'react';

export type MemberCardData = IBoard;

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: MemberCardData;
}
