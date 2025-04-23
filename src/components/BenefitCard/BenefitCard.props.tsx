import type {HTMLAttributes} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
    data: BenefitCardBit;
}

export interface BenefitCardRowBit {
  title: string;
  href?: string;
}
export interface BenefitCardBit {
  title: string;
  value: BenefitCardRowBit[];
}
