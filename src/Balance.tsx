import { useEffect, useState } from 'preact/hooks';
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';

import Token from './artifacts/contracts/PreactToken.sol/PreactToken.json';
import { formatEther } from '@ethersproject/units';

// You get this from "yarn deploy:contracts" it should say "PreactToken deployed to: someAddress"
const tokenAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";

function Balance() {
  const [supply, setSupply] = useState('0');

  async function getTotalSupply() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new Web3Provider(window.ethereum);
      const contract = new Contract(tokenAddress, Token.abi, provider)
      const totalSupply = await contract.totalSupply();
      setSupply(formatEther(totalSupply));
    }
  }

  useEffect(function() {
    getTotalSupply();
  }, []);

  return <p>Total Supply: {supply} PT</p>;
}

export default Balance;
