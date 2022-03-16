module.exports = ({
  name: "people",
  type: "awaitedCommand",
  code: `$editMessage[$message[1];
{title: People Shop}
{description:  
100MLC | Villager
+1 Population • +25MLC In Work Command
ID: villager
1000MLC | Soldier
+10 Population • +1 Damage
ID: soldier
}
{footer: You Are In People Page
Create Command: $getServerVar[Prefix]create (id) (number of people)
}]`
  })
