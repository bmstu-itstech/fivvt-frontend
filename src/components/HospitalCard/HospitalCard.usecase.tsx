import hospital1 from '@/assets/hospital1.jpg';
import hospital2 from '@/assets/hospital2.jpg';
import Props from './HospitalCard.props';
export const Hospital1Usecase: Props = {
  data: {
    id: 1,
    url: '#',
    photos: [{image: hospital1.src, id: 1}],
    name: 'Главный военный клинический госпиталь имени Н. Н. Бурденко',
    address: 'Госпитальная площадь, 1-3с1, Москва',
    url_on_map:
      'https://yandex.ru/profile/1130099941?lang=ru&ysclid=m8a4xcv31581068252',
    phones: [
      {
        comment: 'Общий колл-центр',
        phone: '+7 (499) 678-00-03',
      },
      {
        comment: 'Справочная',
        phone: '+7 (499) 263-55-55',
      },
      {
        comment: '',
        phone: '+7 (499) 267-45-36',
      },
      {
        comment: 'Платные медицинские услуги',
        phone: '+7 (495) 786-43-13',
      },
      {
        comment: '',
        phone: '+7 (499) 263-55-44',
      },
    ],
    // email: 'burdenko@gmail.com',
  },
};

export const Hospital2Usecase: Props = {
  data: {
    id: 2,
    url: '#',
    photos: [{image: hospital2.src, id: 1}],
    name:
      'Центральный военный клинический госпиталь имени П. В. Мандрыка, главный корпус',
    address: 'Большая Оленья ул., 8А',
    url_on_map:
      'https://yandex.ru/maps/org/tsentralny_voyenny_klinicheskiy_gospital_imeni_p_v_mandryka_glavny_korpus/1143243631/?ll=37.695133%2C55.806833&z=15',
    phones: [
      {
        comment: 'Общий колл-центр',
        phone: '+7 (499) 678-00-03',
      },
      {
        comment: 'Справочная',
        phone: '+7 (499) 263-55-55',
      },
      {
        comment: '',
        phone: '+7 (499) 267-45-36',
      },
      {
        comment: 'Платные медицинские услуги',
        phone: '+7 (495) 786-43-13',
      },
      {
        comment: '',
        phone: '+7 (499) 263-55-44',
      },
    ],
  },
};

export const AllHospitalUsecase = [Hospital1Usecase, Hospital2Usecase];
