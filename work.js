module.exports = ({
  name: "work",
  code: `You Worked And Earned $sum[$random[1000;2000];$multi[$getGlobalUserVar[Villager];25]] Multi-Life Coins
  $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$sum[$random[1000;2000];$multi[$getGlobalUserVar[Villager];25]]]
  $globalCooldown[20m;You Can Work Again After %time%]`
  })
