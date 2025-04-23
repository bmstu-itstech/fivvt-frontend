import {MemberCardData} from './MemberCard.props';
import gov1 from '@/assets/gov_1.jpg';
import gov2 from '@/assets/gov_2.jpg';
import gov3 from '@/assets/gov_3.jpg';
//   image: string;
//   full_name: string;
//   post: string;
//   biography: string;

const Main: MemberCardData = {
  id: 1,
  image: gov1.src,
  full_name: 'Иванов Иван Иванович',
  post: 'Председатель',
  biography:
    'Данный текст дает представление о человеке, его роде деятельности и вкладе в развитие фонда.',
};

const Zam: MemberCardData = {
  id: 2,
  image: gov2.src,
  full_name: 'Степанов Григорий Иванович',
  post: 'Заместитель председателя',
  biography:
    'Данный текст дает представление о человеке, его роде деятельности и вкладе в развитие фонда.',
};

const Pravlenie1: MemberCardData = {
  id: 3,
  image: gov3.src,
  full_name: 'Иванов Иван Иванович',
  post: 'Председатель',
  biography:
    'Данный текст дает представление о человеке, его роде деятельности и вкладе в развитие фонда.',
};

export const allMemberCards = [Main, Zam, Pravlenie1];
