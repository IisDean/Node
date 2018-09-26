var jade = require('jade');
var fs = require('fs');

var str = jade.renderFile('jade-for.jade',{pretty: true,a: 12,b: 32,json: 'btn',arr: {
	"width": '100px',
	"height": '100px'
},html: '<p>122</p><h1>打发爱迪生</h1>'});
	
	console.log(str);
// fs.writeFile('./create.html',str,function(err){

// 	if( err )console.log(err);
// })