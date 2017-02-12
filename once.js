var events=require("events");
var emitter=new events.EventEmitter();
emitter.once("foo",function()
{
	console.log("Hello omkar this is once by using once this event handler is called only once and then destroyed");

});
emitter.emit("foo");
emitter.emit("foo");