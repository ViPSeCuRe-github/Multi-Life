module.exports = ({
  name: "profile",
  aliases: ["p"],
  code: `$thumbnail[1;$userAvatar[$findUser[$message]]]
$title[1;$username[$findUser[$message]] Profile]
$description[1;
World Details
$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]
World Name: $replaceText[$getGlobalUserVar[World;$findUser[$message]];0;$username[$findUser[$message]]]
Total Countries: $getGlobalUserVar[Countries;$findUser[$message]]
Total Presidents: $getGlobalUserVar[Presidents;$findUser[$message]]
Total Soldiers: $getGlobalUserVar[Soldiers;$findUser[$message]]
Total People: $getGlobalUserVar[People;$findUser[$message]]
$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]
Inventory
$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]$customEmoji[FlashyLines;935528503363915826]
Wood: $getGlobalUserVar[Wood;$findUser[$message]]
Stone: $getGlobalUserVar[Stone;$findUser[$message]]
Gem: $getGlobalUserVar[Gem;$findUser[$message]]
Diamond: $getGlobalUserVar[Diamond;$findUser[$message]]]
$color[1;ORANGE]
$onlyIf[$getGlobalUserVar[Start;$findUser[$message]]==1;$username[$findUser[$message]] Hasn't Started Their Career Yet
Type m!start To Start Your Career]`})