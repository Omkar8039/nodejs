var url=require("url");
var parse=url.parse("http://www.google.com?name=omkar");
console.log(parse.protocol);
console.log(parse.host);
console.log(parse.query); 