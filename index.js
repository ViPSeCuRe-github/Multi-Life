
const aoijs = require("aoi.js")

const aoimongo = require("aoi.mongo")

const bot = new aoijs.Bot({

   token: process.env.token,

   prefix: ["m!","$getServerVar[Prefix]"],

   intents: "all",

   database: {

     db: aoimongo,

     type: "aoi.mongo",

     path: "mongodb+srv://ViPSeCuRe_Dev:ImthiyazAhmed@cluster0.qqmim.mongodb.net/DarksalmonHelpfulDesigner?retryWrites=true&w=majority"

   }

})

//Events
bot.onInteractionCreate();
bot.onMessage()
bot.variables({
  Coins: "0",
  PremiumCoins: "0",
  GiveawayCoins: "0",
  Start: "0",
  Players: "0",
  World: "0",
  Countries: "0",
  Soldiers: "0",
  People: "0",
  Presidents: "0",
  Wood: "0",
  Stone: "0",
  Gem: "0",
  Diamond: "0",
  HP: "0",
  Damage: "0",
  HeroDamage: "0",
  HeroHP: "0",
  Most: "0",
  Least: "0",
  GameHero: "None",
  CustomHero: "None",
  Prefix: "m!",
  Clans: "0",
  ClanL: "0",
  ClanPoints: "0",
  Gems: "0",
  ClanMembersName: "0",
  Aircraft: "0",
  Tank: "0",
  Medpack: "0"
})

//Command Example

bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})
bot.command({
  name: "eval",
  code: "$eval[$message]"
})
//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

//Command Handler loader


const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
