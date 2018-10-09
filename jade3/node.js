var express = require('express'),
	jade = require('jade');

var server = express();

server.listen(8020);

var userRouter = express.Router(),
	listRouter = express.Router(),
	newsRouter = express.Router();

server.use('/user',userRouter);
server.use('/list',listRouter);
server.use('/news',newsRouter);

server.use('',function(req,res){
	var str = jade.renderFile('./1.jade',{pretty: true});
});