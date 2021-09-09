import { tw } from 'twind';

import Balance from "./Balance";

function Header() {
  return (
    <header className={tw`border-b-1 p-4 flex justify-end`}>
      <Balance />
    </header>
  )
}

export default Header;
