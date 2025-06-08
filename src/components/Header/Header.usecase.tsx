import {Button} from '@/shared/components/Button';
import {Logo} from '../icons/Logo';
import {Location} from '../icons/Location';
import { OffcanvasMenu } from '../OffcanvasMenu';

export const HeaderUsecase = {
  head: (
    <>
      <Logo className='w-20 h-8 hidden lg:block' />
      <Logo className='w-12 h-4 block lg:hidden' />
    </>
  ),
  tail: (
    <>
      <div className=' gap-4 items-center h-full max-h-full hidden lg:flex'>
        <Button icon={<Location className='w-6 h-6 ' />}>Мы на карте</Button>
        <Button className='bg-green_main text-black'>WhatsApp</Button>
      </div>
      <div className='block lg:hidden'>
        <OffcanvasMenu />
      </div>
    </>
  ),
};
