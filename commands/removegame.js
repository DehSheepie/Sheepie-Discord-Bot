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
			let game_index = games.findIndex(arg => arg.name == game_name);
			games.splice(game_index, 1);

			let categories = functions.clearCategories(game_name);

			// Write to category file
			fs.writeFileSync( "./commands/data/categories.json", JSON.stringify(categories));
			// Write to game file
			fs.writeFileSync("./commands/data/games.json", JSON.stringify(games));

			message.channel.send("Game deleted :wastebasket:");
    }
		else
		{
			message.channel.send(":warning: Please enter a game name. :warning:")
		}
	}
};
