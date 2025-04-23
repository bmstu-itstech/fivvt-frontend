import type {IHospital} from '@/domain/entitites/hospital';
import type {HTMLAttributes} from 'react';

export type HospitalCardBit = IHospital;

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: HospitalCardBit;
}
