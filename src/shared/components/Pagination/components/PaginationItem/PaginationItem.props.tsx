import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLButtonElement> {
  inActive?: boolean;
  isCorner?: boolean;
  isChosen?: boolean;
}