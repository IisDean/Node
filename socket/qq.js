var http = require('http');
var io = require('socket.io');

var server = http.createServer((req,res)=>{

});

server.listen(8020);
var userArr = [];
io.listen(server).on('connection',(user)=>{

	//新用户上线
	user.on('name',(str)=>{
		user.lastName = str || '未命名用户';
		userArr.push(user.lastName);
		user.broadcast.emit('userUpdata',userArr);
		user.emit('userUpdata',userArr);
	});

	//接收聊天信息
	user.on('msg',(str)=>{
		console.log(str);
		var json = {userName: user.lastName,contents: str,timer: new Date().toLocaleTimeString()};
		user.broadcast.emit('msg',json);
		user.emit('msg',json);
	});

	//用户下线
	user.on('disconnect',()=>{
		user.broadcast.emit('userUp',user.lastName);
		var index = userArr.indexOf(user.lastName);
		userArr.splice(index,1);
	});

});