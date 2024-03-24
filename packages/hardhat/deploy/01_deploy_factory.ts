import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { CooperativeFactory } from "../typechain-types";

const deployYourContract: DeployFunction = async function () {
  // Get the deployed contract factory to deploy it.
  const CooperativeFactoryContract = await ethers.getContractFactory("CooperativeFactory");
  const cooperativeFactory: CooperativeFactory = await CooperativeFactoryContract.deploy();
  if (cooperativeFactory) {
    console.log("CooperativeFactory contract was deployed.");

    // Interact with the deployed contract instance.
    const address = await cooperativeFactory.getAddress();
    console.log("The address returned by getAddress():", address);
  } else {
    console.log("Failed to deploy CooperativeFactory contract.");
  }
};

export default deployYourContract;

deployYourContract.tags = ["Cooperative"];
