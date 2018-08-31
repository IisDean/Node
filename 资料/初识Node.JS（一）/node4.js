var http = require('http');
http.createServer(function(request,response){
	//console.log(request.url);
	response.setHeader('Access-Control-Allow-Origin','*');

	var url = request.url;
	if(url.indexOf('html')!=-1){
		//console.log(url);
		if(url == '/index.html'){
			response.write('good this index.html');
		}
		else if(url =='/index2.html'){
			response.write('good this index2.html');
		}
		else{
			response.write('404');
		}

	}else{

	}
	//console.log('有人访问来了～');
	//response.write('i"m leo');
	response.end();
	//console.log(request.url);
	
}).listen(9217);

