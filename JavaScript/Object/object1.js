const person = [
    { name: "Manish", age: 25,isDeveloper:true }
];

for(let key of person[0]){
    console.log(`${key} : ${person[0][key]}`);
}