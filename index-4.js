
const aoijs = require("aoi.js")

const aoimongo = require("aoi.mongo")

const bot = new aoijs.Bot({

   token: process.env.token,

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
  Player: "0",
  BidPlayer: "0",
  Team: "NoName",
  Bid: "0",
  BidBy: "!0x!0x",
  Start: "0",
  BasePrice: "0",
  Auctioneer: "0",
  Purse: "120"
  
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
loader.load(bot.cmd,'./main/') 