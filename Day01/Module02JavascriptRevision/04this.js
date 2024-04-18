

const user = {
     username : "imran",
     price:"999",

     greet : function(){
        console.log(`welcome to website ${this.username}`)
        console.log(this);
     }
}

// user.greet();
// user.username ="Bagwan",
// console.log(this);
// user.greet();

// console.log(this);  print {}
// this work inside function only

function chai(){
     let username = "imran Bagwan";
     console.log(this.username);
}

//chai(); // print undefine


const chai1 =()=>{
    let username = "imran Bagwan";
    console.log(this.username);
    console.log(this);
}

//chai1();   undefine {}