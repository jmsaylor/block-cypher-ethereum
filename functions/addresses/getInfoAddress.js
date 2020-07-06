const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");
const testWallet = require("../../config/testWallet");

// console.log(testWallet);

const getInfoAddress = async (mode, address) => {
  try {
    let info = await fetch(
      `https://api.blockcypher.com/v1/eth/${mode}/addrs/${address}`
    );
    info = await info.json();
    console.log(info);
    return info;
  } catch (error) {
    console.error(error);
  }
};

getInfoAddress("main", testWallet.address);
