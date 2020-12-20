const fs = require('fs');
const path = require('path');
const functions = require('../functions.js');
module.exports = {
	name: 'addcategory',
	description: 'Adds a category to the stored categories.',
	execute(message, args) {
// TODO: Add code to allow for an empty json file
// TODO: Add a check in the case that the category already exists
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
	      message.channel.send("Category: " + category_name + " added.");
			}
      else {
      	{
								message.channel.send(":no_entry_sign: Category already exists. :no_entry_sign:")
				}
      }
    }
		else
		{
			message.channel.send(":no_entry_sign: Please enter a category name.")
		}
	}
};
