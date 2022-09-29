const fs = require('fs/promises');

const { offersByUrl } = require("./src/functions/offers.js");

async function floorprices(slug, names, optionsGiven = {}) {
  for await (const name of names) {
    await floorpriceByName(slug, name, optionsGiven).then(
      result => {
        floorprice = undefined;
	extracted_name = undefined;
        if (result.offers.length > 0) {
          console.log(result.offers[0]);
          floorprice = result.offers[0].floorPrice.amount;
	  extracted_name = result.offers[0].name.split("#")[0].trim()
          console.log(`Extracted full name: ${extracted_name}`);
        }
        console.log(`${name}: floor price: ${floorprice}`);
	fs.writeFile('avatar_floorprices.csv', `${extracted_name},${slug},${floorprice}\n`, { flag: 'a' }, err => {});
    });
  }
}

async function floorpriceByName(slug, name, optionsGiven = {}) {
  const url = `https://opensea.io/collection/${slug}?search[query]=${encodeURIComponent(name)}&search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW`;
  return await offersByUrl(url, optionsGiven);
}

module.exports = {
	floorprices,
	floorpriceByName,
};
