module.exports = ({
  name: "join",
  code: `You Succefully Joined $advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]
$textSplit[$getGlobalUserVar[ClanL;$message[1]];/]$setGlobalUserVar[ClanL;$splitText[1]/$sum[$splitText[2];1]/$splitText[3]/1/$splitText[5];$message[1]]$textSplit[$getGlobalUserVar[ClanL;$message[1]];/]
$textSplit[$getGlobalUserVar[ClanL;$authorID];/]$setGlobalUserVar[ClanL;$message[1];$authorID]$textSplit[$getGlobalUserVar[ClanL;$authorID];/]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]==0;You Are Already In A Clan]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]!=0;$username[$message[1]] Is Not In Any Clan]
$onlyIf[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]]==false;$username[$message[1]] Doesn't Own Any Clan]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;2]<=9;Clan Is Already Full]
$onlyIf[$isBot[$message[1]]==false;Bots Don't Have Clan]
$onlyIf[$userExists[$message[1]]==true;That's Not A Valid Clan Owner ID]
$onlyIf[$message[1]!=;Invalid Format ❌
c!join <user id>]

`
})