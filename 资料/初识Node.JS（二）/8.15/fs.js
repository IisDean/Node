var fs = require('fs');

fs.writeFile('aaa.html','<div>明天考试了</div>',function(err){
	if(err)console.log(err);
	console.log('写入完毕...请您查看.')
})