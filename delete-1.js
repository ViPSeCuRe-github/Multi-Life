module.exports = ({
  name: "delete",
  code: `You Succefully Deleted Your Clan
$setGlobalUserVar[ClanPoints;0]
$setGlobalUserVar[ClanL;0]
$setGlobalUserVar[Clans;0]
$djsEval[
(async () => {
const all = await client.db.all("main").then(b => b.filter(o => o.key.toLowerCase().startsWith("clanl") && Number(o.data.value) == message.author.id))

for (const b of all) {
client.db.delete("main", b.key)
}
})()
]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;5]==0;Demote Your Co Leaders First Chief!]
$onlyIf[$message==$advancedTextSplit[$getGlobalUserVar[ClanL];/;1];Mention Your Clan Name Chief!]
$onlyIf[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]]==false;You Are Not The Owner Of Your Clan]
$onlyIf[$advancedTextSplit[$getGlobalUserVar[ClanL];/;1]!=0;You Are Not In Any Clan]`
})