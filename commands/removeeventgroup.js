const functions = require('../functions.js');
const fs = require('fs');


module.exports = {
  name: 'removeeventgroup',
  description: "Removes a group file.",
  execute(message, args) {

    let text = functions.argsToString(args);

    if (!fs.existsSync(`./commands/data/events/${text}.json`))
    {
      message.channel.send(`:no_entry_sign: Event group: [${text}] does not exist. :no_entry_sign:`);
    }
    else
    {
      fs.unlinkSync(`./commands/data/events/${text}.json`);
      message.channel.send(`Group ${text} deleted. :wastebasket:`)
    }
  }
};
