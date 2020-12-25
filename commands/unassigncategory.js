const fs = require('fs');
const path = require('path');
const functions = require('../functions.js');
module.exports = {
	name: 'unassigncategory',
	description: 'Unassigns a category for a game.',
	execute(message, args) {
		let categories = functions.getCategoriesData();

		var values = functions.argsToString(args).split(":");

		if (values.length == 2)
		{
			// Values 0 is the game name, values 1 is the category name
			if (functions.checkCategoryExists(values[1]))
			{
				let category_index = functions.getCategoryIndex(values[1]);
				let game_index = categories[category_index]['games'].indexOf(values[0]);

				// If game_index is -1, the game wasn't found
				if (game_index !== -1)
				{
					categories[category_index]['games'].splice(game_index, 1);

					// Write to category file
					fs.writeFileSync( "./commands/data/categories.json", JSON.stringify(categories));

					message.channel.send(`Game: [${values[0]}] removed from the category [${values[1]}] `);
				}
				else
				{
					message.channel.send(`:no_entry_sign: Entered game does not exist. :no_entry_sign:`);
				}
			}
			else
			{
					message.channel.send(`:no_entry_sign: Entered category does not exist. :no_entry_sign:`);
			}
		}
		else
		{
			// TODO: add an error or warning
			message.channel.send(`:warning: Please enter a game followed by a category with a semi-colon seperator. :warning:`);
		}
	}
};
