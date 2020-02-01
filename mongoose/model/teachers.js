/*
* 教师模型*/
let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let teacherSchema=new Schema({
    teacher_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    enable_flag:{
        type:String,
        default:'Y'
    }
});
module.exports=mongoose.model('teachers',teacherSchema);