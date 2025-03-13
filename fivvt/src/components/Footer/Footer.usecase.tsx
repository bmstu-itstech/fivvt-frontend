import {Button} from '@/shared/components/Button';
import {Logo} from '../icons/Logo';
import {IGroup} from './Footer.props';
const groups: IGroup[] = [
  {
    children: (
      <>
        <Logo className='w-56 h-20' />
      </>
    ),
  },
  {
    title: 'Контакты',
    children: (
      <>
        <p className='text-white'>+7 (499) 164-09-10</p>
        <p className='text-white'>+7 (965) 265-33-55</p>
      </>
    ),
  },
  {
    title: 'Адрес',
    children: (
      <>
        <p className='text-white'>
          105037, г. Москва, ул. 3-я Прядильная, д. 7
        </p>
      </>
    ),
  },
  {
    title: '',
    children: (
      <>
        <Button className='hover:bg-green_main !w-28 text-white bg-gray_light hover:text-gray_light'>
          Телеграм
        </Button>
        <Button className='hover:bg-green_main !w-28 text-white bg-gray_light hover:text-gray_light'>
          e-mail
        </Button>
      </>
    ),
  },
];

export const FooterUsecase = {
  fond_name: '© 2024 Фонд инвалидов войн и военной травмы',
  data: (
    <div className='flex justify-between w-full'>
      {groups.map((item, index) => {
        return (
          <div key={index} className='flex flex-col gap-8'>
            {item.title && <p className='text-xl text-white'>{item.title}</p>}
            <div className='flex flex-col gap-4 h-full'>{item.children}</div>
          </div>
        );
      })}
    </div>
  ),
};
