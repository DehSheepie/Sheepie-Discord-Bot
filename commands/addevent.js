const functions = require('../functions.js');
const fs = require('fs');

module.exports = {
  name: 'addevent',
  description: "Adds an event to an existing group.",
  execute(message, args) {

    let text = functions.argsToString(args);
    let values = text.split(':');

    if (values.length === 5)
    {
      // Checks the group file exists
      if (fs.existsSync(`./commands/data/events/${values[0]}.json`))
      {

        let group = functions.getGroupData([values[0]]);

        event =
        {
          name: values[1],
          date: values[2],
          time: values[3],
          info: values[4],
          upcoming: true
        }

        group.events.push(event);

        fs.writeFileSync(`./commands/data/events/${values[0]}.json`, JSON.stringify(group));

        message.channel.send(`Event: [${event.name}] added to group: [${group.name}]`);
      }
      else
      {
        message.channel.send(`:no_entry_sign: Group: [${values[0]}] doesn\'t exist. :no_entry_sign:`);
      }
    }
    else
    {
      message.channel.send(":warning: Please enter the group, event name, date, time and info relating to the event seperated with colons. :warning:");
    }
  }
};
