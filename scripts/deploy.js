const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const PreactToken = await hre.ethers.getContractFactory("PreactToken");
  // Deploy the contract with an initial value (references the constructor of the contract)
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  const preactToken = await PreactToken.deploy("PreactToken", 'PT');
  // Wait until deployed
  await greeter.deployed();
  await preactToken.deployed();
  // Display the deployed address
  console.log("Greeter deployed to:", greeter.address);
  console.log("PreactToken deployed to:", preactToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
