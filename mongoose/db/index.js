/*
* 连接数据库*/
const PORT=27017;//端口号
const DB_NAME='test';//数据库名称
let mongoose=require('mongoose');
mongoose.set('useCreateIndex',true);
module.exports=new Promise((resolve,reject)=>{
    mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true ,useUnifiedTopology: true});
    mongoose.connection.once('open',(err)=>{
        if(!err){
            console.log(`本机的${PORT}端口${DB_NAME}数据库连接成功了`);
            resolve();
        }else{
            reject(err);
        }
    });
});
