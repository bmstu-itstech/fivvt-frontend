// import type Props from './EventCard.props';
// import main1 from '@/assets/events_main_1.jpg';
// import main2 from '@/assets/events_main_2.jpg';
// import sub1 from '@/assets/events_sub_1.jpg';
// import sub2 from '@/assets/events_sub_2.jpg';
// import sub3 from '@/assets/events_sub_3.jpg';
//   main_photo: string;
//   title: string;
//   date: string;
//   count: number;
//   photos: string[];

// const mero1: Props = {
//   data: {
//     title: 'Благотворительный концерт',
//     main_photo: main1.src,
//     date: 'сентябрь 2000',
//     count: 9,
//     photos: [
//       sub1.src,
//       sub2.src,
//       sub3.src,
//       sub1.src,
//       sub2.src,
//       sub3.src,
//       sub1.src,
//       sub2.src,
//       sub3.src,
//     ],
//   },
// };

// const mero2: Props = {
//   data: {
//     title: 'Марш памяти',
//     main_photo: main2.src,
//     date: 'сентябрь 2023',
//     count: 6,
//     photos: [sub1.src, sub2.src, sub3.src, sub1.src, sub2.src, sub3.src],
//   },
// };

// const mero3: Props = {
//   data: {
//     title: 'Марш памяти',
//     main_photo: main2.src,
//     date: 'сентябрь 2019',
//     count: 6,
//     photos: [sub1.src, sub2.src, sub3.src, sub1.src, sub2.src, sub3.src],
//   },
// };

// const mero4: Props = {
//   data: {
//     title: 'Марш памяти',
//     main_photo: main2.src,
//     date: 'сентябрь 2021',
//     count: 6,
//     photos: [sub1.src, sub2.src, sub3.src, sub1.src, sub2.src, sub3.src],
//   },
// };

// const mero5: Props = {
//   data: {
//     title: 'Марш памяти',
//     main_photo: main2.src,
//     date: 'сентябрь 2023',
//     count: 6,
//     photos: [sub1.src, sub2.src, sub3.src, sub1.src, sub2.src, sub3.src],
//   },
// };
// const mero6: Props = {
//   data: {
//     title: 'Марш памяти',
//     main_photo: main2.src,
//     date: 'сентябрь 2025',
//     count: 6,
//     photos: [sub1.src, sub2.src, sub3.src, sub1.src, sub2.src, sub3.src],
//   },
// };
// const mero7: Props = {
//   data: {
//     title: 'Марш памяти',
//     main_photo: main2.src,
//     date: 'сентябрь 2024',
//     count: 6,
//     photos: [sub1.src, sub2.src, sub3.src, sub1.src, sub2.src, sub3.src],
//   },
// };
// export const allEventCards = [mero1, mero2, mero3, mero4, mero5, mero6, mero7];

interface PhotoBit {
  image: string;
  id: number;
}

export interface IAlbum {
  id: number;
  title: string;
  photos: PhotoBit[];
  main_photo: {
    photo: PhotoBit;
  };
}