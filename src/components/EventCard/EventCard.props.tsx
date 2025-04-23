import type {HTMLAttributes} from 'react';
import {IAlbum} from '@/domain/entitites/albums';

export type EventCardData = IAlbum;
export default interface Props extends HTMLAttributes<HTMLImageElement> {
  data: EventCardData;
}
