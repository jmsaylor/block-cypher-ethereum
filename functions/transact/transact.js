//this is a two step process (two endpoints)

//input and output (read: from and to) used to accord w/ how they talk about it

const fetch = require("node-fetch");
const { tokenBlockCypher } = require("../../config/config");

const transact = async (mode, input, output, wei) => {
  try {
    let transaction = await fetch(
      `https://api.blockcypher.com/v1/eth/main/txs/new?token=${tokenBlockCypher}`,
      {
        method: "POST",
        input: {
          inputs: [{ addresses: [input] }],
          outputs: [
            {
              addresses: [output],
              value: wei,
            },
          ],
        },
      }
    );
    transaction = await transaction.json();

    console.log(transaction);
    //We should have a Tx skeleton at this point. There's one more step.
  } catch (error) {
    console.error(error);
  }
};
