import type {CreativeCard} from './CreativeCard.props';
import book1 from '@/assets/Creative_Mock/book/1.jpeg';
import book2 from '@/assets/Creative_Mock/book/2.jpeg';
import book3 from '@/assets/Creative_Mock/book/3.jpeg';
import book4 from '@/assets/Creative_Mock/book/4.jpeg';
import book5 from '@/assets/Creative_Mock/book/5.jpeg';
import book6 from '@/assets/Creative_Mock/book/6.jpeg';
import book7 from '@/assets/Creative_Mock/book/7.jpg';
import person1 from '@/assets/Creative_Mock/people/1.jpg';
import person2 from '@/assets/Creative_Mock/people/2.jpg';
import person3 from '@/assets/Creative_Mock/people/3.jpg';
import person4 from '@/assets/Creative_Mock/people/4.jpg';
import person5 from '@/assets/Creative_Mock/people/5.jpg';
const authors = [person1, person2, person3, person4, person5];
const books = [book1, book2, book3, book4, book5, book6, book7];
export const CreativeCardUsecases: CreativeCard[] = [
  {
    author: {
      name: 'Иванов Иван Иванович',
      post: 'Военный историк',
      photo: authors[Math.floor(Math.random() * authors.length)].src,
    },
    materials: [
      {
        label: 'Вторая мировая война: краткая история',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2015,
      },
      {
        label: 'Стратегия и тактика войны',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2018,
      },
      {
        label: 'Солдатская слава',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2020,
      },
      {
        label: 'Герои войны',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2016,
      },
      {
        label: 'Война и мир',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2012,
      },
      {
        label: 'Танки: история и развитие',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2019,
      },
      {
        label: 'Морская война',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2021,
      },
      {
        label: 'Воздушные силы: история',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2020,
      },
      {
        label: 'Тактика в бою',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2018,
      },
      {
        label: 'Великая Отечественная война',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2017,
      },
    ],
  },
  {
    author: {
      name: 'Петрова Анна Сергеевна',
      post: 'Военный аналитик',
      photo: authors[Math.floor(Math.random() * authors.length)].src,
    },
    materials: [
      {
        label: 'Тактика партизанской войны',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2015,
      },
      {
        label: 'Краткая история военной авиации',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2016,
      },
      {
        label: 'Стратегия на поле боя',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2019,
      },
      {
        label: 'Военные конфликты XX века',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2020,
      },
      {
        label: 'История оружия',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2018,
      },
      {
        label: 'Война в современном мире',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2021,
      },
      {
        label: 'Секреты военного искусства',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2022,
      },
      {
        label: 'Военные стратегии древности',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2019,
      },
      {
        label: 'Мифы о войне',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2020,
      },
      {
        label: 'Солдаты и войны',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2021,
      },
    ],
  },
  {
    author: {
      name: 'Сидоров Алексей Владимирович',
      post: 'Военный историк',
      photo: authors[Math.floor(Math.random() * authors.length)].src,
    },
    materials: [
      {
        label: 'Секреты военной разведки',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2015,
      },
      {
        label: 'История морских сражений',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2016,
      },
      {
        label: 'Бои за Берлин',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2019,
      },
      {
        label: 'Великие полководцы',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2020,
      },
      {
        label: 'Танковые сражения',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2018,
      },
      {
        label: 'Военные тактики',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2021,
      },
      {
        label: 'История артиллерии',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2022,
      },
      {
        label: 'Авианосцы и их роль',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2019,
      },
      {
        label: 'Психология войны',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2020,
      },
      {
        label: 'Война и общество',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2021,
      },
    ],
  },
  {
    author: {
      name: 'Кузнецова Мария Николаевна',
      post: 'Военный историк',
      photo: authors[Math.floor(Math.random() * authors.length)].src,
    },
    materials: [
      {
        label: 'Секреты военной стратегии',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2015,
      },
      {
        label: 'Краткая история войн',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2016,
      },
      {
        label: 'Военные кампании',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2019,
      },
      {
        label: 'Тактика и стратегия',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2020,
      },
      {
        label: 'Военные технологии',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2018,
      },
      {
        label: 'Война в кино',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2021,
      },
      {
        label: 'Мифы о войне',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2022,
      },
      {
        label: 'Книги о войне',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2019,
      },
      {
        label: 'История военного дела',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2020,
      },
      {
        label: 'Солдаты и их подвиги',
        href: '#',
        photo: books[Math.floor(Math.random() * books.length)].src,
        year: 2021,
      },
    ],
  },
];
