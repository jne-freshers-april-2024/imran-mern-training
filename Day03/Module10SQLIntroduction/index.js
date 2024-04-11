const db = require('./databasesConnection');



// const querydata = 'insert into demodata values(?,?,?)';


// const values = [1,'gaurav','Thinkitive'];

// db.query(querydata , values ,(res,error)=>{
//      if(res){
//         console.log("Query excuted successfully ",res);
//      }else{
//         console.log("Query excuted not excuted ",error);
//      }

//      db.end();
// })


// db.execute('select * from employe where id=1');

// db.end();


// db.execute('select * from demodata').then((resolve)=>{
//      console.log("excute succesfully ",resolve);
//      console.log("single data object ",resolve[0])
// }).catch((reject)=>{
//      console.log("Have some issue ",reject);
// }).finally(()=>{
//      console.log("inside finally ");
//      db.end();
// })