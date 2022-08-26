require("dotenv").config()
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");

const { PRIVATE_KEY, RPC_URL } = process.env
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};