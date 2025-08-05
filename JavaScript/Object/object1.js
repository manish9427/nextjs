const person = [
    { name: "Manish", age: 25,isDeveloper:true },
    { name: "John", age: 30, isDeveloper: false },
    { name: "Alice", age: 28, isDeveloper: true }
];

for(let i of person){
    console.log(`Name: ${i.name}`);
}

for(let i=0;i<person.length;i++){
    console.log(`Age: ${person[i].age}`);
}

for (let i in person) {
    console.log(`Is Developer: ${person[i].isDeveloper}`);
}