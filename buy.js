module.exports = ({
  name: "buy",
  $if: "v4",
  code: `
  $if[$toLowerCase[$message]==aircraft]
  You Have Bought An Aircraft For 10,000 MULTI-LIFE Coins
  $setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];10000]]
  $onlyIf[$getGlobalUserVar[Coins]>=10000;You Don't Have 10,000 Multi-Life Coins]
  $endIf
  $if[$toLowerCase[$message]==tank]
  You Have Bought An Aircraft For 15,000 MULTI-LIFE Coins
  $setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];15000]]
  $onlyIf[$getGlobalUserVar[Coins]>=15000;You Don't Have 15,000 Multi-Life Coins]
  $endIf`
  })
