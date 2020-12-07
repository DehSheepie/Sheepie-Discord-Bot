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

module.exports = {
	name: 'choosegame',
	description: 'Selects a game from the stored games.',
	execute(message, args) {
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
};
