var express = require('express');
// console.log(express);

var server = express();
server.listen(8020);

var userRouter = express.Router();
var NewsRouter = express.Router();

server.use('/User',userRouter);
server.use('/News',NewsRouter);

userRouter.use('/dean',function(req,res){
	res.send('dean dean');
});
userRouter.use('/sky',function(req,res){
	res.send('dean sky');
});

NewsRouter.use('/sky',function(req,res){
	res.send('news sky');
});
