var http = require('http'),
    urlLib = require('url'),
    fs = require('fs');

var allDate = {};
fs.readFile('./副本/node_readFile.txt',function(err,data){

	http.createServer(function(request,response){

		response.setHeader('Access-Control-Allow-Origin','*');

		var json = urlLib.parse(request.url,true).query;

		console.log(json);
		console.log(data);

		fs.writeFile('./副本/node_readFile.txt',JSON.stringify(json),function(err){
			if( err )console.log(err);
			response.write('写入成功');
			response.end();
		});


	}).listen(9218);

});