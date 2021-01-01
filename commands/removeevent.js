const functions = require('../functions.js');
const fs = require('fs');

module.exports = {
  name: 'removeevent',
  description: "Removes a group for events to be added to",
  execute(message, args) {

    let text = functions.argsToString(args);
    let values = text.split(':');

    if (values.length === 2)
    {

    }
};
