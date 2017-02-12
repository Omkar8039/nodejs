var net = require("net");
var server = net.createServer(function(socket) {
socket.end("Hello omkar  connect karne ki kloshish ki tumne!\n");
});
 
server.listen(8300);