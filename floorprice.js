const RedditAvatarScraper = require("./avatar.js");

const slug = "foustlings-x-reddit-collectible-avatars";
const names = ["Classic Foustling", "Rainbow Foustling", "Fishy Foustling"];
const options = {
  debug: false,
  sort: true,
  logs: true,
  additionalWait: 0,
  browserInstance: undefined,
};

console.log(`===>>> ${slug} <<<===`);
console.log(`Names: ${names}`);

(async () => {
  RedditAvatarScraper.floorprices(slug, names);
})();
