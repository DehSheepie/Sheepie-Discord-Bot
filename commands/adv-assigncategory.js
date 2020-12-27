const fs = require('fs');
const functions = require('../functions.js');
module.exports = {
	name: 'g->c',
	description: 'Assigns a category for a game using the indexes of the game and category.',
	execute(message, args) {
    var games = functions.getGamesData();
		var categories = functions.getCategoriesData();

		// Get the index and category_name
		var values = functions.argsToString(args);

		// Split values by the delimiter
		// indicies[0] = games
		// indicies[1] = categories
		var indicies = values.split(":");

		if (indicies.length === 2)
		{
			// Checks both indicies are numbers
			if (!isNaN(indicies[0]) && !isNaN(indicies[1]))
			{
				// Parses values to an int before using them as indicides
				// (There is probably a better way to do this)
				indicies[0] = parseInt(indicies[0]);
				indicies[1] = parseInt(indicies[1]);

				// Checks the indicides fall within acceptable ranges for both the games and category data
				if((indicies[0] >= 0 && indicies[0] < games.length) && (indicies[1] >= 0 && indicies[1] < categories.length))
				{
					let game_name = games[indicies[0]].name;
					let category_name = categories[indicies[1]].name;

					// TODO: Make a function in functions.js out of this
					// Creates a set and adds the game to the set so that duplicate values aren't added
					categories_set = new Set(categories[indicies[1]]['games']);
					categories_set.add(game_name);
					categories[indicies[1]]['games'] = Array.from(categories_set);

					// Write to category file
					fs.writeFileSync( "./commands/data/categories.json", JSON.stringify(categories));

					message.channel.send(`[${game_name}] is now in the category [${category_name}]`);
				}
				else
				{
					message.channel.send(":no_entry_sign: One of the indicies was outside of the acceptable range. :no_entry_sign:");
				}

			}
			else
			{
				message.channel.send(":no_entry_sign: Invalid index. :no_entry_sign:");
			}
		}
		else
		{
			// TODO: Add code to show that there was an invalid number of indicies given
			message.channel.send(":no_entry_sign: Invalid number of indicies given :no_entry_sign:");
		}
	}
};
