
const user = {
    username : "imran",
    price:"999",

    greet : function(){
       console.log(`welcome to website ${this.username}`)
       console.log(this);
    }
}

// Object destructure is using proterties of object 
//  this is the destructuring
function printPersonData({username,price}){
    console.log(`${username} and ${price}`);
}

printPersonData(user);



const{username,price} = user;
console.log(`${username} and ${price}`);


// Array Destructure is using any name

let arr = ["12",'122'];
const [arr1,arr2] = arr;
console.log(`${arr1} and ${arr2}`);