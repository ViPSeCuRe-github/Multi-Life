module.exports = ({
  name: "cinfo",
  code: `$if[$advancedTextSplit[$getGlobalUserVar[Clans;$message[1]];?;1]!=0]
$thumbnail[$advancedTextSplit[$getGlobalUserVar[Clans;$message[1]];?;1]]
$endif
$addField[Total Members;
$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;2]]
$addField[Clan Co Leaders;
$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;5]]
$addField[Clan Leader;
$username[$message[1]]]
$addField[Clan Points;
$getGlobalUserVar[ClanPoints;$message[1]]]
$addField[Clan Name;
$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]]
$color[#FFFF00]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]!=0;That User Doesn't Own Any Clan]
$onlyIf[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL;$message[1]];/;1]]==false;That User Doesn't Own Any Clan]
$onlyIf[$isBot[$message[1]]==false;Bots Don't Have Clan]
$onlyIf[$userExists[$message[1]]==true;That's Not A Valid Clan Owner ID]
$onlyIf[$mentioned[1]==;Do Not Mention Someone Instead Provide The User's ID]
$argsCheck[>1;Please Mention The Clan Owner ID]
`
})