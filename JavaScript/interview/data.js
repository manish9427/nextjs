const users = [
  { id: 1, name: "Alice", age: 25, city: "NYC" },
  { id: 2, name: "Bob", age: 30, city: "LA" },
  { id: 3, name: "Charlie", age: 25, city: "NYC" },
  { id: 4, name: "David", age: 35, city: "LA" },
];

console.log(users[0].name);
users.map((item) => item.name);
users.filter((item) => item.age > 28);
users.forEach((item) => {
  console.log(item.name, item.age);
});


// 1. Write a function that returns only users older than 28 age
const userOlderThan28 = (users) =>{
    return users.reduce((acc,curr)=>curr.age>28 ? [...acc,curr] : acc,[])
} 

userOlderThan28(users)
console.log(userOlderThan28(users));
//  // 2. Write a function that groups users by city
// // Expected output: { "NYC": [...], "LA": [...] }
function groupUsersByCity(users) {
  return users.reduce((acc, user) => {
    if (!acc[user.city]) {
      acc[user.city] = [];
    }
    acc[user.city].push(user);
    return acc;
  }, {});
}
console.log(groupUsersByCity(users));
