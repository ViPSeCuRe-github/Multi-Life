module.exports = ({
 name: "clan",
 code: `
Succesfully Completed Your Clan Quest
Your Clan Points Has Been Increased✌️
$if[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]]==true]
$setGlobalUserVar[ClanPoints;$sum[$getGlobalUserVar[ClanPoints;$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]];1];$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]]
$else
$setGlobalUserVar[ClanPoints;$sum[$getGlobalUserVar[ClanPoints];1]]
$endif
$globalCooldown[15m;You Have To Wait For %time% To Complete Clan Quest Again]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]!=0;You Aren't In Any Clan]
$onlyIf[$checkContains[$message;quest;quests;Quests;Quest;QUEST;QUESTS]==true;]
`
})