export const DropDownActionsUsecase = {
  items: [
    {
      visual: 'О Фонде',
      hidden: [
        {
          title: 'Основная информация',
          content: ['История создания', 'Документы', 'Контакты и реквизиты'],
        },
        {
          title: 'Органы управления Фонда',
          content: ['Правление', 'Председатель', 'Заместитель председателя'],
        },
      ],
    },
    {
      visual: 'Полезные ссылки',
      hidden: [
        {
          title: 'Государственные органы',
          content: [
            'Сайт Президента РФ',
            'Сайт Правительства РФ',
            'Министерство обороны',
            'Минобороны об СВО',
          ],
        },
        {
          title: 'Здравоохранение',
          content: [
            'Городская поликлиника № 220',
            'Госпиталь для ветеранов войн № 1',
            'Госпиталь для ветеранов войн № 2',
            'Госпиталь для ветеранов войн № 3',
            'Пансионат "Никольский парк',
            'СРЦ имени В.Г. Михайлова',
          ],
        },
      ],
    },
  ],
};

// interface hiddenItem {
//   title: string;
//   content: string[];
// }

// interface item {
//   visual: string;
//   hidden: hiddenItem;
// }

// export default interface Props extends HTMLAttributes<HTMLDivElement> {
//   items: item[];
// }
