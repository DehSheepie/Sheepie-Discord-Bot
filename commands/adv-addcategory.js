const fs = require('fs');
const path = require('path');
const functions = require('../functions.js');
module.exports = {
	name: 'c+',
	description: 'Adds a category to the stored categories.',
	execute(message, args) {
// TODO: Add code to allow for an empty json file
    let categories = functions.getCategoriesData();
    var category_name = functions.argsToString(args);

    if (category_name != "")
    {
			if (!functions.checkCategoryExists(category_name))
			{
				categories.push({name: category_name, games: []});
	      let cleaned = categories.map(item => {
	        return { name: item.name[0], games: []};
	      });
	      fs.writeFileSync("./commands/data/categories.json", JSON.stringify(categories));
	      message.channel.send("Category: [" + category_name + "] added.");
			}
      else {
      	{
					message.channel.send(":warning: Category already exists. :warning:");
				}
      }
    }
		else
		{
			message.channel.send(":no_entry_sign: Please enter a category name. :no_entry_sign:");
		}
	}
};
