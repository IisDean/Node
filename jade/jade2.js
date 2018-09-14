var jade = require('jade'),
	http = require('http');

http.createServer(function(req,res){

	var str = jade.renderFile('jade1.jade',{pretty:true});

	res.write(str);
	res.end();
	
}).listen(2173);
