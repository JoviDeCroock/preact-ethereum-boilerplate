import { useState } from "preact/hooks";

import NoWallet from "./components/NoWallet";
import Greeting from "./Greeting";
import Header from "./Header";

function App() {
  // const [selectedAddress, setSelectedAddress] = useState('');
  if (window.ethereum === undefined) {
    return <NoWallet />;
  }

  // TODO: connect wallet component
  // if (!selectedAddress) {
  //   return <ConnectWallet />;
  // }

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