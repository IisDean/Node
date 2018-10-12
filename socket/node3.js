var http = require('http');
var io = require('socket.io');

var server = http.createServer((req,res)=>{

});

server.listen(8020);
io.listen(server).on('connection',(user)=>{

	user.on('divNode',(json)=>{
		console.log(json);
		user.broadcast.emit('style',json);
	});

});