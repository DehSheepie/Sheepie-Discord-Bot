const fs = require('fs');
const path = require('path');
module.exports = {
	name: 'choosegame',
	description: 'Selects a game from the stored games.',
	execute(message, args) {
    let rawdata = fs.readFileSync(path.resolve(__dirname, "data/games.json"));
    let games = JSON.parse(rawdata);

    var index = Math.floor(Math.random() * games.length)
    var game = games[index];

		const Discord = require('discord.js');

		const embed = new Discord.MessageEmbed()
    // Set the title of the field
    .setTitle(games[index].name)
    // Set the color of the embed
    .setColor(0xff0000)
    // Set the main content of the embed
    .setDescription(`Categories: ` + games[index].categories);
  	// Send the embed to the same channel as the message
  	message.channel.send(embed);
	}
};
