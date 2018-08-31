var fs = require('fs');

//console.log(fs);
console.log('正在修改中，请稍后...');
setTimeout(()=>{
	fs.rename('fffff.txt','fffff.png',function(err){
		if(err){
			console.log('失败了:'+err);
		}
		else{
			console.log('修改成功')
		}
	})

},2000);

