var express = require('express');
var static = require('express-static');

var server = express();
server.listen(2713);

server.use('',function(req,res,next){

	res.send('ok');

})