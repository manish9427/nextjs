// 1. Write a function that returns only users older than 28 age
//  // 2. Write a function that groups users by city
// // Expected output: { "NYC": [...], "LA": [...] }
const users = [
  { id: 1, name: "Alice", age: 25, city: "NYC" },
  { id: 2, name: "Bob", age: 30, city: "LA" },
  { id: 3, name: "Charlie", age: 25, city: "NYC" },
  { id: 4, name: "David", age: 35, city: "LA" },
];

console.log(users[0].name)

const funMap =  (users) =>{
    return users.map((item)=>item.name)
}

const ansMap = funMap(users)
console.log("Ans from Map",ansMap)


const funFilter = (users) =>{
    return users.filter((item)=> item.age>28)
}

const ansFitler = funFilter(users)
console.log(ansFitler)

const fun = (users) => {
  return users.filter((user) => {
    return user.age > 28;
  });
};
// const fun = (users) => {
//   return users.reduce((acc, user) => {
//     user.age > 28 ? acc.push(user) : null
//     return acc
//   }, []);
// };
const ans = fun(users);
console.log(ans);

// const groupByCity = () => {
//     return 
// }
