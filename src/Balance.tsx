import { useEffect, useState } from 'preact/hooks';
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';

import { requestAccount } from './utils/account';

function Balance() {
  const [balance, setBalance] = useState('0');


  useEffect(function() {
    requestAccount().then(function() {
      const provider = new Web3Provider(window.ethereum);
      provider.listAccounts().then(function(accounts) {
        provider.getBalance(accounts[0]).then(function(balance) {
          setBalance(formatEther(balance));
        });
      });
    });
  }, []);

  return <p>Balance: {balance} ETH</p>;
}

export default Balance;
