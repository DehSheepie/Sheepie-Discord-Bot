const fs = require('fs');
const functions = require('../functions.js');
module.exports = {
	name: 'assigncategory',
	description: 'Assigns a category for a game.',
	execute(message, args) {
    let games = functions.getGamesData();
		let categories = functions.getCategoriesData();

		// Create args
		var game_name = "";
		var category_name = "";
		var category_bool = false;

		// Get args
    for (i = 0; i < args.length; i++)
    {
			// Check if we are now stitching the category together.
			// Additionally checks if we have the last word in category
			if (category_bool == true & i >= args.length - 1)
			{
				category_name += args[i];
			}
			// Only checks if we are now stitching the category together.
			else if (category_bool == true)
			{
				category_name += args[i] + " ";
			}
			// Checks whether we have the last word in the game name
			else if (args[i][args[i].length - 1] == ":")
			{
				game_name += args[i].slice(0, -1);
				category_bool = true;
			}
			// Otherwise we probably have word in the game name that isn't the last one
			else
			{
				game_name += args[i] + " ";
			}
    }

		var game_found = false;
		var category_found = false;

		console.log(`Game name:${game_name} | Category name:${category_name}`);
		console.log(game_name & category_name);
		// Check that the game and category names both aren't empty
		if (!game_name == "" & !category_name == "")
		{
			// Check for game name in the games file
			for (i = 0; i < games.length; i++)
			{
				if (games[i].name == game_name)
				{
					game_found = true
				}
			}
			// Check for category name in category file
			for (i = 0; i < categories.length; i++)
			{
				if (categories[i].name == category_name)
				{
					category_found = true
				}
			}
			// Check that the game and category was found
			if (game_found & category_found)
			{
				// Get category and add game
				let category_entry_index = categories.findIndex(arg => arg.name == category_name);
				categories_set = new Set(categories[category_entry_index]['games']);
				categories_set.add(game_name);
				categories[category_entry_index]['games'] = Array.from(categories_set);

				// Write to category file
				fs.writeFileSync( "./commands/data/categories.json", JSON.stringify(categories));

				message.channel.send(`[${game_name}] is now in the category [${category_name}]`);
			}
			else if (game_found)
			{
				message.channel.send(`Category: [${category_name}] not found.`);
			}
			else if (category_found)
			{
				message.channel.send(`Game: [${game_name}] not found.`);
			}
			else
			{
				message.channel.send(`Neither the game: [${game_name}] nor category: [${category_name}] was found.`);
			}
		}
		else
		{
			message.channel.send(":no_entry_sign: Game or Category empty. :no_entry_sign:");
		}
	}
};
