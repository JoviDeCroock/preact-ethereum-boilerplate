import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';

function App() {
  return <p>Compiled contract: {JSON.stringify(Greeter)}</p>;
}

export default App;
