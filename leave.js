module.exports = ({
  name: "leave",
  code: `You Successfully Left Your Clan
$setGlobalUserVar[ClanL;0;$authorID]
$textSplit[$getGlobalUserVar[ClanL;$message[1]];/]$setGlobalUserVar[ClanL;$splitText[1]/$sub[$splitText[2];1]/$splitText[3]/1/$splitText[5];$message[1]]$textSplit[$getGlobalUserVar[ClanL;$message[1]];/]
$onlyIf[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]]==false;$username[$message[1]] Doesn't Own Any Clan]
$onlyIf[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]]==true;You Can't Leave Your Own Clan, You Can Only Delete Your Clan]
$onlyIf[$isBot[$message[1]]==false;Bots Don't Have Clan]
$onlyIf[$userExists[$message[1]]==true;That's Not A Valid Clan Owner ID]
$onlyIf[$message[1]!=;Invalid Format ❌
c!join <user id>]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]!=0;You Aren't In Any Clan]
`
})