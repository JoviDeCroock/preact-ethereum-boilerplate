import { useState, useEffect } from 'preact/hooks';
import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';
import { tw } from 'twind';

import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';

// You get this from "yarn deploy:contracts" it should say "x deployed to: someAddress"
const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

function Greeting() {
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState('');

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new Web3Provider(window.ethereum);
      const contract = new Contract(greeterAddress, Greeter.abi, provider);
      try {
        const data = await contract.greet();
        setGreeting(data);
      } catch (err) {
        console.error(err);
      }
    }    
  }

  useEffect(function() {
    fetchGreeting().then(function() {
      setLoading(false);
    });
  }, [])

  async function commitGreeting() {
    if (!greeting) return;

    if (typeof window.ethereum !== 'undefined') {
      setLoading(true);
      await requestAccount();
      const provider = new Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      await transaction.wait();
      fetchGreeting().then(function() {
        setLoading(false);
      });
    }
  }

  return (
    <div className={tw`flex-col flex items-center justify-center mt-12 space-y-4`}>
      <div className={tw`space-x-2 flex items-center`}>
        <label htmlFor="greeting">Greeting:</label>
        <input disabled={loading} className={tw`p-1 border-b-1 bg-grey`} id="greeting" onInput={e => setGreeting(e.currentTarget.value)} value={greeting} />
      </div>
      <button disabled={loading} className={tw`border-1 bg-grey p-2`} onClick={commitGreeting}>Update Greeting</button>
    </div>
  );
}

export default Greeting;
