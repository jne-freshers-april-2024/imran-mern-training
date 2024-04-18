const name = "imran";
var age = 24;
const compay = "Thinkitive Techology";


function summarysUser(){
     return(
         "name : " + name 
          +" age : " + age+
          " company : "+compay
     );
}

const variable = ()=>{
    return(
        "name : " + name 
         +" age : " + age+
         " company : "+compay
    );
}

const variable1 = ()=>(
        "name : " + name 
         +" age : " + age+
         " company : "+compay
    );

const add = (a,b)=> a+b;
const add1 = a => a + 3.17;
const add2 =()=> 10 + 210;



console.log(summarysUser());
console.log("using arrow function : ",variable());
console.log("using arrow function and without return : ",variable1());


console.log("add() : ",add(20,50));
console.log("add()1 : ",add1(20));
console.log("add()2 : ",add2());