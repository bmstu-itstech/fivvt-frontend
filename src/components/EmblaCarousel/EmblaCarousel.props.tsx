import {EmblaOptionsType} from 'embla-carousel';
import type { HTMLAttributes, ReactElement } from 'react';

export default interface PropType extends HTMLAttributes<HTMLDivElement> {
  slides: string[] | ReactElement[];
  options?: EmblaOptionsType;
  imageClassname?: string;
  hasDots?: boolean;
  screenTime?: number;
}
