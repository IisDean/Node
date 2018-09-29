var express = require('express'),
	static = require('express-static'),
	multer = require('multer'),
	fs = require('fs'),
	path = require('path');

var server = express();
server.listen(8020);

server.use(multer({dest: './save/'}).any());//dest 自动写入文件

server.post('',function(req,res){
	
	//更改文件名
	fs.rename(req.files[0].path,req.files[0].path+path.parse(req.files[0].originalname).ext,function(err){
		if(err)console.log(err);
		res.send('ok');
	});
	/*fs.writeFile('./save/'+ req. +'.png',req.files[0].buffer,function(err){
		if( err ){
			console.log(err);
		}else{
			console.log('ok');
		}
	})*/

});

server.use(static('./'));