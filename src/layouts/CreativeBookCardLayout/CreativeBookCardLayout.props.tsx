import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement>{
    href: string;
    photo: string;
}