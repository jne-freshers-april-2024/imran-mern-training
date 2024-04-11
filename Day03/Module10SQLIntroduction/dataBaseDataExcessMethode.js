
const db = require('./databasesConnection');


// all crude operation methods


function fetchAllData(){
     return db.execute('select * from demodata');
};

function findById(id){
    const userid = id;
    return db.execute('select * from demodata where id = ?',[userid]);

};

function insertData(user){

    return db.execute('insert into demodata values(?,?,?)',[user.id,user.name,user.company]);
};