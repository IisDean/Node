var express = require('express');
var	static = require('express-static');
var cookieParser = require('cookie-parser');//取cookie值插件
var	fs = require('fs');

var server = express();
server.listen(8020);


server.use(cookieParser('ADSKFIJDLAJLKDAFJKDAFADSKF'));
server.use('/resign',resign);//注册
server.use('/login',login);//登录

server.use(static('./'));

function login(req,res){
	fs.readFile('./name.txt',function(err,data){
		if( err ){
			console.log('err:'+err);
		}else{
			var jsonData = JSON.parse(data);
			if( jsonData[req.query.user] == req.query.pass ){

				var isCookie = JSON.parse(req.query.isCookie);
				if( isCookie ){
					res.cookie('user',req.query.user,{signed: true,maxAge: 1000*60*5});
				}
				res.send('登录成功');		
			}else{
				res.send('用户名或者密码错误');			
			}
		}
	});
}

//注册
function resign(req,res){
	fs.readFile('./name.txt',function(err,data){
		if( err ){
			console.log('err:'+err);
		}else{
			var jsonData = JSON.parse(data);
			if( jsonData[req.query.user] ){
				res.send('用户名已存在');
			}else{
				jsonData[req.query.user] = req.query.pass;
				console.log(jsonData);
				fs.writeFile('./name.txt',JSON.stringify(jsonData),function(err){
					if( err ){
						console.log(err);
					}else{
						res.send('注册成功');
					}
				});
			}
		}
	});
}

