import Props from './DropdownActions.props';
import {About} from '../icons/About';
import {Money} from '../icons/Money';
import {Hospital} from '../icons/Hospital';
import {HelpfullIcon} from '../icons/HelpFullIcon';
import {EventsIcon} from '../icons/EventsIcon';
import {MembersIcon} from '../icons/MembersIcon';
import {DocumentIcon} from '../icons/DocumentIcon';
import {HistoryIcon} from '../icons/HistoryIcon';
import {PenIcon} from '../icons/PenIcon';
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
              title: 'Документы',
              icon: <DocumentIcon className='w-5 h-5' />,
              href: '/benefits',
            },
            {
              icon: <MembersIcon className='h-4 w-4' />,
              title: 'Правление',
              href: '/members',
            },
          ],
        },
        {
          title: 'Полезные ссылки',
          content: [
            {
              icon: <PenIcon className='h-4 w-4' />,
              title: 'Творчество ветеранов',
              href: '/creativity',
            },
          ],
        },
        {
          title: 'Государственные органы',
          content: [
            {
              title: 'Сайт Президента РФ',
              href: 'http://www.kremlin.ru/',
            },
            {
              title: 'Сайт Правительства РФ',
              href: 'http://government.ru/',
            },
            {
              title: 'Министерство обороны',
              href: 'https://mil.ru/',
            },
            {
              title: 'Минобороны об СВО',
              href: 'https://z.mil.ru/',
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
      visual: 'Госпитали',
      icon: <Hospital className='h-5 w-5 me-2' />,
      href: '/hospitals',
      hidden: [],
    },
    {
      visual: 'Мероприятия',
      icon: <EventsIcon className='h-5 w-5 me-2' />,
      href: '/events',
      hidden: [],
    },
  ],
};
