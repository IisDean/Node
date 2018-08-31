var fs = require('fs');
fs.readFile('http://www.clevaly.com/liyou/index.html',function(err,data){
	fs.writeFile('1.html',data,function(err){
		if(err)console.log(err);
	})
});