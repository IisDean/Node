var express = require('express'),
bodyParser = require('body-parser'),
server = express(),
static = require('express-static');

server.listen(2713);

server.use(bodyParser.urlencoded());

server.use('',function(req,res,next){
    res.cookie('text','hehehe',{maxAge: 365*24*3600*1000});
    next();
});

server.use('/dean',function(req,res){
	console.log(req.cookies);
	res.send('ok');
});

server.use(static('./'));