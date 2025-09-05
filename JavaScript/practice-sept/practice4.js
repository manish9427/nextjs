const arr = [
  { username: "Manish", age: 25 },
  { username: "Ankit", age: 26 },
  { username: "Rohit", age: 27 },
];
console.log(arr.map((item) => (item.username )));
console.log(arr.map((item) => ({ username: item.username, age: item.age })));
