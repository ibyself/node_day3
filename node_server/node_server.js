let http=require('http');
let {parse}=require('querystring');
let server=http.createServer((request,response)=>{
    let param=request.url.split('?')[1];
    let paramObj=parse(param);
    response.setHeader('content-type','text/html;charset=utf-8');
    if(paramObj.name==='chenxin'){
        response.end('<h1>hello ! 陈鑫</h1>');
    }else if(paramObj.name==='陈飞宇'){
        response.end('<h1>hello ! 陈飞宇</h1>');
    }
    response.end("<h1>hello! 陌生人</h1>");

});
server.listen(3000,(err)=>{
    if(!err)console.log('服务器启动成功了');
    else cosole.log(err);
});