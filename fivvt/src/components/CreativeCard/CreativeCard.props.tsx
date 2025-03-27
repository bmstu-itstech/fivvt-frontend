import type { HTMLAttributes } from 'react';

export interface CreativeBook{
    label : string;
    href: string;
    photo: string;
    year: number; // год создания
}

export interface CreativeCard{
    author : {
        name: string; // ФИО
        post: string // "Ветеран ..."
        photo: string;
    }
    materials: CreativeBook[];
}

export default interface Props extends HTMLAttributes<HTMLDivElement>{
    data: CreativeCard;
}