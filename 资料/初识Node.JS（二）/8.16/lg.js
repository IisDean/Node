var http = require('http'),
urlLib = require('url');

var allDate = {};
http.createServer(function(req,res){
	//{ user: 'leo', pass: '123123' }
	//{leo:123,busy,123,blue:211}
	res.setHeader('Access-Control-Allow-Origin','*');
	var json = urlLib.parse(req.url,true).query;
	console.log(json);
	//json['leo'] =123
	//json.leo = 123
	//{ user: 'busy', pass: '123123' }
	//{leo:1212}
	//allDate['busy'] undefined
	//1212
	if(allDate[json.user]){
		res.write('用户名已注册');
	}
	else{
		allDate[json.user] = json.pass;
		res.write('恭喜您,注册成功');
	}
	console.log(allDate);
	res.end();
}).listen(2871);

http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	var json = urlLib.parse(req.url,true).query;
	//{user:leo,pass:123}
	//{leo:123}
	//undefined == 123
	if(allDate[json.user] == json.pass){
		res.write('登录成功');
	}else{
		res.write('用户名或密码错误');
	};
	res.end();


}).listen(2872);




