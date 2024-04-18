const hobbies = ["cricket","podcast"];

for(let hobbie of hobbies){
     console.log(hobbie);
}

const newHobbies= hobbies.map(h=>('hobbies: '+h));
console.log(newHobbies);