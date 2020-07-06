const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

//mode 'test' isn't working here either

const createAddress = async (mode) => {
  try {
    let newAddress = await fetch(
      `https://api.blockcypher.com/v1/eth/${mode}/addrs?token=${tokenBlockCypher}`,
      {
        method: "POST",
      }
    );
    newAddress = await newAddress.json();
    console.log(newAddress);
    return newAddress;
  } catch (error) {
    console.error(error);
  }
};

createAddress("main");
