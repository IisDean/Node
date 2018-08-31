var data = 'wd=1&rsv_spt=1&rsv_iqid=0xd0dd21cf000047bc&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=322&rsv_sug4=323';
var querystring = require('querystring');
console.log(querystring.parse(data));