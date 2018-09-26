var express = require('express');
var	static = require('express-static');
var cookieParser = require('cookie-parser');//取cookie值插件
var	fs = require('fs');

var server = express();
server.listen(8020);


server.use(cookieParser('ADSKFIJDLAJLKDAFJKDAFADSKF'));
server.use('/resign',HandleResign);//注册
server.use('/login',HandleLogin);//登录
server.use('/autoLogin',HandleAutoLogin);//登录

server.use(static('./'));

//登录
function HandleLogin(req,res){
	fs.readFile('./name.txt',function(err,data){
		if( err ){
			console.log('err:'+err);
		}else{
			var jsonData = JSON.parse(data);
			if( jsonData[req.query.user] == req.query.pass ){

				var isCookie = JSON.parse(req.query.isCookie);
				if( isCookie ){
					res.cookie('user',req.query.user+'-'+req.query.pass,{signed: true,maxAge: 1000*60*5});
				}else{
					res.clearCookie('user');
				}
				res.send('登录成功');		
			}else{
				res.send('用户名或者密码错误');			
			}
		}
	});
}

//注册
function HandleResign(req,res){
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

//自动登录
function HandleAutoLogin(req,res){
	var json = req.signedCookies;
	if( json.user == undefined )return res.send('自动登录失败');
	var user = json.user.split('-')[0];
	var pass = json.user.split('-')[1];
	fs.readFile('./name.txt',function(err,data){
		if( err ){
			console.log('err:'+err);
		}else{
			var jsonData = JSON.parse(data);
			if( jsonData[user] == pass ){
				res.send('登录成功');		
			}else{
				res.send('用户名或者密码错误');			
			}
		}
	});
}

