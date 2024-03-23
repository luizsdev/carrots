import { Contract } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Define constructor arguments
  const name = "Your Cooperative Token Name";
  const symbol = "COOP";
  const tokenPrice = 100; // Set your desired token price
  const supply = 1000000; // Set your desired initial token supply
  const imagem = "Link to your token image"; // Set your desired token image
  const bank = deployer; // You can set the bank address to the deployer for simplicity
  const goal = 1000000; // Set your desired fundraising goal

  // Deploy the contract with constructor arguments
  await deploy("Cooperative", {
    from: deployer,
    args: [name, symbol, tokenPrice, supply, imagem, bank, goal],
    log: true,
    autoMine: true, // This is optional, for faster deployment on local networks
  });

  // Get the deployed contract to interact with it after deploying.
  const yourContract = await hre.ethers.getContract<Contract>("Cooperative", deployer);
  console.log("👋 Initial greeting:", await yourContract.getAddress());
};

export default deployYourContract;

deployYourContract.tags = ["Cooperative"];
