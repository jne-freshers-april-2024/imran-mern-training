
let value = ture;

function showData(){
     setTimeout(()=>{
           console.log("inside showData function")
           console.log("value : ",value);
     },1000)
}


showData();

let age =24;
if(age>18){
    console.log("you can vote");
}else{
    console.log("you can not vote");
}