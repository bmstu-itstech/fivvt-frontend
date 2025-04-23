import type {HTMLAttributes} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: BenefitCardBit;
}

export interface BenefitCardRowBit {
  title: string;
  href?: string;
}
export interface BenefitCardBit {
  lgota: string;
  type_of_lgota: string;
  value: BenefitCardRowBit[];
}
