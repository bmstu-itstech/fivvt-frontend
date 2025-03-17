import type {HTMLAttributes} from 'react';

interface IContactBit {
  comment: string;
  phone: string;
  // phone: string[];
}
interface PhotoBit {
  id: number;
  image: string;
}

export interface HospitalCardBit {
  id: number;
  photos: PhotoBit[];
  name: string;
  address: string;
  phones: IContactBit[];
  url: string;
  url_on_map: string;
}

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: HospitalCardBit;
}
