const fetch = require("node-fetch");

//add in ability to search by hash

const getBlock = async (mode, height) => {
  try {
    let block = await fetch(
      `https://api.blockcypher.com/v1/eth/${mode}/blocks/${height}`
    );
    block = await block.json();
    console.log(block);
    return block;
  } catch (error) {
    console.error(error);
  }
};

getBlock("main", "10399728");
