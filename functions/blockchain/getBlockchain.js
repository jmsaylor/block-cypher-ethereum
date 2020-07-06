const fetch = require("node-fetch");

//mode 'test' doesn't seem to work, 'main' does

const getBlockchain = async (mode) => {
  try {
    let blockchain = await fetch(`https://api.blockcypher.com/v1/eth/${mode}`);
    blockchain = await blockchain.json();
    console.log(blockchain);
    return blockchain;
  } catch (error) {
    console.error(error);
  }
};

getBlockchain("main");
