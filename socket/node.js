var http = require('http');
var io = require('socket.io');

var server = http.createServer((req,res)=>{

});

server.listen(8020);
io.listen(server).on('connection',(user)=>{
	// console.log('有人来了');


	user.on('aa',(str)=>{
		console.log(str);
		user.emit('msg',str);
	});

	// user.on('bb',(str)=>{
	// 	console.log(str);
	// });
	// setInterval(()=>{user.emit('aa',Math.random())},1000);
});