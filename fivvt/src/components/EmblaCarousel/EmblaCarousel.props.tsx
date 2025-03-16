import {EmblaOptionsType} from 'embla-carousel';
import type { HTMLAttributes } from 'react';

export default interface PropType extends HTMLAttributes<HTMLDivElement> {
  slides: string[];
  options?: EmblaOptionsType;
  imageClassname?: string;
}
