const Discord = require('discord.js');
module.exports = {
	name: 'vote',
	description: 'A quick vote.',
	execute(message, args) {

		var question = "";

		// Turn args into a string again
    for (i = 0; i < args.length; i++)
    {
      if (i < args.length - 1)
      {
        question += args[i] + " ";
      }
      else
      {
        question += args[i];
      }
    }

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
