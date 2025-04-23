import type { HTMLAttributes } from 'react';
import type { EventCardData } from '../../EventCard.props';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  data: EventCardData;
}
