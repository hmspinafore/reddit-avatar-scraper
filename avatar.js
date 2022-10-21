const fs = require('fs/promises');

const { getBrowser, offersByUrlWithBrowser } = require("./src/functions/offers.js");

const wait = ms => new Promise(r => setTimeout(r, ms));

async function floorprices(slug, names, options) {
  const { debug, logs, sort, additionalWait, browserInstance } = options;
  const customPuppeteerProvided = Boolean(options.browserInstance);

  for await (const name of names) {
    const url = `https://opensea.io/collection/${slug}?search[query]=${encodeURIComponent(name)}&search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW`;
    let browser = undefined;
    let success = false;
    let results = undefined;
    for (let t = 0; t < 3; t++) {
      try {
        browser = await getBrowser(url, options);
        results = await offersByUrlWithBrowser(url, browser, options);
        success = true;
      } catch (error) {
        console.error(error);
        console.log("retrying...");
        await wait(2000);
      } finally {
	if (browser != undefined) await browser.close();
      }
      if (success) break;
    }

        let floorprice = undefined;
	let extracted_name = undefined;
        if (results.offers.length > 0) {
          console.log(results.offers[0]);
          floorprice = results.offers[0].floorPrice.amount;
	  extracted_name = results.offers[0].name.split("#")[0].trim()
          console.log(`Extracted full name: ${extracted_name}`);
        }
        console.log(`${name}: floor price: ${floorprice}`);
	fs.writeFile('avatar_floorprices.csv', `${extracted_name},${slug},${floorprice}\n`, { flag: 'a' }, err => {});
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
