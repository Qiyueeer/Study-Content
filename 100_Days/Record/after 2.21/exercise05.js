const user ={
    name: 'Qiyue',
    age: 22,
    member:false
}

const name = user.name;
const gender = user.gender;


const { name, age, member} = user;

console.log(name)
console.log(age)
console.log(member)




function add(num1, num2) {
    return num1 + num2 ;
}

const add =(num1, num2) =>num1 + num2;


let firstname='1';
let lastname ='2';

let obj ={firstname: firstname, lastname: lastname};

let obj ={firstname, lastname}