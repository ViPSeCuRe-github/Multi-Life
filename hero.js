module.exports = ({
  name: "heroes",
  aliases: "hero",
  code: `$thumbnail[$userAvatar[$findUser[$message]]]
  $title[1;$findUser[$message]'s Deck]
  $description[1;
  $addField[1;Custom Hero;
  $replaceText[$getGlobalUserVar[CustomHero];None;$username[$findUser[$message]] Doesn't Own Any Custom Hero]]
  $addField[1;In Game Hero;
  $replaceText[$getGlobalUserVar[GameHero];None;$username[$findUser[$message]] Doesn't Own Any Hero]]
  ]
  $color[1;BLUE]
  `
  })
