var express = require('express');
var static = require('express-static');
var cookieParser = require('cookie-parser');//取cookie值插件

var server = express();
server.listen(2713);

server.use(cookieParser());

server.use('/aaa',function(req,res,next){

	//写入cookie
	res.cookie('pass','123456232',{path: '/aaa',maxAge: 365*24*3600*1000});
	console.log(req.cookies);
	//path 链接地址  maxAge 失效时间

	res.send('ok');

})