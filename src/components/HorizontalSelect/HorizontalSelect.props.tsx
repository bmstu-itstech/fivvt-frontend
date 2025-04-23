import type { Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variants: string[];
  active: string;
  setSelected: Dispatch<SetStateAction<string>>;
}