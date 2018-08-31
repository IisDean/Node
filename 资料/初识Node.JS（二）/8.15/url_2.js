var http = require('http'),
urlLib = require('url'),
querystring = require('querystring');

http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	//console.log(req.url)
	var json = urlLib.parse(req.url,true).query;
	if(json.user =='leo' && json.pass =='123456'){
		res.write('ok');
	}
	else{
		res.write('no ok!');
	}
	res.end();



}).listen(8210);