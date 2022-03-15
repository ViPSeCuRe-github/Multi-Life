module.exports = ({
  name: "ccreate",
  code: `You Successfully Created A Clan With Name $message
$setGlobalUserVar[ClanL;$message/1/0/1/0]
$onlyIf[$message!=;Invalid Format❌
c!ccreate ❌
c!ccreate <name> ✅]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];25000]]
$onlyIf[$getGlobalUserVar[Coins]>=25000]
$onlyIf[$isNumber[$message]==false;Your Clan Name Should Utleast Contain A Letter]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]==0;You Are Already In A Clan]
`
})