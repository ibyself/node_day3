let db=require('./db');
let studentModel=require('./model/students');
let teacherModel=require('./model/teachers');
!(async()=>{
    await db;

    let result=studentModel.find({name:'陈鑫'});
    console.log(await result);

    // await teacherModel.create({
    //     teacher_id:'20200201',
    //     name:'陈鑫',
    //     age:'14',
    //     sex:'男'
    // });
    let test=teacherModel.find({name:'陈鑫'});
    console.log(await test);
})();