const { offersByUrl } = require("./src/functions/offers.js");

function floorprices(slug, names, optionsGiven = {}) {
  for (const name of names) {
    floorpriceByName(slug, name, optionsGiven).then(
      result => {
        floorprice = undefined;
        if (result.offers.length > 0) {
          console.log(result.offers[0]);
          floorprice = result.offers[0].floorPrice.amount;
        }
        console.log(`${name}: floor price: ${floorprice}`);
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
