var net=require("net");
var server=net.createServer(function(socket)
{

});
server.listen(0,function()
{
	var address=server.address();
	console.log("Listening on port "+address.port);
});