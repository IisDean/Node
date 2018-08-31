var http = require('http');
var querystring = require('querystring');

http.createServer(function(request,response){

	response.setHeader('Access-Control-Allow-Origin','*');

	// var url = request.url.substring(2);
	// console.log(url);

	// var arr = url.split('&');
	// var json = {};
	// for(var i = 0;i<arr.length;i++){
	// 	json[arr[i].split('=')[0]] = arr[i].split('=')[1];
	// }
	// console.log(json);

	var str = '';
	//监听数据
	request.on('data',function(data){
		str += data;
	});

	//接收完毕
	request.on('end',function(){
		console.log(str);
		var json = querystring.parse(str);
		if( json.user == 'IisDean' && json.pass == '123456' ){
			response.write('登录成功！');
		}else{
			response.write('登录失败！');
		}
		response.end();
	});

	// if(json['user'] == 'IisDean' && json['pass'] == '123456'){
	// 	response.write('登录成功！');
	// }else{
	// 	response.write('登录失败！');
	// }

	// if(url.indexOf('html') != -1){
	// 	console.log(url);
	// 	if( url ==  '/index.html'){
	// 		response.write('good index.html');
	// 	}else{
	// 		response.write('404');
	// 	}
	// }

	// console.log('有人来访问来了~ ');
	// response.write('I m node');
	// response.end();

	// console.log('今天天气不错');
}). listen(9218);