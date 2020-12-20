//const fs = require('fs');
//const path = require('path');
const Discord = require('discord.js');
const functions = require('../functions.js');

module.exports = {
	name: 'showcategories',
	description: 'Shows all the categories and games in them.',
	execute(message, args) {
			categories = functions.getCategoriesData();

			let output = "";
			categories.forEach((category, index) => {
				output += `${index}: ${category.name}: ${category.games}\n`;
			});

			message.channel.send(`\`\`\`${output}\`\`\``);
	}
};
