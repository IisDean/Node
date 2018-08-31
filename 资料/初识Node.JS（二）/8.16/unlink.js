var fs = require('fs');

setTimeout(function(){
	fs.unlink('笔记的副本.txt',function(err){
		if(err){
			console.log('删除失败,错误是:'+err);
		}
		else{
			console.log('删除成功了~')
		}
	})
},3000);
