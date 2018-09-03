var http = require('http'),
    querystring = require('querystring'),
    urlLib = require('url'),
    fs = require('fs');

http.createServer(function(request,response){

	response.setHeader('Access-Control-Allow-Origin','*');

	var json = urlLib.parse(request.url,true).query;
	
	fs.writeFile(json.user,json.pass,function(err){
		if( err )console.log(err);
		console.log('写入成功！');
	});

	if( json.user == 'IisDean' && json.pass == '123456' ){
		response.write('登录成功！');
	}else{
		response.write('登录失败！');
	}
	response.end();

}).listen(9218);