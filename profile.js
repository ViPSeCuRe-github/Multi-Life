module.exports = ({

  name: "profile",

  aliases: ["p"],

  code: `$thumbnail[1;$userAvatar[$findUser[$message]]]
$title[1;$username[$findUser[$message]] Profile]
$description[1;$addField[1;
World Details;
World Name: $replaceText[$getGlobalUserVar[World;$findUser[$message]];0;$username[$findUser[$message]]]
Total Countries: $getGlobalUserVar[Countries;$findUser[$message]]
Total Presidents: $getGlobalUserVar[Presidents;$findUser[$message]]
Total Soldiers: $getGlobalUserVar[Soldiers;$findUser[$message]]
Total People: $getGlobalUserVar[People;$findUser[$message]]
$addField[1;Power;
Damage ⚔️: $sum[$getGlobalUserVar[Damage];$getGlobalUserVar[HeroDamage]]]
$color[1;ORANGE]
$onlyIf[$getGlobalUserVar[Start;$findUser[$message]]==1;$username[$findUser[$message]] Hasn't Started Their Career Yet
Type m!start To Start Your Career]`})
