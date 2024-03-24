import { Contract } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // Get the deployed contract factory to deploy it.
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("CooperativeFactory", {
    from: deployer,
    log: true,
    autoMine: true, // This is optional, for faster deployment on local networks
  });

  const yourContract = await hre.ethers.getContract<Contract>("CooperativeFactory", deployer);
  const address = await yourContract.getAddress();
  // Interact with the deployed contract instance.
  console.log("The address returned by getAddress():", address);
};

export default deployYourContract;

deployYourContract.tags = ["CooperativeFactory"];
