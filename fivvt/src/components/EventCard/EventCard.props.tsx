import type {HTMLAttributes} from 'react';
import { IAlbum } from '@/domain/entitites/albums';

export interface EventCardData extends IAlbum {
}

export default interface Props extends HTMLAttributes<HTMLImageElement> {
  data: EventCardData;
}
