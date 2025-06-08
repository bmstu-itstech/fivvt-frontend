import photo1 from '@/assets/09.jpg';
import photo2 from '@/assets/07.jpg';
import photo3 from '@/assets/08.jpg';
export interface IPoint {
  title: string;
  desc: string;
  photo: string;
}
export const PointsUsecase: IPoint[] = [
  {
    // year: 2005,
    title: 'более 550 инвалидов',
    photo: photo1.src,
    desc: 'входят в состав Фонда, включая 67 инвалидов первой группы и около 300 инвалидов второй группы.',
  },
  {
    // year: 2007,
    title: '250 семей военнослужащих',
    photo: photo2.src,
    desc: 'Находятся под патронажем организации. Члены их семей погибли в Афганистане.',
  },
  {
    // year: 2003,
    title: '180 семей военнослужащих',
    photo: photo3.src,
    desc: 'Находятся под опекой организации. Их родственники погибли, защищая независимость Чеченской Республике. ',
  },
];

// export const firstUsecase: IPoint = {
//   // year: 2003,
//   title: '180 семей военнослужащих',
//   // photo: event2.src,
//   desc: 'Находятся под опекой организации. Их родственники погибли, защищая независимость Чеченской Республике. ',
// };
