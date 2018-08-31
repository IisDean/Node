var http = require('http'),
urlLib = require('url'),
fs = require('fs');

http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	var json = urlLib.parse(req.url,true).query;
	//{file:wenjianming,inner:neirong}

	fs.writeFile(json.file,json.inner,function(err){
		if(err)console.log(err);
		console.log('生成完毕');
	});


}).listen(9213);