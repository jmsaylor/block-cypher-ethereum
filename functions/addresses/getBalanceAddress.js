const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");
const testWallet = require("../../config/testWallet");

// console.log(testWallet);

const getBalanceAddress = async (mode, address) => {
  try {
    let balance = await fetch(
      `https://api.blockcypher.com/v1/eth/${mode}/addrs/${address}/balance`
    );
    balance = await balance.json();
    console.log(balance);
    return balance;
  } catch (error) {
    console.error(error);
  }
};

// getBalanceAddress("main", testWallet.address);
