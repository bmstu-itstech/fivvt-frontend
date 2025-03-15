import Props from './DropdownActions.props';
import {About} from '../icons/About';
import {Money} from '../icons/Money';
export const DropDownActionsUsecase: Props = {
  items: [
    {
      visual: 'О Фонде',
      icon: <About className='h-4 w-4 me-2' />,
      hidden: [
        {
          title: 'Основная информация',
          content: [
            {
              title: 'История создания',
              href: '#',
            },

            {
              title: 'Документы',
              href: '#',
            },

            {
              title: 'Контакты и реквизиты',
              href: '#',
            },
          ],
        },
        {
          title: 'Органы управления Фонда',
          content: [
            {
              title: 'Контакты и реквизиты',
              href: '#',
            },
            {
              title: 'Правление',
              href: '#',
            },
            {
              title: 'Председатель',
              href: '#',
            },
            {
              title: 'Заместитель председателя',
              href: '#',
            },
          ],
        },
      ],
    },
    {
      visual: 'Полезные ссылки',
      hidden: [
        {
          title: 'Государственные органы',
          content: [
            {
              title: 'Сайт Президента РФ',
              href: '#',
            },
            {
              title: 'Министерство обороны',
              href: '#',
            },
            {
              title: 'Минобороны об СВО',
              href: '#',
            },
          ],
        },
        {
          title: 'Здравоохранение',
          content: [
            {
              title: 'Городская поликлиника № 220',
              href: '#',
            },
            {
              title: 'Госпиталь для ветеранов войн № 1',
              href: '#',
            },
            {
              title: 'Госпиталь для ветеранов войн № 3',
              href: '#',
            },
            {
              title: 'Пансионат "Никольский парк',
              href: '#',
            },
            {
              title: 'СРЦ имени В.Г. Михайлова',
              href: '#',
            },
          ],
        },
      ],
    },
    {
      visual: 'Благотворительность',
      icon: <Money className='h-5 w-5 me-2' />,
      href: '/charity',
      hidden: [],
    },
    {
      visual: 'Госпиатли',
      icon: <Money className='h-5 w-5 me-2' />,
      href: '/hospitals',
      hidden: [],
    },
  ],
};
