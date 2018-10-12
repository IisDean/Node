var http = require('http');
var io = require('socket.io');

var server = http.createServer((req,res)=>{

});

server.listen(8020);
io.listen(server).on('connection',(user)=>{

	user.on('aa',(str)=>{
		console.log(str);
		user.broadcast.emit('msg',str);
		user.emit('msg',str);
	});

	user.on('disconnect',()=>{
		user.broadcast.emit('msg','有人下线了');
	});

});