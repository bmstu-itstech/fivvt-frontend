import type {HTMLAttributes} from 'react';

interface IContactBit {
  title: string;
  value: string;
}

export interface HospitalCardBit {
  photo: string;
  title: string;
  address: string;
  contacts: IContactBit[];
  email: string;
  mapUrl: string;
}

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: HospitalCardBit;
}
