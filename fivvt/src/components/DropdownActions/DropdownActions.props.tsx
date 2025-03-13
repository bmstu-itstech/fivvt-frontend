import type {HTMLAttributes} from 'react';

interface hiddenItem {
  title: string;
  content: string[];
}

interface item {
  visual: string;
  hidden: hiddenItem[];
}

export default interface Props extends HTMLAttributes<HTMLUListElement> {
  items: item[];
}
