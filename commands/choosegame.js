const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');

function getCategories(game) {
	let categories_data = fs.readFileSync(path.resolve(__dirname, "data/categories.json"));
	let categories = JSON.parse(categories_data);

	// Set up return value
	var return_string = "";

	for (i = 0; i < categories.length; i++)
	{
		if (categories[i]['games'].includes(game) & i == categories.length - 1)
		{
			return_string += categories[i]['name'];
		}
		else if (categories[i]['games'].includes(game))
		{
			return_string += categories[i]['name'] + ", ";
		}
	}

	return return_string;
}

function checkCategoryExists(category)
{
	let rawdata = fs.readFileSync(path.resolve(__dirname, "data/categories.json"));
	let categories = JSON.parse(rawdata);

	for (i = 0; i < categories.length; i++)
	{
		if(categories[i].name == category)
		{
			return true;
		}
	}
	return false;
}

function getCategoryIndex(category)
{
	let rawdata = fs.readFileSync(path.resolve(__dirname, "data/categories.json"));
	let categories = JSON.parse(rawdata);

	for (i = 0; i < categories.length; i++)
	{
		if(categories[i].name == category)
		{
			return i;
		}
	}
	return -1; // This should not happen
}

module.exports = {
	name: 'choosegame',
	description: 'Selects a game from the stored games.',
	execute(message, args) {
		if (args.length > 0)
		{
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

			if (checkCategoryExists(category_name))
			{
				let rawdata = fs.readFileSync(path.resolve(__dirname, "data/categories.json"));
				let categories = JSON.parse(rawdata);

				category_index = getCategoryIndex(category_name);
				game_index = Math.floor(Math.random() * categories[category_index]['games'].length);

				const embed = new Discord.MessageEmbed()
				// Set the title of the field
				.setTitle(categories[category_index]['games'][game_index])
				// Set the color of the embed
				.setColor(0xff0000)
				// Set the main content of the embed
				.setDescription(`Categories: ${getCategories(categories[category_index]['games'][game_index])}`);
				// Send the embed to the same channel as the message
				message.channel.send(embed);
			}
		}
		else
		{
			let rawdata = fs.readFileSync(path.resolve(__dirname, "data/games.json"));
	    let games = JSON.parse(rawdata);

			var index = Math.floor(Math.random() * games.length)
	    var game = games[index];

			const embed = new Discord.MessageEmbed()
			// Set the title of the field
			.setTitle(games[index].name)
			// Set the color of the embed
			.setColor(0xff0000)
			// Set the main content of the embed
			.setDescription(`Categories: ${getCategories(games[index].name)}`);
			// Send the embed to the same channel as the message
			message.channel.send(embed);
		}
	}
};
