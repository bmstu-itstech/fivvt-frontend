import type { HTMLAttributes } from 'react';
import { CreativeBook } from '../../CreativeCard.props';
export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: CreativeBook;
}