require('dotenv').config()
const {MongoClient} = require('mongodb');

const url = process.env.MONGOODB_URL;

const client = new MongoClient(url);

async function  getData() {
     const result  = await client.connect();
     let db = result.db(process.env.DATABASENAME);
     let collection = db.collection(process.env.COLLECTION_NAME);
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