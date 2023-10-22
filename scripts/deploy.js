const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);

  // Deploy Gitmod contract
  // const Gitmod = await ethers.getContractFactory("Gitmod");
  // const gitmod = await Gitmod.deploy();
  // await gitmod.deployed();
  // console.log("Gitmod contract deployed to:", gitmod.address);

  // // Deploy NFT contract
  // const NFT = await ethers.getContractFactory("NFT");
  // const nft = await NFT.deploy();
  // await nft.deployed();
  // console.log("NFT contract deployed to:", nft.address);

  // // Deploy NFTMarketplace contract
  // const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  // const marketplace = await NFTMarketplace.deploy(nft.address);
  // await marketplace.deployed();
  // console.log("NFTMarketplace contract deployed to:", marketplace.address);

  // Additional setup or contract interactions can be added here

  console.log("Deployment completed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });