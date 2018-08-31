var urlLib = require('url');
var data = 'https://www.baidu.com/s?wd=hehe&rsv_spt=1&rsv_iqid=0xd0dd21cf000047bc&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&oq=1&inputT=842&rsv_t=c7a9TR1GDDFdUP4hckFVg8DMoj4IvZvvgS2tV2E1s2vJbKc8GpkvqtrKwHYmekIxrmMW&rsv_sug3=7&rsv_sug1=4&rsv_sug7=100&rsv_pq=e98eaf42000043ec&rsv_sug2=0&rsv_sug4=1484';



console.log(urlLib.parse(data,true).query);