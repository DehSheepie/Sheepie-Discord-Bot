const fs = require('fs');
const path = require('path');
const functions = require('../functions.js');
module.exports = {
	name: 'c-',
	description: 'Removes a category from the stored categories using an index.',
	execute(message, args) {
			// TODO: Add code to allow for an empty json file
	    let categories = functions.getCategoriesData();
	    var index = functions.argsToString(args);

			// Checks if it is not a number (NaN)
			if(!isNaN(index))
			{
				// Check for parsing a value with a space
				index = parseInt(index);

				// Check index falls within bounds of the array
				if (index >= 0 && index < categories.length)
				{
					let category_name = categories[index].name;
					categories.splice(index ,1);

					// Write to category file
					fs.writeFileSync( "./commands/data/categories.json", JSON.stringify(categories));

					message.channel.send(`Category: [${category_name}] deleted :wastebasket:`);
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
