import {useState, type FC} from 'react';
import type Props from './EventCard.props';
import {EventCardLayout} from '@/layouts/EventCardLayout';
import ModalInformation from './components/ModalInformation';

export const EventCard: FC<Props> = ({className, data, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EventCardLayout
      title={data.title}
      date={data.date}
      count={data.count}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      photo={data.main_photo}
      className={`${className} `}
      {...props}>
      {isOpen && (
        <ModalInformation onClick={() => setIsOpen(false)} data={data} />
      )}
    </EventCardLayout>
  );
};
