module.exports = {
	name: 'ping',
	description: 'Pong!',
	execute(message, args) {
		const Discord = require('discord.js');

		const embed = new Discord.MessageEmbed()
      // Set the title of the field
      .setTitle('Yo, yo, yo!')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('Suh my dude! Flipping pong mate!');
    	// Send the embed to the same channel as the message
    	message.channel.send(embed)
			.then((msg) => {
				msg.react("786324988385951786")
			});
	}
};
