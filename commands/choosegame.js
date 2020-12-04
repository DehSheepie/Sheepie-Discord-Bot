const fs = require('fs');
const path = require('path');
module.exports = {
	name: 'choosegame',
	description: 'Selects a game from the stored games.',
	execute(message, args) {
    let rawdata = fs.readFileSync(path.resolve(__dirname, "games.json"));
    let games = JSON.parse(rawdata);

    var index = Math.floor(Math.random() * games.length)
    var game = games[index];
    message.channel.send(`\`\`\`Game: ` + games[index].name + `\nCategories: ` + games[index].category + "\`\`\`");
	}
};
