import {Header} from '@/components/Header';
import { Footer } from '@/components/Footer';
import {HeaderUsecase} from '@/components/Header/Header.usecase';
import {FooterUsecase} from '@/components/Footer/Footer.usecase';
import {DropDownActions} from '@/components/DropdownActions';
import { DropDownActionsUsecase } from '@/components/DropdownActions/DropdownActions.usecase';

export default function Home() {
  return (
    <div>
      <Header {...HeaderUsecase} />
      <DropDownActions {...DropDownActionsUsecase} />
      <Footer {...FooterUsecase} />
    </div>
  );
}
