import type {HTMLAttributes} from 'react';

export interface MemberCardData {
  id: number;
  image: string;
  full_name: string;
  post: string;
  biography: string;
}

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: MemberCardData;
}
