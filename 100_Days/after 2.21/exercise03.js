let Students =[
    {name: 'A' , age:4},
    {name: 'B' , gae:5},
    {name: 'c' , gae:6},
    {name: 'd' , gae:8},
]

let studentsNames = Array.from(students,({name}) => name);
console.log(studentsNames);

//Result :
["A","B","C","D"]
