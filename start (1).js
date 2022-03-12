module.exports = ({
  name: "start",
  code: `You Have Started Your Career
A World Has Been Given To You
We Hope You Rule The World Properly!
$setGlobalUserVar[Start;1]
$setGlobalUserVar[Players;$sum[$getGlobalUserVar[Players;743318400180158544];1];743318400180158544]
$onlyIf[$getGlobalUserVar[Start;$findUser[$message]]==0;$username[$findUser[$message]] Has Already Started Their Career]`
})