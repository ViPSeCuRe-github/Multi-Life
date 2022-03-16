module.exports = ({
  name: "buy",
  $if: "v4",
  code: `
  $if[$toLowerCase[$message]==aircraft]
  You Have Bought An Aircraft For 10,000 MULTI-LIFE Coins
  $setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];10000]]
  $setGlobalUserVar[Aircraft;$sum[$getGlobalUserVar[Aircraft];1]]
  $setGlobalUserVar[Damage;$sum[$getGlobalUserVar[Damage];10]]
  $onlyIf[$getGlobalUserVar[Aircraft]<=10;You Already Have Bought The Maximum Limit Of Aircrafts]
  $onlyIf[$getGlobalUserVar[Coins]>=10000;You Don't Have 10,000 Multi-Life Coins]
  $endIf
  $if[$toLowerCase[$message]==tank]
  You Have Bought A Tank For 15,000 MULTI-LIFE Coins
  $setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];15000]]
  $setGlobalUserVar[Tank;$sum[$getGlobalUserVar[Tank];1]]
  $setGlobalUserVar[Damage;$sum[$getGlobalUserVar[Damage];15]]
  $onlyIf[$getGlobalUserVar[Tank]<=10;You Already Have Bought The Maximum Limit Of Tanks]
  $onlyIf[$getGlobalUserVar[Coins]>=15000;You Don't Have 15,000 Multi-Life Coins]
  $endIf
  $if[$toLowerCase[$message]==medpack]
  You Have Bought A Medpack For 8,000 MULTI-LIFE Coins
  $setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];8000]]
  $setGlobalUserVar[Medpack;$sum[$getGlobalUserVar[Medpack];1]]
  $setGlobalUserVar[HP;$sum[$getGlobalUserVar[HP];5]
  $onlyIf[$getGlobalUserVar[Medpack]<=10;You Already Have Bought The Maximum Limit Of MedPacks]
  $onlyIf[$getGlobalUserVar[Coins]>=8000;You Don't Have 8,000 Multi-Life Coins]
  $endIf
  $onlyIf[$checkContains[$toLowerCase[$message[1]];aircraft;tank;medpack]==true;$message[1] Is Not A Valid ID]
  $onlyIf[$message!=;Please Mention Whom You Wanna Create]`
  })
