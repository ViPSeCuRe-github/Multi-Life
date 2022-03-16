module.exports = ({
  name: "ckick",
  code: `You Succefully Kicked $username[$message[1]] From Your Clan
$setGlobalUserVar[ClanL;0;$message[1]]
$setGlobalUserVar[Clans;0;$message[1]]
$if[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]]==true]
$setGlobalUserVar[ClanL;$splitText[1]/$sub[$splitText[2];1]/$splitText[3]/$splitText[4]/$splitText[5];$getGlobalUserVar[ClanL]]
$textSplit[$getGlobalUserVar[ClanL;$getGlobalUserVar[ClanL]];/]
$endif
$if[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]]!=true]
$setGlobalUserVar[ClanL;$splitText[1]/$sub[$splitText[2];1]/$splitText[3]/$splitText[4]/$splitText[5]]
$textSplit[$getGlobalUserVar[ClanL];/]
$endif
$onlyIf[$getGlobalUserVar[Clans;$message[1]]==0;You Can't Kick A Co Leader
First Demote Him Then Try Kicking Him]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]!=0;You Aren't In Any Clan]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]!=0;$username[$message[1]] Isn't In Any Clan]
$onlyIf[$checkContains[1;$getGlobalUserVar[Clans];$advancedTextSplit[$getGlobalUserVar[ClanL];/;4]]==true;You Aren't A Leader Or A Co Leader Of Any Clan]
$onlyIf[$checkContains[$getGlobalUserVar[ClanL;$message[1]];$advancedTextSplit[$getGlobalUserVar[ClanL];/;1];$authorID]==true;You Aren't In $username[$message[1]] Clan]
$onlyIf[$isBot[$message[1]]==false;Bots Aren't In Any Clans]
$onlyIf[$userExists[$message[1]]==true;That's Not A Valid User ID]
$argsCheck[>1;Please Mention The User's Id Cheif!]
`
})
