module.exports = ({
  name: "work",
  code: `You Worked And Earned $random[1000;2000] Multi-Life Coins
  $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[1000;2000]]
  $globalCooldown[20m;You Can Work Again After %time%]`
  })
