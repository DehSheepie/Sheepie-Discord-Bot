const fs = require('fs');
const functions = require('../functions.js');

module.exports = {
  name: 'removeevent',
  description: "Removes a group for events to be added to",
  execute(message, args) {
    let text = functions.argsToString(args);
    let values = text.split(':');
    let groups = functions.getGroupsData();

    // Shows each of the group names
    // This should get deleted eventually
    for (i = 0; i < groups.length; i++)
    {
      console.log(groups[i]);
      let group = functions.getGroupData(groups[i].slice(0,-5));
      console.log(group.name);
    }

    if (values.length === 2)
    {

      // Checks the group exists
      if (fs.existsSync(`./commands/data/events/${values[0]}.json`))
      {
        let group = functions.getGroupData(values[0]);
        let event_index = group.events.indexOf(arg => arg.name == values[1]);
        console.log(event_index);
        // Checks the event exists in the group
        if (event_index !== -1)
        {
          group.events.splice(event_index, 1);

          fs.writeFileSync(`./commands/data/events/${values[0]}.json`, JSON.stringify(group));

          message.channel.send(`Event: [${values[1]}] has been removed from group: [${values[0]}]`);
        }
        else
        {
          message.channel.send(":warning: Group not found. :warning:");
        }
      }
      else
      {
          message.channel.send(":warning: Event not found. :warning:");
      }
    }
    else
    {
      message.channel.send(":warning: Please enter a group followed by the name of the event you wish to remove seperated with a colon. :warning:");
    }
  }
};
