const Discord = require('discord.js');
const functions = require('../functions.js');
module.exports = {
	name: 'vote',
	description: 'A quick vote.',
	execute(message, args) {

		var question = functions.argsToString(args);

		const embed = new Discord.MessageEmbed()
		// Set the title of the field
		.setTitle(question)
		// Set the color of the embed
		.setColor(0xff0000)
		// Set the main content of the embed
		.setDescription('Please respond using one of the reactions below.');
		// Send the embed to the same channel as the message

		message.channel.send(embed)
		.then((msg) => {
			msg.react("👍")
			msg.react("👎")
			msg.react("🤷")
		});
		message.delete();
	}
};
