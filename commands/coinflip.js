module.exports = {
	name: 'coinflip',
	description: 'A coinflip command.',
	execute(message, args) {
		if(Math.random() > 0.5)
    {
      message.channel.send(':coin: Coinflip landed on heads!');
    }
    else
    {
      message.channel.send(':coin: Coinflip landed on tails!');
    }
	}
};
