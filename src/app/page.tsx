'use client';
import {MainPage} from '@/components/pages/mainPage';
import { MainRootPage } from '@/components/pages/mainRootPage';

export default function Home() {
  return (
    <div className='w-full'>
      <MainPage />
      <MainRootPage />
    </div>
  );
}
