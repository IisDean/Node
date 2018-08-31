var fs = require('fs');

fs.readFile('./3.txt','utf8',function(err,data){
	if(err)console.log(err);
	console.log(data);
	/*
	fs.writeFile('4.png',data,function(err){
		if(err)console.log(err);
	})
	*/
});