module.exports = {
  name: 'checkvc',
  description: "Checks what voice channel a user is in.",
  execute(message, args) {
    const client = message.client;

    // Checks if a member is conntected to any voice channel
    if (message.member.voice.channel)
    {
      message.reply("I can see you are in a voice channel.");
    }
    else
    {
      message.reply("You are not in a voice channel.");
    }
  }
};
