module.exports = ({

  name: "profile",
  
  $if: "v4",
  
  aliases: ["p"],

  code: `$thumbnail[1;$userAvatar[$findUser[$message]]]
$title[1;$username[$findUser[$message]] Profile]
$description[1;$addField[1;
World Details;
World Name: $replaceText[$getGlobalUserVar[World;$findUser[$message]];0;$username[$findUser[$message]]]
Total Soldiers: $getGlobalUserVar[Soldiers;$findUser[$message]]
Total Villagers: $getGlobalUserVar[Villager;$findUser[$message]]
Total People: $getGlobalUserVar[Population;$findUser[$message]]
$addField[1;Power;
Damage ⚔️: $sum[$getGlobalUserVar[Damage];$getGlobalUserVar[HeroDamage]]
HP ❤️: $sum[$getGlobalUserVar[HP];$getGlobalUserVar[HeroHP]]]]
$if[$advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]==0]
This User Isn't In Any Clan
$if[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]]==true]
$addField[1;Clan Stats;
Clan Name: $advancedTextSplit[$getGlobalUserVar[ClanL;$advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]];/;1]
Position: $replaceText[$replaceText[$getGlobalUserVar[Clans;$mentioned[1;yes]];1;Co Leader];0;Member]]]
$endif
$if[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]]==false]
$addField[1;**Clan Stats;
Clan Name: $advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]
Position: Leader]]
$endif
$endif
$color[1;ORANGE]
`})
