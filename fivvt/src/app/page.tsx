import {Header} from '@/components/Header';
import { HeaderUsecase } from '@/components/Header/Header.usecase';
export default function Home() {
  return (
    <div>
      <Header {...HeaderUsecase} />
      
      {/* // <Footer /> */}
    </div>
  );
}
