module.exports = ({
name:"bal",
aliases:["b","balance","wallet"],
code: `$thumbnail[1;$userAvatar[$findUser[$message]]]
$title[1;$username[$findUser[$message]] Balance]
$description[1;
$customEmoji[MultiLifeCoinMultiLife Coins: $getGlobalUserVar[Coins;$findUser[$message]]
MultiLife Premium Coins: $getGlobalUserVar[PremiumCoins;$findUser[$message]]
MultiLife Giveaway Coins: $getGlobalUserVar[GiveawayCoins;$findUser[$message]]]
$color[1;YELLOW]
$footer[1;Earn,Earn And Earn]
$onlyIf[$getGlobalUserVar[Start;$findUser[$message]]==1;$username[$findUser[$message]] Hasn't Started Their Career Yet
Type m!start To Start Your Career]`
})
