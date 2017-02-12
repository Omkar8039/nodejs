var commander=require("commander");
commander.confirm("Continue?",function(proceed)
{
  console.log("Your response was "+proceed);
});