var http = require('http');
http.createServer(function(request,response){
	response.setHeader('Access-Control-Allow-Origin','*');
	var url = request.url.substring(2);
	var arr = url.split('&');
	var json = {};
	for(var i = 0;i < arr.length;i++){
		json[arr[i].split('=')[0]]=arr[i].split('=')[1];
	};
	console.log(json.user);
	if(json['user'] == 'leo' && json['pass'] == '123456'){
		response.write('登陆成功');
	}
	else{
		response.write('登陆失败');
	}
	response.end();



}).listen(9217);

