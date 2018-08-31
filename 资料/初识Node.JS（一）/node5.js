var http = require('http');
http.createServer(function(request,response){
	//console.log(request.url);
	response.setHeader('Access-Control-Allow-Origin','*');
	//console.log(request.url)
	var url = request.url.substring(2);
	console.log(url);
	//user=leo&pass=123456
	//['user=leo','pass=123456'];
	//{user:leo,pass:123456};
	var arr = url.split('&');
	var json = {};
	for(var i = 0;i < arr.length;i++){
		//arr[0] = user=leo
		//json[user] = 'leo';
		//json.user = 'leo'; 
		//'user=leo' //['user','leo']
		//json[user]='leo'
		//json[pass]='123456'
		json[arr[i].split('=')[0]]=arr[i].split('=')[1]
	};
	console.log(json.user);

	if(json[user] == 'leo' && json[pass] == '123456'){
		response.write('登陆成功');
	}
	else{
		response.write('登陆失败');
	}
	response.end();



}).listen(9217);

