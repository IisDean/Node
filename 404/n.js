var express = require('express');
var static = require('express-static');
var fs = require('fs');

var server = express();
server.listen(8020);

server.use('',function(req,res,next){
	fs.readFile('.'+req.path,function(err,data){
		if( err ){
			next();
		}else{
			res.write(data);
			res.end();
		}
	});
});

server.use('/*',function(req,res){
	fs.readFile('./404.html',function(err,data){
		if( err ){
			console.log(err);
		}else{
			res.write(data);
			res.end();
		}
	})
});