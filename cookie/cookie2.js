var express = require('express');
var static = require('express-static');
var cookieParser = require('cookie-parser');//取cookie值插件

var server = express();
server.listen(2713);

server.use(cookieParser('sadfgdafasfsadf'));

server.use('',function(req,res,next){

	//写入cookie
	// res.cookie('pass','123456232',{maxAge: 60*1000});

	req.secret = 'sadfgdafasfsadf';
	res.cookie('pass','123456',{maxAge: 60*1000,signed:true});

	//cookie加密
	console.log(req.signedCookies);

	//删除cookie
	// var json = req.cookies;
	// for(var i in json){
	// 	res.clearCookie(i);
	// }
	res.send('ok');
})