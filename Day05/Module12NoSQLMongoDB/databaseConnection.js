const mongodb = require('mongodb');
const mongoDBClient = mongodb.MongoClient;
require('dotenv').config();

const mongoConnect = (callback)=>{
    mongoDBClient.connect(process.env.MONGOODB_URL)
        .then((resolve)=>{
            console.log('Connected successfully.....');
            callback(resolve);
         }).catch((reject)=>{
              res.status(500).json({message:`MongoDB Connection failed`});
         });
};


module.exports = mongoConnect;
