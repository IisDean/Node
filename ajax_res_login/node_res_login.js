var http = require('http'),
    urlLib = require('url');

var allDate = {};
http.createServer(function(request,response){

	response.setHeader('Access-Control-Allow-Origin','*');

	var json = urlLib.parse(request.url,true).query;

	if( allDate[json.user] ){
		response.write('账号已注册！');
	}else{
		allDate[json.user] = json.pass;
		response.write('注册成功！');
	}
	console.log(allDate);
	response.end();

}).listen(9218);

http.createServer(function(request,response){

	response.setHeader('Access-Control-Allow-Origin','*');

	var json = urlLib.parse(request.url,true).query;

	if( allDate[json.user] == json.pass ){
		response.write('登录成功');
	}else{
		response.write('账号或密码错误');
	}
	console.log(allDate);
	response.end();

}).listen(9219);