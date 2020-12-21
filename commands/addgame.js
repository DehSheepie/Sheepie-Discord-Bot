const fs = require('fs');
const path = require('path');
const functions = require('../functions.js');
module.exports = {
	name: 'addgame',
	description: 'Adds a game to the stored games.',
	execute(message, args) {
// TODO: Add code to allow for an empty json file
    let games = functions.getGamesData();
    var game_name = functions.argsToString(args);

    if (game_name != "")
    {
			if (!functions.checkGameExists(game_name))
			{
				games.push({name: game_name});
	      let cleaned = games.map(item => {
	        return { name: item.name[0]};
	      });
	      fs.writeFileSync("./commands/data/games.json", JSON.stringify(games));
	      message.channel.send("Game: [" + game_name + "] added.");
			}
    	else
			{
				message.channel.send(":warning: Game already exists. :warning:");
			}
    }
		else
		{
			message.channel.send(":no_entry_sign: Please enter a game name. :no_entry_sign:");
		}
	}
};
