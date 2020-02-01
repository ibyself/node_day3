let express=require('express');
let app=express();
app.get('/',(request,response)=>{
   console.log(request.query);
   response.send('<h1>hello 陌生人</h1>');
});
app.get('/login',(request,response)=>{
   console.log(request.query);
   response.send('<h1>请输入你的账号密码</h1>')
});
app.listen(3000,(err)=>{
    if(!err) console.log('服务器启动成功');
    else console.log(err);
});