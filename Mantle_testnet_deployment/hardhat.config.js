require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    "mantle-testnet": {
      url: "https://rpc.testnet.mantle.xyz/",
      //create a .env file to store your wallet's private key which will be used to sign transaction
      accounts: [process.env.PRIV_KEY] // Uses the private key from the .env file
    }
  }
};
