const express = require('express');

const app = express();

//const mongoConnect = require('./databaseConnection'); ----------------



const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://imran:imran@nodejstraining.6ghesbk.mongodb.net/?retryWrites=true&w=majority&appName=NodejsTraining';

const client = new MongoClient(url);

async function  getData() {
     const result  = await client.connect();
     // INside db we can write databases name
     let db = result.db('Nodejs');
     let collection = db.collection('User');
     let response = await collection.find({}).toArray();
     console.log(response);
}


getData();












// mongoConnect((client)=>{         ----------------------------------
//      console.log(client);

//       app.listen(3000,()=>{
//             console.log("server is listeing on 3000")
//       })
// })