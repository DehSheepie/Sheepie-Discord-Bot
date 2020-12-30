const fs = require('fs');
const path = require('path');

module.exports = {
  // Takes the array of strings generated by main.js and turns it back into a single string
  argsToString : function(args){
    return_value = "";
    for (i = 0; i < args.length; i++)
    {
      if (i < args.length - 1)
      {
        return_value += args[i] + " ";
      }
      else
      {
        return_value += args[i];
      }
    }
    return return_value;
  },

  // Gets all the categories that one game appears in
  // Takes the name of the game and returns a string containing the appropriate categories
  getCategories : function(game) {
  	let categories_data = fs.readFileSync(path.resolve(__dirname, "commands/data/categories.json"));
  	let categories = JSON.parse(categories_data);

  	// Set up return value
  	var return_string = "";

  	for (i = 0; i < categories.length; i++)
  	{
      if (categories[i]['games'].includes(game))
  		{
  			return_string += categories[i]['name'] + ", ";
  		}
  	}

  	return return_string.slice(0,-2);
  },

  // Checks that a category exists inside the json file
  checkCategoryExists : function (category){
  	let rawdata = fs.readFileSync(path.resolve(__dirname, "commands/data/categories.json"));
  	let categories = JSON.parse(rawdata);

  	for (i = 0; i < categories.length; i++)
  	{
  		if(categories[i].name == category)
  		{
  			return true;
  		}
  	}
  	return false;
  },

  // Checks that a game exists inside the json file
  checkGameExists : function (game){
    let rawdata = fs.readFileSync(path.resolve(__dirname, "commands/data/games.json"));
    let games = JSON.parse(rawdata);

    for (i = 0; i < games.length; i++)
    {
      if(games[i].name == game)
      {
        return true;
      }
    }
    return false;
  },

  // Gets the index of a category or in category json file
  getCategoryIndex : function(category){
  	let rawdata = fs.readFileSync(path.resolve(__dirname, "commands/data/categories.json"));
  	let categories = JSON.parse(rawdata);

  	for (i = 0; i < categories.length; i++)
  	{
  		if(categories[i].name == category)
  		{
  			return i;
  		}
  	}
  	return -1; // This should not happen
  },

  getGamesData : function(){
    let rawdata = fs.readFileSync(path.resolve(__dirname, "commands/data/games.json"));
    let games = JSON.parse(rawdata);
    return games;
  },

  getCategoriesData : function(){
    let rawdata = fs.readFileSync(path.resolve(__dirname, "commands/data/categories.json"));
    let categories = JSON.parse(rawdata);
    return categories;
  },

  getGroupsData : function(filename){
    let rawdata = fs.readFileSync(path.resolve(__dirname, `commands/data/events/${filename}.json`));
    let group = JSON.parse(rawdata);
    return group;
  },

  // TODO: Handle a call to this function that takes no parameter
  // Clears all the instances of a game in the categories and returns the data
  clearCategories : function(game){
    let rawdata = fs.readFileSync(path.resolve(__dirname, "commands/data/categories.json"));
  	let categories = JSON.parse(rawdata);

    for (i = 0; i < categories.length; i++)
    {
      if (categories[i].games.includes(game))
      {
        let index = categories[i].games.findIndex(arg => arg == game);
        categories[i].games.splice(index, 1);
      }
    }
    return categories;
  },
}
