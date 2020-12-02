module.exports = {
	name: 'd6',
	description: 'A d6 roller.',
	execute(message, args) {
    const number = Math.floor(Math.random() * 6) + 1;
    switch(number)
    {
      case 1:
      message.channel.send("D6 Roll: :one:");
      break;
      case 2:
      message.channel.send("D6 Roll: :two:");
      break;
      case 3:
      message.channel.send("D6 Roll: :three:");
      break;
      case 4:
      message.channel.send("D6 Roll: :four:");
      break;
      case 5:
      message.channel.send("D6 Roll: :five:");
      break;
      case 6:
      message.channel.send("D6 Roll: :six:");
      break;
    }
	}
};
