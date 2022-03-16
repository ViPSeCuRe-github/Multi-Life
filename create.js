module.exports = ({
  name: "create",
  $if: "v4",
  code: `$if[$toLowerCase[$message[1]]==villager]
  You Have Created A Villager In Your Planet
  $setGlobalUserVar[Villager;$sum[$getGlobalUserVar[Villager];$message[2]]]
  $setGlobalUserVar[Population;$sum[$getGlobalUserVar[Population];$message[2]]]
  $setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];$multi[$message[2];100]]]
  $onlyIf[$getGlobalUserVar[Coins]>=$multi[$message[2];100];You Don't Have $multi[$message[2];100] Multi-Life Coins In Your Wallet]
  $onlyIf[$isNumber[$message[2]]==true;Please Mention How Many Villagers You Wanna Buy
  Example: create villager 1]
  $endif
  $if[$toLowerCase[$message[1]]==soldier]
  You Have Created A Soldier In Your Planet
  $setGlobalUserVar[Soldier;$sum[$getGlobalUserVar[Soldier];$message[2]]]
  $setGlobalUserVar[Damage;$sum[$getGlobalUserVar[Damage];$multi[1;$message[2]]]]
  $setGlobalUserVar[Population;$sum[$getGlobalUserVar[Population];$multi[10;$message[2]]]]
  $setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];$multi[$message[2];1000]]]
  $onlyIf[$getGlobalUserVar[Coins]>=$multi[$message[2];1000];You Don't Have $multi[$message[2];1000] Multi-Life Coins In Your Wallet]
  $onlyIf[$isNumber[$message[2]]==true;Please Mention How Many Soldiers You Wanna Buy
  Example: create soldier 1]
  $endif
  $onlyIf[$checkContains[$toLowerCase[$message[1]];villager;president;soldier]==true;$message[1] Is Not A Valid ID]
  $onlyIf[$message!=;Please Mention Whom You Wanna Create]`
  })
