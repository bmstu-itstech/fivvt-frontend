import {Header} from '@/components/Header';
import { Footer } from '@/components/Footer';
import {HeaderUsecase} from '@/components/Header/Header.usecase';
import {FooterUsecase} from '@/components/Footer/Footer.usecase';
export default function Home() {
  return (
    <div>
      <Header {...HeaderUsecase} />
      <Footer {...FooterUsecase} />
    </div>
  );
}
