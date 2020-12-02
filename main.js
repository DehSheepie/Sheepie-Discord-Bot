const fs = require('fs'); // File system module
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
// Filter is there to make sure only js files are used
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Runs once on startup
client.once('ready', () => {
    console.log('Sheepie Bot is online')
});

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', message =>{
  // If the message doesn't start with the prefix, ignore it.
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // If command doesn't exist, do nothing.
  if (!client.commands.has(command)) return;

  // Attempt to run command unless it is bugged.
  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command :(');
  }
});

client.login(token);
