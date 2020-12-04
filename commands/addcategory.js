const fs = require('fs');
const path = require('path');
module.exports = {
	name: 'addcategory',
	description: 'Adds a category for a game.',
	execute(message, args) {
    let rawdata = fs.readFileSync(path.resolve(__dirname, "games.json"));
    let games = JSON.parse(rawdata);

		// Create args
		var game_name = "";
		var category_name = "";
		var category_bool = false;

		// Get args
    for (i = 0; i < args.length; i++)
    {
			if (category_bool == true & i >= args.length - 1)
			{
				category_name += args[i];
			}
			else if (category_bool == true)
			{
				category_name += args[i] + " ";
			}
			else if (args[i][args[i].length - 1] == ":")
			{
				game_name += args[i].slice(0, -1);
				category_bool = true;
			}
			else
			{
				game_name += args[i] + " ";
				console.log(`invalid arg: ${args[i]}`);
			}
    }
		console.log(`Game name:${game_name} | Category name:${category_name}`);
		console.log(game_name & category_name);
		if (!game_name == "" & !category_name == "")
		{
			for (i = 0; i < games.length; i++)
			{
				if (games[i].name == game_name)
				{
					if (games[i].hasOwnProperty('category'))
					{
						games[i].category.push(category_name)
					}
					else
					{
						games[i].category = [category_name];
					}

					fs.writeFileSync("./commands/games.json", JSON.stringify(games));
					message.channel.send("Game: " + game_name + " added to category: " + category_name);
				}
			}
		}
		else
		{
			message.channel.send("Game or Category invalid.");
		}
	}
};
