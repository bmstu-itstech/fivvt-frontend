import type {HTMLAttributes} from 'react';

interface hiddenItemBit {
  title: string;
  href: string;
}

interface hiddenItem {
  title: string;
  content: hiddenItemBit[];
}

interface item {
  visual: string;
  href?: string;
  hidden: hiddenItem[];
}

export default interface Props extends HTMLAttributes<HTMLUListElement> {
  items: item[];
}
