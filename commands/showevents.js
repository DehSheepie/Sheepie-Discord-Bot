const functions = require('../functions.js');
const fs = require('fs');

module.exports = {
  name: 'showevents',
  description: 'Shows the events in a event group.',
  execute(message, args) {
    var group_name = functions.argsToString(args);

    if (fs.existsSync(`./commands/data/events/${group_name}.json`))
    {
      let group = functions.getGroupData(group_name);

      // TODO: Make it so the events only show if they are coming up
      let output = "";
      group.events.forEach((event, index) => {
        if (event.upcoming)
        {
          output += `[${index}:${event.name}]: ${event.info}\n`;
        }
      });
      message.channel.send(`__**Events**__\n\`\`\`${output}\`\`\``);
    }
    else
    {
      message.channel.send(":warning: Group not found. :warning:");
    }
  }
};
