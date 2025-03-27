import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  itemsPerSlide: number;
  countOfItems: number;
  clickNext: () => void;
  clickPrev: () => void;
}