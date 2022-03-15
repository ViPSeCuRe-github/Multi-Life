module.exports = ({
  name: "rename",
  code: `Successfully Renamed Your Clan To $message
$textSplit[$getGlobalUserVar[ClanL];/]
$setGlobalUserVar[ClanL;$message/$splitText[2]/$splitText[3]/$splitText[4]/$splitText[5]]
$textSplit[$getGlobalUserVar[ClanL];/]
$onlyIf[$message!=;Mention Your New Clan Name Chief!]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]!=0;You Are Not In Any Clan]
$onlyIf[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]]==false;You Are Not The Owner Of Your Clan]`
})