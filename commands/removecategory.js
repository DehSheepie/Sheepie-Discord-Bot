const fs = require('fs');
const path = require('path');
const functions = require('../functions.js');
module.exports = {
	name: 'removecategory',
	description: 'Removes a category from the stored categories.',
	execute(message, args) {
// TODO: Add code to allow for an empty json file
    let categories = functions.getCategoriesData();
    var category_name = functions.argsToString(args);

		// TODO: Add error incase the category name wasn't found

    if (category_name != "")
    {
			// findIndex returns -1 on fail to find
			let category_index = categories.findIndex(arg => arg.name == category_name);

			if (!category_index === -1)
			{
				categories.splice(category_index, 1);

				// Write to category file
				fs.writeFileSync( "./commands/data/categories.json", JSON.stringify(categories));

				message.channel.send(`Category: [${category_name}] deleted :wastebasket:`);
			}
			else
			{
				message.channel.send(":no_entry_sign: Category not found. :no_entry_sign:");
			}
    }
		else
		{
			message.channel.send(":warning: Please enter a game name. :warning:")
		}
	}
};
