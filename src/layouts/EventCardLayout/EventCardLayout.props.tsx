import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLImageElement>{
    photo: string;
    date: string;
    count: number;
    title: string;
}