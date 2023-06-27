import { HeaderDesktop } from '../header/header-desktop';
import { HeaderMobile } from '../header/header-mobile';

export default function Header() {
  return (
    <>
      <HeaderMobile></HeaderMobile>
      <HeaderDesktop></HeaderDesktop>
    </>
  );
}
