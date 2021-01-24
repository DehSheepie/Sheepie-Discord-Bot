const Discord = require('discord.js');
const functions = require('../functions.js');

module.exports = {
	name: 'showgames',
	description: 'Shows all the games and games in them.',
	execute(message, args) {
			var games = functions.getGamesData();

			let output = "";
			games.forEach((game, index) => {
				output += `[${index}:${game.name}]: ${functions.getCategories(game.name)}\n`;
			});
			message.channel.send(`__**Games**__\n\`\`\`${output}\`\`\``);
	}
};
