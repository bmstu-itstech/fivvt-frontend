import event1 from '@/assets/History_Mock/events/1.jpg'
import event2 from '@/assets/History_Mock/events/2.jpg';
import event3 from '@/assets/History_Mock/events/3.jpg';
import event4 from '@/assets/History_Mock/events/4.jpg';

interface historyItem {
  year: number;
  title: string;
  desc: string;
  photo: string;
}
export const historyUsecase: historyItem[] = [
  {
    year: 2005,
    title: 'событие 1',
    photo: event1.src,
    desc: 'Очеьн веселое мероприятие ',
  },
  {
    year: 2007,
    title: 'событие 2',
    photo: event2.src,
    desc: 'Очеьн веселое мероприятие ',
  },
  {
    year: 2009,
    title: 'событие 3',
    photo: event3.src,
    desc: 'Очеьн веселое мероприятие ',
  },
  {
    year: 2020,
    title: 'событие 4',
    photo: event4.src,
    desc: 'Очеьн веселое мероприятие ',
  },
  {
    year: 2025,
    title: 'событие 5',
    photo: event1.src,
    desc: 'Очеьн веселое мероприятие ',
  },
];

export const firstUsecase: historyItem = {
  year: 2003,
  title: 'событие 0',
  photo: event2.src,
  desc: 'Очеьн веселое мероприятие ',
};
