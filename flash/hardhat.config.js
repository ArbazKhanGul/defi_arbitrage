require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
// require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-chai-matchers");

const { PRIVATE_KEY_1, PRIVATE_KEY_2, PRIVATE_KEY_3 ,BSCSCAN_API_KEY} = process.env;

module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.5" },
      { version: "0.6.6" },
      { version: "0.8.8" },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://bsc-dataseed1.binance.org/",
      },
      accounts: [
        { privateKey: PRIVATE_KEY_1, balance: "10000000000000000000000" }, // Example balance: 10000 ETH for the first account
        { privateKey: PRIVATE_KEY_2, balance: "10000000000000000000000" }, // Example balance: 10000 ETH for the second account
        { privateKey: PRIVATE_KEY_3, balance: "10000000000000000000000" }, // Example balance: 10000 ETH for the third account
      ]
    },
  },
};
