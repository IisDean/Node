var express = require('express'),
	bodyParser = require('body-parser'),
	server = express(),
	static = require('express-static'),
	cookieParser = require('cookie-parser');

server.listen(2713);

server.use(cookieParser());
server.use(bodyParser.urlencoded());

server.use('',function(req,res,next){
    res.cookie('test','dean',{maxAge: 365*24*3600*1000});
    res.cookie('password','123456',{maxAge: 365*24*3600*1000});
    next();
});

server.use('/dean',function(req,res){
	res.send({
		user: req.cookies.test,
		password: req.cookies.password
	});
});

server.use('/login',function(req,res){
	res.send('ok');
});


server.use(static('./'));