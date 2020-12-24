const Discord = require('discord.js');
const functions = require('../functions.js');
module.exports = {
	name: 'vote',
	description: 'A quick vote.',
	execute(message, args) {

		var text = functions.argsToString(args);
		if (text.split(":").length == 1)
		{
			let question = text;
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
		else
		{
			// Redo this
			let reaction_numbers = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣", "🔟"]
			text = text.split(":");
			let question = text[0];
			let string = "";
			for (i = 1; i < text.length; i++)
			{
				string += `[${reaction_numbers[i]}]: ${text[i]}\n`;
			}

			const embed = new Discord.MessageEmbed()
			// Set the title of the field
			.setTitle(question)
			// Set the color of the embed
			.setColor(0xff0000)
			// Set the main content of the embed
			.setDescription('Please respond using one of the reactions below.')
			.addField("Options", string);


			// Send the embed to the same channel as the message
			 message.channel.send(embed).then((msg) => {
				 for(i = 1; i < text.length; i++)
				 {
					 msg.react(reaction_numbers[i]);
				 }
			 });



			message.delete();

		}
	}
};
