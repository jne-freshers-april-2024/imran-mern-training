/*
{
userId:{
     type : Schema.types.ObjectId,
     ref:'User' // Schema name which is related to
     // required : true  --- nessary of that id


     we can stored whole object or id in that field
}

}

// fetching the related data using id we have 
populate method that can gives all related data of that 
Product.populate('userId'); // populate all ralted data in the place of userId--Object

*/