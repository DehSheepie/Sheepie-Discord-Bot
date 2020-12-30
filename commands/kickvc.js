const functions = require('../functions.js');

module.exports = {
  name: 'kickvc',
  description: "Kicks the selected user from the voice channel they are in.",
  execute(message, args) {

    const client = message.client;

    console.log(message.mentions.members.size);
    if (message.mentions.users.first())
    {
      if (message.mentions.members.size === 1)
      {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);

        // Checks if a member is conntected to any voice channel
        if (member.voice.channel)
        {
          member.voice.kick();
          message.channel.send(`I have removed [${user.tag}] from the channel.`);
          message.delete();
        }
        else
        {
          message.channel.send(":warning: User is not in a voice channel. :warning:");
          message.delete();
        }
      }
      else
      {
        message.channel.send(":no_entry_sign: Can only kick one user at a time. :no_entry_sign:");
        message.delete();
      }
    }
    else {
      {
        message.channel.send(":no_entry_sign: User does not exist. :no_entry_sign:");
        message.delete();
      }
    }

  }
};
