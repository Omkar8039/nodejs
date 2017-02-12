var events=require("events");
var emitter=new events.EventEmitter();
var username="Omkar Nath";
var password="123456";
emitter.on("useradd",function(username,password)
{
  console.log("Added user: "+username);
});
emitter.emit("useradd",username,password);