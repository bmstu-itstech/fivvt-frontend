import type {IHospital} from '@/domain/entitites/hospital';
import type {HTMLAttributes} from 'react';

export interface HospitalCardBit extends IHospital {}

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: HospitalCardBit;
}
