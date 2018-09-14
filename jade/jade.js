var jade = require('jade');

// var str = jade.render('input');
var str = jade.renderFile('jade1.jade',{pretty:true});

console.log(str);