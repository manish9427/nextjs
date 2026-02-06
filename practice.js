// 1. Write a function that returns only users older than 28 age
// 2. Write a function that groups users by city
//    Expected output: { "NYC": [...], "LA": [...] }
const users = [
  { id: 1, name: "Alice", age: 25, city: "NYC" },
  { id: 2, name: "Bob", age: 30, city: "LA" },
  { id: 3, name: "Charlie", age: 25, city: "NYC" },
  { id: 4, name: "David", age: 35, city: "LA" }
];

// console.log(users.id.age)

// const fun = (users) =>{
//     const userAge = users.filter((users)=>users.age>28)
//     console.log(userAge) ;
// }

// fun()

//  id, name, age [["1","Manish"],["2","Neeraj"]] print age 

const arr = [["1","Manish",32],["2","Neeraj", 24]]

for(let i= 0;i<arr.length;i++){
  // for (let j=0;j<arr.length;j++){
    console.log(arr[i][2])
}

