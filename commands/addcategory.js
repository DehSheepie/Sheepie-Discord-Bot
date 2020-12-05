const fs = require('fs');
const path = require('path');
module.exports = {
	name: 'addcategory',
	description: 'Adds a category to the stored categories.',
	execute(message, args) {
// TODO: Add code to allow for an empty json file
		let rawdata = fs.readFileSync(path.resolve(__dirname, "data/categories.json"));
    let categories = JSON.parse(rawdata);
    var category_name = "";

		// Turn args into a string again
    for (i = 0; i < args.length; i++)
    {
      if (i < args.length - 1)
      {
        category_name += args[i] + " ";
      }
      else
      {
        category_name += args[i];
      }
    }

    if (category_name != "")
    {
      categories.push({name: category_name, games: []});
      let cleaned = categories.map(item => {
        return { name: item.name[0], games: []};
      });
      fs.writeFileSync("./commands/data/categories.json", JSON.stringify(categories));
      message.channel.send("Category: " + category_name + " added.");
    }
		else
		{
			message.channel.send("Please enter a category name.")
		}
	}
};
