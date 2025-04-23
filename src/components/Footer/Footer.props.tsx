import type {HTMLAttributes, ReactNode} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  fond_name: string;
  data: ReactNode;
}

export interface IGroup extends HTMLAttributes<HTMLDivElement> {
    title?: string;
}
