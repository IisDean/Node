var express = require('express'),
	static = require('express-static'),
	jade = require('jade');

var server = express();
server.listen(8133);

server.use('/search/',function(req,res){
	var allName = req.path;//歌名
	var str = jade.renderFile('./jade/1.jade',{pretty: true,titleName: '您搜索的歌曲是'+allName.substring(1),mp3Name: allName.substring(1)+'.mp3',srcUrl: './../'+allName.substring(1)+'.jpeg',mp3Url: './../'+allName.substring(1)+'.mp3'});
	res.send(str);
});

server.use(static('./mp3/'));