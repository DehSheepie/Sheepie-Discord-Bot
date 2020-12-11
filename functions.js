module.exports = {
  ArgsToString : function(args)
  {
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
  }
}
