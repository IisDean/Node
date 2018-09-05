var express = require('express'),
bodyParser = require('body-parser'),
server = express();

server.listen(9527);

server.use(bodyParser.urlencoded());

server.use(function(req,res){
	console.log(req.body);
});

// server.get('',function(req,res){
// 	console.log('有人get了');
// });

// server.post('',function(req,res){
// 	console.log('有人post了');
// });