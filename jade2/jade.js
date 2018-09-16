var express = require('express');
var	static = require('express-static');
var	cookieParser = require('cookie-parser');
var	fs = require('fs');

var server = express();
server.listen(8020);

server.use('/resign',function(req,res){
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

});

server.use(static('./'));