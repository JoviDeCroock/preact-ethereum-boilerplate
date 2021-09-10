import { tw } from "twind";

function ConnectWallet({ selectAddress }: { selectAddress: (address: string) => void }) {
  const connectWallet = async () => {
    const [selectedAddress] = await window.ethereum.enable();

    // Once we have the address, we can initialize the application.

    // First we check the network
    selectAddress(selectedAddress);

    // We reinitialize it whenever the user changes their account.
    window.ethereum.on("accountsChanged", ([newAddress]: [string]) => {
      selectAddress(newAddress);
    });
    
    // We reset the dapp state if the network is changed
    window.ethereum.on("networkChanged", () => {
      selectAddress('')
    });
  }

  return (
    <div className={tw`flex justify-center`}>
      <div className={tw`p-4 text-center`}>
        <p>Please connect to your wallet.</p>
        <button
          className="btn btn-warning"
          type="button"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default ConnectWallet;
