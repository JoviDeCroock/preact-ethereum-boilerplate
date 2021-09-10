import { tw } from 'twind';

function NoWallet() {
  return (
    <div className={tw`flex justify-center`}>
      <div className={tw`text-center`}>
        <p>
          No Ethereum wallet was detected. <br />
          Please install{" "}
          <a
            className={tw`underline`}
            href="http://metamask.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            MetaMask
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default NoWallet;
