const functions = require('../functions.js');
const fs = require('fs');

module.exports = {
  name: 'addeventgroup',
  description: "Adds a group for events to be added to",
  execute(message, args) {

    let text = functions.argsToString(args);
    let values = text.split(':');

    if (values.length === 2)
    {
      // Checks whether the file already exists
      if (!fs.existsSync(`./commands/data/events/${values[0]}.json`))
      {
        let group = {
          name: String(values[0]),
          info: String(values[1]),
          events: []
        };

        // TODO: Write a sanitize function
        fs.writeFileSync(`./commands/data/events/${group.name}.json`, JSON.stringify(group));

        message.channel.send(`Event group: [${group.name}] added.`);
      }
      else
      {
        message.channel.send(`:no_entry_sign: Event group: [${values[0]}] already exists. :no_entry_sign:`);
      }
    }
    else
    {
      message.channel.send(":warning: Please enter the name and info relating to the group seperated with a colon. :warning:");
    }
  }
};
