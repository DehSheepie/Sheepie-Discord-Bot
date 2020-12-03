const fs = require('fs');
const path = require('path');
module.exports = {
	name: 'addgame',
	description: 'Adds a game to the stored games.',
	execute(message, args) {
    let rawdata = fs.readFileSync(path.resolve(__dirname, "games.json"));
    let games = JSON.parse(rawdata);
    var game_name = "";

		// Turn args into a string again
    for (i = 0; i < args.length; i++)
    {
      if (i < args.length - 1)
      {
        game_name += args[i] + " ";
      }
      else
      {
        game_name += args[i];
      }
    }

    if (args != "")
    {
      games.push({name: game_name});
      let cleaned = games.map(item => {
        return { name: item.name[0]};
      });
      fs.writeFileSync("./commands/games.json", JSON.stringify(games));
      message.channel.send("Game: " + game_name + " added.");
    }
		else
		{
			message.channel.send("Please enter a game name.")
		}
	}
};
