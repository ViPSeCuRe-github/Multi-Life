
const aoijs = require("aoi.js")

const aoimongo = require("aoi.mongo")

const bot = new aoijs.Bot({

   token: "OTMwNTE4MDE0MjU4OTgzMDMy.Yd3Cbg.vvM2dF0nkYYg772dSPl8phU2mq4",

   prefix: "m!",

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
  Defense: "0",
  Damage: "0",
  HeroDamage: "0",
  HeroHP: "0",
  Most: "0",
  Least: "0",
  GameHero: "None",
  CustomHero: "None"
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
