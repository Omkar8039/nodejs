var commander=require("commander");

commander.prompt("What is your name?",function(name)
{
	console.log("You said your name is",+name);
	process.stdin.pause();
});