var express = require('express'),
	multer = require('multer'),
	static = require('express-static'),
	path = require('path'),
	fs = require('fs'),
	server = express();

server.listen(8020);

server.use(multer({dest:'./lib'}).any());

server.use('/setFiles',function(req,res){
	console.log(req.files);
	var newFileName = req.files[0].path + path.parse(req.files[0].originalname).ext;
	fs.rename(req.files[0].path,newFileName,function(err){
		if( err ){
			console.log('err:'+err);
		}else{
			res.send(newFileName);
		}
	});
});

server.use(static('./'));