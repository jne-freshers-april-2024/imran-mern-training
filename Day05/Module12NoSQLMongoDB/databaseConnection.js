const mongodb = require('mongodb');
const mongoDBClient = mongodb.MongoClient;

// let db1;
const mongoConnect = (callback)=>{
    mongoDBClient.connect('mongodb+srv://imran:imran@nodejstraining.6ghesbk.mongodb.net/Nodejs?retryWrites=true&w=majority&appName=NodejsTraining')
        .then((resolve)=>{
            console.log('Connected successfully.....');
            callback(resolve);
             //db1 = resolve.db();
             //callback();
         }).catch((reject)=>{
             console.log(reject);
             //throw reject;
         });
};

const getdb=()=>{
     if(db){
        return db;
     }
};


module.exports = mongoConnect;
