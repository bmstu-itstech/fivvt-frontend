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
import person6 from '@/assets/Creative_Mock/people/6.jpg';
export const CreativeCardUsecases: CreativeCard[] = [
  {
    author: {
      name: 'Иванов Иван Иванович',
      post: 'Военный историк',
      photo: person1.src,
    },
    materials: [
      {label: 'Вторая мировая война: краткая история', href: '#', photo: book1.src, year: 2015},
      {label: 'Стратегия и тактика войны', href: '#', photo: book2.src, year: 2018},
      {label: 'Солдатская слава', href: '#', photo: book3.src, year: 2020},
      {label: 'Герои войны', href: '#', photo: book4.src, year: 2016},
      {label: 'Война и мир', href: '#', photo: book5.src, year: 2012},
      {label: 'Танки: история и развитие', href: '#', photo: book6.src, year: 2019},
      {label: 'Морская война', href: '#', photo: book7.src, year: 2021},
      {label: 'Воздушные силы: история', href: '#', photo: book1.src, year: 2020},
      {label: 'Тактика в бою', href: '#', photo: book2.src, year: 2018},
      {label: 'Великая Отечественная война', href: '#', photo: book3.src, year: 2017},
      {label: 'История военного искусства', href: '#', photo: book4.src, year: 2014},
      {label: 'Военные стратегии', href: '#', photo: book5.src, year: 2013},
      {label: 'Тайны военной истории', href: '#', photo: book6.src, year: 2015},
      {label: 'Секреты побед', href: '#', photo: book7.src, year: 2016},
      {label: 'Краткая история войны', href: '#', photo: book1.src, year: 2012},
      {label: 'Военные конфликты XXI века', href: '#', photo: book2.src, year: 2021},
      {label: 'Тактика и стратегия', href: '#', photo: book3.src, year: 2019},
      {label: 'История вооружений', href: '#', photo: book4.src, year: 2018},
      {label: 'Солдаты и их подвиги', href: '#', photo: book5.src, year: 2020},
      {label: 'Военные кампании', href: '#', photo: book6.src, year: 2014},
    ],
  },
  {
    author: {
      name: 'Петрова Анна Сергеевна',
      post: 'Военный аналитик',
      photo: person2.src,
    },
    materials: [
      {label: 'Тактика партизанской войны', href: '#', photo: book1.src, year: 2015},
      {label: 'Краткая история военной авиации', href: '#', photo: book2.src, year: 2016},
      {label: 'Стратегия на поле боя', href: '#', photo: book3.src, year: 2019},
      {label: 'Военные конфликты XX века', href: '#', photo: book4.src, year: 2020},
      {label: 'История оружия', href: '#', photo: book5.src, year: 2018},
      {label: 'Война в современном мире', href: '#', photo: book6.src, year: 2021},
      {label: 'Секреты военного искусства', href: '#', photo: book7.src, year: 2022},
      {label: 'Военные стратегии древности', href: '#', photo: book1.src, year: 2019},
      {label: 'Мифы о войне', href: '#', photo: book2.src, year: 2020},
      {label: 'Солдаты и войны', href: '#', photo: book3.src, year: 2021},
      {label: 'Современные военные технологии', href: '#', photo: book4.src, year: 2013},
      {label: 'Тайны военной аналитики', href: '#', photo: book5.src, year: 2014},
      {label: 'История военного дела', href: '#', photo: book6.src, year: 2015},
      {label: 'Военные исследования', href: '#', photo: book7.src, year: 2016},
      {label: 'Тактика и стратегия XXI века', href: '#', photo: book1.src, year: 2019},
      {label: 'Краткая история военной авиации', href: '#', photo: book2.src, year: 2020},
      {label: 'Тактика партизанской войны', href: '#', photo: book3.src, year: 2021},
      {label: 'Военные технологии будущего', href: '#', photo: book4.src, year: 2018},
      {label: 'История военных конфликтов', href: '#', photo: book5.src, year: 2017},
      {label: 'Секреты побед', href: '#', photo: book6.src, year: 2016},
    ],
  },
  {
    author: {
      name: 'Сидоров Алексей Владимирович',
      post: 'Военный историк',
      photo: person3.src,
    },
    materials: [
      {label: 'Секреты военной разведки', href: '#', photo: book1.src, year: 2015},
      {label: 'История морских сражений', href: '#', photo: book2.src, year: 2016},
      {label: 'Бои за Берлин', href: '#', photo: book3.src, year: 2019},
      {label: 'Великие полководцы', href: '#', photo: book4.src, year: 2020},
      {label: 'Танковые сражения', href: '#', photo: book5.src, year: 2018},
      {label: 'Военные тактики', href: '#', photo: book6.src, year: 2021},
      {label: 'История артиллерии', href: '#', photo: book7.src, year: 2022},
      {label: 'Авианосцы и их роль', href: '#', photo: book1.src, year: 2019},
      {label: 'Психология войны', href: '#', photo: book2.src, year: 2020},
      {label: 'Война и общество', href: '#', photo: book3.src, year: 2021},
      {label: 'Тактика и стратегия', href: '#', photo: book4.src, year: 2014},
      {label: 'История холодной войны', href: '#', photo: book5.src, year: 2015},
      {label: 'Краткая история военной техники', href: '#', photo: book6.src, year: 2016},
      {label: 'Военные конфликты XXI века', href: '#', photo: book7.src, year: 2017},
      {label: 'Тайны военной истории', href: '#', photo: book1.src, year: 2018},
      {label: 'Секреты разведки', href: '#', photo: book2.src, year: 2019},
      {label: 'История войн', href: '#', photo: book3.src, year: 2020},
      {label: 'Военные технологии', href: '#', photo: book4.src, year: 2021},
      {label: 'Солдаты и их подвиги', href: '#', photo: book5.src, year: 2014},
      {label: 'Военные кампании', href: '#', photo: book6.src, year: 2015},
    ],
  },
  {
    author: {
      name: 'Кузнецова Мария Николаевна',
      post: 'Военный историк',
      photo: person4.src,
    },
    materials: [
      {label: 'Секреты военной стратегии', href: '#', photo: book1.src, year: 2015},
      {label: 'Краткая история войн', href: '#', photo: book2.src, year: 2016},
      {label: 'Военные кампании', href: '#', photo: book3.src, year: 2019},
      {label: 'Тактика и стратегия', href: '#', photo: book4.src, year: 2020},
      {label: 'Военные технологии', href: '#', photo: book5.src, year: 2018},
      {label: 'Война в кино', href: '#', photo: book6.src, year: 2021},
      {label: 'Мифы о войне', href: '#', photo: book7.src, year: 2022},
      {label: 'Книги о войне', href: '#', photo: book1.src, year: 2019},
      {label: 'История военного дела', href: '#', photo: book2.src, year: 2020},
      {label: 'Солдаты и их подвиги', href: '#', photo: book3.src, year: 2021},
      {label: 'Современные военные технологии', href: '#', photo: book4.src, year: 2014},
      {label: 'История военных конфликтов', href: '#', photo: book5.src, year: 2015},
      {label: 'Тайны военной аналитики', href: '#', photo: book6.src, year: 2016},
      {label: 'Военные исследования', href: '#', photo: book7.src, year: 2017},
      {label: 'Тактика и стратегия XXI века', href: '#', photo: book1.src, year: 2019},
      {label: 'Краткая история военной техники', href: '#', photo: book2.src, year: 2020},
      {label: 'Тактика партизанской войны', href: '#', photo: book3.src, year: 2021},
      {label: 'Военные технологии будущего', href: '#', photo: book4.src, year: 2018},
      {label: 'История военных конфликтов', href: '#', photo: book5.src, year: 2017},
      {label: 'Секреты побед', href: '#', photo: book6.src, year: 2016},
    ],
  },
  // Добавьте дополнительные карточки по аналогии
];
