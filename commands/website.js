module.exports = {
	name: 'website',
	description: 'Return the Cyberdragon website',
	execute(message, args) {
		message.channel.send('https://cyberdragon.online');
	}
};
