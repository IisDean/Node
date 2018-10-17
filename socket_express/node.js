var express = require('express'),
	io = require('socket.io'),
	server = express(),
	http = require('http').Server(server);
var blood = maxBlood = 1000000000;

http.listen(8020);

server.use('/lll',(req,res)=>{
	res.send('404');
});

io.listen(http).on('connection',(user)=>{
	
	user.emit('msg','123');
	user.on('kill',(str)=>{
		var ran = Math.random()*5000+5000;
		blood -= ran;
		user.emit('kill',[blood/maxBlood,ran]);
		user.broadcast.emit('kill',[blood/maxBlood,ran]);
	});

});
server.use('/',express.static('./'));