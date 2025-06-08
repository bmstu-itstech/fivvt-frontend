'use client';
import {MainPage} from '@/components/pages/mainPage';
import {MainRootPage} from '@/components/pages/mainRootPage';
import {MainScrollPage} from '@/components/pages/mainScrollPage';

export default function Home() {
  return (
    <div className='w-full'>
      <MainPage />
      <MainRootPage />
      <MainScrollPage />
    </div>
  );
}
