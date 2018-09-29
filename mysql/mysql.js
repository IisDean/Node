var mysql = require('mysql');

var pool = mysql.createPool({'host': 'localhost','user': 'root','password': 'root','database': '201809'});

pool.getConnection(function(err,connection){
	if(err){
		console.log('连接失败');
	}else{
		connection.query('SELECT * FROM `user_tab`;',function(err,data){
			if(err){
				console.log(err)
			}else{
				console.log(typeof data);
				connection.end();
			}
		});
	}
});