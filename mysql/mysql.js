var mysql = require('mysql');
var http = require('http');

var pool = mysql.createPool({'host': 'localhost','user': 'root','password': 'root','database': '201809'});


var server = http.createServer(function(req,res){
	pool.getConnection(function(err,connection){
		if(err){
			console.log('连接失败');
		}else{
			connection.query('SELECT * FROM `user_tab`;',function(err,data){
				if(err){
					console.log(err)
				}else{
					console.log(data);
					connection.end();
					res.write(JSON.stringify(data));
					res.end();
				}
			});
		}
	});
}).listen(8020);


var server2 = http.createServer(function(req,res){

	pool.getConnection(function(err,connection){
		if( err ){
			console.log('连接失败');
		}else{
			connection.query('INSERT INTO `user_tab` (`user`,`pass`) VALUES("buff","123456");',function(err,data){
				if( err ){
					console.log(err);
				}else{
					connection.end();
					res.write(JSON.stringify(data));
					res.end();
				}
			});
		}
	});

}).listen(8021);