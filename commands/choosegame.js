const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const functions = require('../functions.js');

module.exports = {
	name: 'choosegame',
	description: 'Selects a game from the stored games.',
	execute(message, args) {
		if (args.length > 0)
		{
			var category_name = functions.argsToString(args);

			if (functions.checkCategoryExists(category_name))
			{
				let categories = functions.getCategoriesData();

				category_index = functions.getCategoryIndex(category_name);
				game_index = Math.floor(Math.random() * categories[category_index]['games'].length);

				const embed = new Discord.MessageEmbed()
				// Set the title of the field
				.setTitle(categories[category_index]['games'][game_index])
				// Set the color of the embed
				.setColor(0xff0000)
				// Set the main content of the embed
				.setDescription(`Categories: ${functions.getCategories(categories[category_index]['games'][game_index])}`);
				// Send the embed to the same channel as the message
				message.channel.send(embed);
			}
		}
		else
		{
	    let games = functions.getGamesData();

			var index = Math.floor(Math.random() * games.length);
	    var game = games[index];

			const embed = new Discord.MessageEmbed()
			// Set the title of the field
			.setTitle(games[index].name)
			// Set the color of the embed
			.setColor(0xff0000)
			// Set the main content of the embed
			.setDescription(`Categories: ${functions.getCategories(games[index].name)}`);
			// Send the embed to the same channel as the message
			message.channel.send(embed);
		}
	}
};
