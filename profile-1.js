module.exports = ({
  name: "profile",
  aliases: "p",
  code: `
  $if[$getGlobalUserVar[Trophies;$mentioned[1;yes]]>=1500]
$thumbnail[https://media.discordapp.net/attachments/847049141007679528/857989859371909150/Season_2019_-_Gold_1.png]
$elseif[$getGlobalUserVar[Trophies;$mentioned[1;yes]]>=600]
$thumbnail[https://media.discordapp.net/attachments/847049141007679528/857989858948415520/61a2eb96e1ec37eba5969d6b463df2c1.png]
$endelseif
$elseif[$getGlobalUserVar[Trophies;$mentioned[1;yes]]>=0]
$thumbnail[https://media.discordapp.net/attachments/847049141007679528/857989859209642004/1624630776309.png]
$endelseif
$endif
  $title[$username[$mentioned[1;yes]]'s Profile]
  $description[ 
**Stats**
Town Hall Level $customEmoji[townhall;837214550255861760] - **$splitText[5]**
Barracks Level 🏰 - **$sum[$splitText[22];1]**
Defense 🛡 - **$splitText[15]**
Damage ⚔️ - **$splitText[18]**
Trophies $customEmoji[trophies;837214550255861760] - **$getGlobalUserVar[Trophies;$mentioned[1;yes]]**
** **
**Towers**
Gold Generators <:gold:857156090394705921> - **$splitText[2]**
Elixir Generators <:elixir:857155450301579266> - **$splitText[1]**
Dark Elixir Generators $customEmoji[darkelixir;837214550255861760] - **$getGlobalUserVar[Generators;$mentioned[1;yes]]**
** **
**Balance**
Elixir <:elixir:857155450301579266> - **$getGlobalUserVar[Elixir;$mentioned[1;yes]]**
Gold <:gold:857156090394705921> - **$getGlobalUserVar[Coins;$mentioned[1;yes]]**
Dark Elixir $customEmoji[darkelixir;837214550255861760] - **$getGlobalUserVar[Dark;$mentioned[1;yes]]**
Gems $customEmoji[gems;837214550255861760] - **$getGlobalUserVar[Gems;$mentioned[1;yes]]**
** **
**Defenses**
Tower $customEmoji[archer_tower;837214550255861760] - **$splitText[14]**
Cannons <:cannoncart:857156526682669116> - **$splitText[13]**

$if[$advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]==0]
This User Isn't In Any Clan
$elseif[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]]==true]
**Clan Stats**
Clan Name: $advancedTextSplit[$getGlobalUserVar[ClanL;$advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]];/;1]
Position: $replaceText[$replaceText[$getGlobalUserVar[Clans;$mentioned[1;yes]];1;Co Leader];0;Member]]
$endelseif
$elseif[$isNumber[$advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]]==false]
**Clan Stats**
Clan Name: $advancedTextSplit[$getGlobalUserVar[ClanL;$mentioned[1;yes]];/;1]
Position: Leader]
$endelseif
$endif
  $color[$random[1;999999]]
  $textSplit[$getGlobalUserVar[Coc;$mentioned[1;yes]];/]`
});