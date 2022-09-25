const RedditAvatarScraper = require("./avatar.js");

const slugs_with_tiers = new Map([
  ["cute-cool-and-creepy-x-reddit-collectible-avatars", ["Cat Fish", "Ancestral Tree", "Golden Hands"]],
  ["i-quit-my-job-to-be-an-artist-x-reddit-collectibl", ["Frustrated", "Progress", "Confidence"]],
  //["wearing-your-emotions-x-reddit-collectible-avatars", ["Mio Armor", "Mia Flames", "Diamond Diablo"]],
  //["5-boro-bodega-x-reddit-collectible-avatars", ["Deadass from Ny", "Pickle Guy", "Gummy"]],
  //["the-minds-eyes-x-reddit-collectible-avatars", ["Good Morning Sunshine", "Mystic Fingers", "Vegan Brains"]],
  //["foustlings-x-reddit-collectible-avatars", ["Classic Foustling", "Rainbow Foustling", "Fishy Foustling"]],
  //["imagination-station-x-reddit-collectible-avatars", ["Big City Bear", "Cone Head", "Kid Rexie"]],
  //["the-butterfly-garden-x-reddit-collectible-avatars", ["Minted Monarch", "Butterfly of Diamonds", "Mutant Monarch"]],
]);

const options = {
  debug: false,
  sort: false,
  logs: false,
  additionalWait: 0,
  browserInstance: undefined,
};

(async () => {
  for (const [slug, tiers] of slugs_with_tiers) {
    console.log(`===>>> ${slug} <<<===`);
    console.log(`Tiers: ${tiers}`);
    
    await RedditAvatarScraper.floorprices(slug, tiers, options);
    console.log(`=====================\n`);
  }
})();
