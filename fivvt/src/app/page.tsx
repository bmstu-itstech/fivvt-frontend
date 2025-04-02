'use client';
import HistoryPage from '@/components/pages/historyPage/page';
import {MainPage} from '@/components/pages/mainPage';

export default function Home() {
  return (
    <div className='w-full'>
      <MainPage />
      <HistoryPage />
    </div>
  );
}
