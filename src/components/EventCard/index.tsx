import {useState, type FC} from 'react';
import type Props from './EventCard.props';
import {EventCardLayout} from '@/layouts/EventCardLayout';
import ModalInformation from './components/ModalInformation';

export const EventCard: FC<Props> = ({className, data, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EventCardLayout
      title={data.title}
      date={data.created_at}
      count={data.photos.length}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      photo={data.main_photo.photo.image}
      className={`${className} ${
        !isOpen && `hover:-translate-y-1 duration-300`
      }`}
      {...props}>
      {isOpen && (
        <ModalInformation onClick={() => setIsOpen(false)} data={data} />
      )}
    </EventCardLayout>
  );
};
