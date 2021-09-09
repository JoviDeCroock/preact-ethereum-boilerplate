
## Scripts

- `yarn dev`
  - Spins up the dev server on http://localhost:3000
  - Spins up a local blockchain for testing purposes (creates 20 test accounts)
- `yarn compile:contracts` will compile the contracts in `contracts` with `hardhat`
- `yarn deploy:contracts` deploys the compiled contracts to the local blockchain

## Workflow

We start out by running `yarn dev` which spins up the local servers, followed by compiling and deploying our contracts.
After deploying the contracts we'll see something like `Greeter deployed to: someAddress`, this address is important as it is
the location of where our contract has been deployed.

Next we'll take one of the accounts outputted by `yarn dev` example:

```sh
[1] Account #0: someAddress (10000 ETH)
[1] Private Key: someKey
```

which we'll use in [metamask](https://metamask.io/) to connect to our local blockchain as a generated account. We click
our metamask extension and should see a dropdown in the top-right containing `localhost:8545` this is our locally deployed chain.
Click the Avatar next to the dropdown and proceed to "import account", paste one of the private keys in there and 🎉 you're rich... on your own chain...



## VSCode Extensions

- [Solidity syntax](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
