module.exports = {
  name: 'checkvc',
  description: "Checks what voice channel a user is in.",
  execute(message, args) {
    const client = message.client;

    // Checks if a member is conntected to any voice channel
    if (message.member.voice.channel)
    {
      let channel_name = message.member.voice.channel.name;
      message.reply(`I can see you are in the [${message.member.voice.channel.name}] voice channel.`);
    }
    else
    {
      message.reply("You are not in a voice channel.");
    }
  }
};
