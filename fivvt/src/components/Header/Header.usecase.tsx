import {Button} from '@/shared/components/Button';
import {Logo} from '../icons/Logo';
import {Location} from '../icons/Location';
import {Login} from '../icons/Login';

export const HeaderUsecase = {
  head: <Logo className='w-20 h-8' />,
  tail: (
    <div className='flex gap-4 items-center h-full max-h-full'>
      <Button icon={<Location className='w-6 h-6' />}>Мы на карте</Button>
      <Button className='bg-green_main text-black'>WhatsApp</Button>
      <Button icon={<Login className='w-8 h-8' />} />
    </div>
  ),
};
