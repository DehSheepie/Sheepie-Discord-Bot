const fs = require('fs');
const path = require('path');
module.exports = {
	name: 'addgame',
	description: 'Adds a game to the stored games.',
	execute(message, args) {
// TODO: Add code to allow for an empty json file
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

    if (game_name != "")
    {
      games.push({name: game_name, categories: []});
      let cleaned = games.map(item => {
        return { name: item.name[0], categories: []};
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
