import type {HTMLAttributes, ReactElement} from 'react';

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
  icon?: ReactElement;
  hidden: hiddenItem[];
}

export default interface Props extends HTMLAttributes<HTMLUListElement> {
  items: item[];
}
