const fs = require('fs/promises');

// truncate file to rewrite.
fs.writeFile('avatar_floorprices.csv', "", { flag: 'w' }, err => {});

const RedditAvatarScraper = require("./avatar.js");

const slugs_with_tiers = new Map([
  ["imagination-station-x-reddit-collectible-avatars", ["Big City Bear", "Cone Head", "Kid Rexie"]],
  ["the-butterfly-garden-x-reddit-collectible-avatars", ["Minted Monarch", "Butterfly of Diamonds", "Mutant Monarch"]],
  ["growl-gang-x-reddit-collectible-avatars", ["Bow Wow Bandits", "Speedy Demons", "Pounce Patrol"]],
  ["enlightenment-x-reddit-collectible-avatars", ["Raiza", "Etsuko", "Miran"]],
  ["drag-queens-of-big-gay-baby-x-reddit-collectible", ["April May", "Miss Ophelia Surprise", "Hydrogen Purroxide"]],
  ["creatures-of-the-nighties-x-reddit-collectible", ["Possum", "Dark Wolf", "Red Bat"]],
  // supposed to be below, but truncating to allow Opensea to search properly.
  // ["joy-girls-club-x-reddit-collectible-avatars", ["Joy Kawaii Cowgirl", "Disco Queen Joy Girl", "Joy Kawaii Material Girl"]]
  ["joy-girls-club-x-reddit-collectible-avatars", ["Joy Kawaii Cowgirl", "Disco Queen", "Kawaii Material"]],
  ["avatar-rock-out-x-reddit-collectible-avatars", ["Les Rock", "Lara Lava", "Julia Jewels"]],
  ["protectors-of-the-forest-x-reddit-collectible-avat", ["Dragonfly", "Butterfly", "Birdie"]],
  ["bites-of-brazil-x-reddit-collectible-avatars", ["Sandro", "Flor", "Maria"]],
  ["cute-cool-and-creepy-x-reddit-collectible-avatars", ["Cat Fish", "Ancestral Tree", "Golden Hands"]],
  ["creatures-without-pants-x-reddit-collectible-avata", ["Avataur", "Medusatar", "Scalatar"]],
  ["lightspeed-lads-x-reddit-collectible-avatars", ["Bloopy McBloopface", "Dr. Morris Von Wrinklebrain", "Battery Bot"]],
  ["growl-gang-x-reddit-collectible-avatars", ["Bow Wow Bandits", "Speedy Demons", "Pounce Patrol"]],
  ["old-school-cool-x-reddit-collectible-avatars", ["Silver Age Comics", "Classic Animation", "Old-Timey Comedian"]],
  ["aylia-x-reddit-collectible-avatars", ["Maia", "Maru", "Bim"]],
  ["magic-of-the-woods-x-reddit-collectible-avatars", ["Bewitching Eyes", "So Much Truffle", "Flower Fairy"]],
  ["cute-snacks-x-reddit-collectible-avatars", ["Mouse au Chocolat", "Avo Cato", "Hot Dog"]],
  ["peculiar-gang-x-reddit-collectible-avatars", ["Redd Mummy", "Mr. GeeOd", "Cheeky Beak"]],
  ["gettin-groovy-x-reddit-collectible-avatars", ["Groovy", "Lava Lamp Avatar", "Euphoric Swirls"]],
  ["wearing-your-emotions-x-reddit-collectible-avatars", ["Mio Armor", "Mia Flames", "Diamond Diablo"]],
  ["i-quit-my-job-to-be-an-artist-x-reddit-collectibl", ["Frustrated", "Progress", "Confidence"]],
  ["baked-goods-evils-x-reddit-collectible-avatars", ["B•E•N•O•T•A•F•R•A•I•D", "Boroborygmius", "Sweet Providence"]],
  ["enlightenment-x-reddit-collectible-avatars", ["Raiza", "Etsuko", "Miran"]],
  ["doodle-collection-x-reddit-collectible-avatars", ["Knoo", "S'moore", "Stoo"]],
  ["foustlings-x-reddit-collectible-avatars", ["Classic Foustling", "Rainbow Foustling", "Fishy Foustling"]],
  ["the-senses-x-reddit-collectible-avatars", ["The Eyes", "The Mouths", "The Hands"]],
  ["the-minds-eyes-x-reddit-collectible-avatars", ["Good Morning Sunshine", "Mystic Fingers", "Vegan Brains"]],
  ["natsukashii-x-reddit-collectible-avatars", ["Yamata", "Kitsune", "Yami"]],
  ["5-boro-bodega-x-reddit-collectible-avatars", ["deadass from ny", "Pickle Guy", "Gummy"]],
  ["celestial-assembly-x-reddit-collectible-avatars", ["Series-137", "Dr. Nickelmittens", "The Assembler"]],
]);

const options = {
  debug: false,
  sort: false,
  logs: false,
  additionalWait: 0,
  browserInstance: undefined,
};

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
console.log(dateTime);

(async () => {
  for (const [slug, tiers] of slugs_with_tiers) {
    console.log(`===>>> ${slug} <<<===`);
    console.log(`Tiers: ${tiers}`);

    await RedditAvatarScraper.floorprices(slug, tiers, options);
    console.log(`=====================\n`);
  }
})();
