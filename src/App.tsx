import { useState } from "preact/hooks";

import NoWallet from "./components/NoWallet";
import ConnectWallet from "./components/ConnectWallet";
import Greeting from "./Greeting";
import Header from "./Header";

function App() {
  const [selectedAddress, setSelectedAddress] = useState('');
  if (window.ethereum === undefined) {
    return <NoWallet />;
  }

  if (!selectedAddress) {
    return <ConnectWallet selectAddress={(address: string) => { setSelectedAddress(address); }} />;
  }

  return (
    <div>
      <Header />
      <main>
        <Greeting />
      </main>
    </div>
  )
}

export default App;