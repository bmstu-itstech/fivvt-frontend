import hospital1 from '@/assets/hospital1.jpg';
import hospital2 from '@/assets/hospital2.jpg';
import Props from './HospitalCard.props';
export const Hospital1Usecase: Props = {
  data: {
    photo: hospital1.src,
    title: 'Главный военный клинический госпиталь имени Н. Н. Бурденко',
    address: 'Госпитальная площадь, 1-3с1, Москва',
    mapUrl:
      'https://yandex.ru/profile/1130099941?lang=ru&ysclid=m8a4xcv31581068252',
    contacts: [
      {
        title: 'Общий колл-центр',
        value: '+7 (499) 678-00-03',
      },
      {
        title: 'Справочная',
        value: '+7 (499) 263-55-55',
      },
      {
        title: '',
        value: '+7 (499) 267-45-36',
      },
      {
        title: 'Платные медицинские услуги',
        value: '+7 (495) 786-43-13',
      },
      {
        title: '',
        value: '+7 (499) 263-55-44',
      },
    ],
    email: 'burdenko@gmail.com',
  },
};

export const Hospital2Usecase: Props = {
  data: {
    photo: hospital2.src,
    title:
      'Центральный военный клинический госпиталь имени П. В. Мандрыка, главный корпус',
    address: 'Большая Оленья ул., 8А',
    mapUrl:
      'https://yandex.ru/maps/org/tsentralny_voyenny_klinicheskiy_gospital_imeni_p_v_mandryka_glavny_korpus/1143243631/?ll=37.695133%2C55.806833&z=15',
    contacts: [
      {
        title: 'Общий колл-центр',
        value: '+7 (499) 678-00-03',
      },
      {
        title: 'Справочная',
        value: '+7 (499) 263-55-55',
      },
      {
        title: '',
        value: '+7 (499) 267-45-36',
      },
      {
        title: 'Платные медицинские услуги',
        value: '+7 (495) 786-43-13',
      },
      {
        title: '',
        value: '+7 (499) 263-55-44',
      },
    ],
    email: 'burdenko@gmail.com',
  },
};

export const AllHospitalUsecase = [Hospital1Usecase, Hospital2Usecase];
