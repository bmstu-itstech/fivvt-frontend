'use client';
import {MainPage} from '@/components/pages/mainPage';
import {MainRootPage} from '@/components/pages/mainRootPage';
import {MainScrollPage} from '@/components/pages/mainScrollPage';
import {MainScrollPage2} from '@/components/pages/mainScrollPage2';
import {MainRootPage2} from '@/components/pages/mainRootPage2';
import PointsPage from '@/components/pages/pointsPage/page';
export default function Home() {
  return (
    <div className='w-full'>
      <MainPage />
      <MainRootPage />
      <MainScrollPage />
      <MainRootPage2 />
      <MainScrollPage2 />
      <PointsPage />
    </div>
  );
}
