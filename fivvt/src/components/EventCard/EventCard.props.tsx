import type {HTMLAttributes} from 'react';

export interface EventCardData {
  main_photo: string;
  title: string;
  date: string;
  count: number;
  photos: string[];
}

export default interface Props extends HTMLAttributes<HTMLImageElement> {
  data: EventCardData;
}
