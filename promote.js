module.exports = ({
  name: "promote",
  code: `You Successfully Promoted $username[$message[1]] To A Co Leader
$textSplit[$getGlobalUserVar[ClanL;$authorID];/]
$setGlobalUserVar[ClanL;$splitText[1]/$splitText[2]/$splitText[3]/$splitText[4]/$sum[1;$splitText[5]]]
$textSplit[$getGlobalUserVar[ClanL;$authorID];/]
$textSplit[$getGlobalUserVar[ClanL;$message[1]];/]
$setGlobalUserVar[ClanL;$splitText[1];$message[1]]
$textSplit[$getGlobalUserVar[ClanL;$message[1]];/]
$setGlobalUserVar[Clans;1;$message[1]]
$onlyIf[$userExists[$message[1]]==true;That's Not A Valid Clan Owner ID]
$onlyIf[$isBot[$message[1]]==false;Bots Don't Have Clan]
$onlyIf[$getGlobalUserVar[Clans;$message[1]]==0;$username[$message[1]] Is Already A Co Leader]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]!=0;$username[$message[1]] Is Not In Any Clan]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]!=0;You Are Not In Any Clan]
$onlyIf[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]]==false;You Are Not The Owner Of Your Clan]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]==$authorID;You Are Not The Owner Of $username[$message[1]]'s Clan]
$onlyIf[$mentioned[1]==;Do Not Mention Someone Instead Provide The User's ID]
$onlyIf[$message[1]!=;Invalid Format ❌
c!promote <user id> ]`
})