const fs = require('fs');
const functions = require('../functions.js');
module.exports = {
	name: 'g-',
	description: 'Removes a game from the stored games using an index.',
	execute(message, args) {
		// TODO: Add code to allow for an empty json file
    let games = functions.getGamesData();
    var index = functions.argsToString(args);

		// Checks if it is not a number (NaN)
		if(!isNaN(index))
		{
			// Check for parsing a value with a space
			index = parseInt(index);

			// Check index falls within bounds of the array
			if (index >= 0 && index < games.length)
			{
				let game_name = games[index].name;
				games.splice(index ,1);

				// Creates a new list of categories that excludes the recently deleted game
				let categories = functions.clearCategories(game_name);

				// Write to category file
				fs.writeFileSync( "./commands/data/categories.json", JSON.stringify(categories));
				// Write to game file
				fs.writeFileSync("./commands/data/games.json", JSON.stringify(games));

				message.channel.send(`Game: [${game_name}] deleted :wastebasket:`);
			}
			else
			{
				message.channel.send(":no_entry_sign: Invalid index: Falls outside bounds. :no_entry_sign:");
			}
		}
		else
		{
			message.channel.send(":no_entry_sign: Invalid index: Invalid number. :no_entry_sign:");
		}
	}
};
