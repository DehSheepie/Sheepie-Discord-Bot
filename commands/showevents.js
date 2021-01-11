const functions = require('../functions.js');

module.exports = {
  name: 'showgroups',
  description: 'Shows all the groups for events.',
  execute(message, args){
    let groups = functions.getGroupsData();

    let output = "";
    groups.forEach((group, index) => {
      output += `[${index}:${group.slice(0, -5)}]: ${functions.getGroupData(group.slice(0, -5)).info}\n`;
    });

    message.channel.send(`__**Event Groups**__\n\`\`\`${output}\`\`\``);
  }
};
