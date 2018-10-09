var express = require('express'),
	static = require('express-static');

var server = express();
server.listen(8020);

var arr = [];

server.use('/setMsg',function(req,res){

	arr.push(req.query);
	console.log(req.query);
	res.send('成功');

});

server.use('/getMsg',function(req,res){
	res.send(arr);
});

server.use(static('./'));