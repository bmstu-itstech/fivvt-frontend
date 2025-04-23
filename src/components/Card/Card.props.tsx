import type { HTMLAttributes, ReactElement } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement>{
    data: ReactElement;
}