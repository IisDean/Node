var mysql = require('mysql'),
	express = require('express'),
	static = require('express-static'),
	jade = require('jade');

var server = express();
server.listen(8020);


server.use('/news',function(req,res){
	if( !req.query.uid ){
		return res.send('404');
	}
	var Pool = mysql.createPool({
		'host': 'localhost',
		'user': 'root',
		'password': 'root',
		'database': '201809'
	});
	Pool.getConnection(function(err,connection){
		if( err ){
			console.log(err);
		} else{
			connection.query("SELECT * FROM `user` WHERE id='"+ req.query.uid +"';",function(err,data){
				if( err ){
					console.log(err);
					res.send('404');
				}else{
					var str = jade.renderFile('./www/jade/2.jade',{pretty: true,arr: data});
					res.send(str);
					connection.end();
					// res.send('发布成功');
				}
			});
		}
	});
});

server.use('/list',function(req,res){
	var pageNum;
	if(req.query.page == '0' || !req.query.page){
		pageNum = 0;
	}else{
		pageNum = req.query.page;
	}
	var Pool = mysql.createPool({
		'host': 'localhost',
		'user': 'root',
		'password': 'root',
		'database': '201809'
	});
	Pool.getConnection(function(err,connection){
		if( err ){
			console.log(err);
		} else{
			connection.query("SELECT id,user,textName,time FROM `user`;",function(err,data){
				if( err ){
					console.log(err);
					res.send('404');
				}else{
					var needData = data.slice(pageNum*3,pageNum*3+3);
					var str = jade.renderFile('./www/jade/1.jade',{pretty: true,arr: needData,arr2: data});
					res.send(str);
					connection.end();
					// res.send('发布成功');
				}
			});
		}
	});
});

server.use('/getText',function(req,res){
	var Pool = mysql.createPool({
		'host': 'localhost',
		'user': 'root',
		'password': 'root',
		'database': '201809'
	});
	Pool.getConnection(function(err,connection){
		if( err ){
			console.log(err);
		} else{
			connection.query("INSERT INTO `user` (`user`,`textName`,`time`,`inner`) VALUES('"+ req.query.user +"','"+ req.query.textName +"','"+ req.query.time +"','"+ req.query.inner +"')",function(err,data){
				if( err ){
					console.log(err);
					res.send('发布失败了');
				}else{
					connection.end();
					res.send('发布成功');
				}
			});
		}
	});
});

server.use(static('./www'));