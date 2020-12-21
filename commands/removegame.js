const fs = require('fs');
const path = require('path');
const functions = require('../functions.js');
module.exports = {
	name: 'removegame',
	description: 'Removes a game from the stored games.',
	execute(message, args) {
// TODO: Add code to allow for an empty json file
    let games = functions.getGamesData();
    var game_name = functions.argsToString(args);

    if (game_name != "")
    {
			// findIndex returns -1 on fail to find
			let game_index = games.findIndex(arg => arg.name == game_name);

			if (!game_index === -1)
			{
				games.splice(game_index, 1);

				// Creates a new list of categories that excludes the recently deleted game
				let categories = functions.clearCategories(game_name);

				// Write to category file
				fs.writeFileSync( "./commands/data/categories.json", JSON.stringify(categories));
				// Write to game file
				fs.writeFileSync("./commands/data/games.json", JSON.stringify(games));

				message.channel.send(`Game: [${game_name}] deleted :wastebasket:`);
			}
			else {
				{
					message.channel.send(":no_entry_sign: Game not found. :no_entry_sign:");
				}
			}

    }
		else
		{
			message.channel.send(":warning: Please enter a game name. :warning:");
		}
	}
};
