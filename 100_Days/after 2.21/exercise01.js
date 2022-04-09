const fruits =["Apple", "Mango", "Peach"];
for(let i=0; i< fruits.length; i++){
    const fruit = fruits[i];
    console.log(fruit);
}


const fruits =["Apple","Mango","Peach"];
for(let fruit of fruits)console.log(fruit);




let num =5;
let newNum =num.toString();


const val = 3+"";
console.log(val);//Output:"3"
console.log(typeof val);//Output:"String"