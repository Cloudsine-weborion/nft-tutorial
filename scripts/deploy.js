const hardhat = require("hardhat");

async function main() {
  const mynft = await hardhat.ethers.getContractFactory("MyToken");

  const nft = await mynft.deploy()
  await nft.deployed()
  console.log("Contract deployed to address: ", nft.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});