const obj = {
  name: "John",
  age: 30,
  city: "New York"
};

const { name, age, city } = obj;

console.log(name,age,city)
console.log(obj)


const orders = [
  { item: "Laptop", qty: 1, price: 1000 },
  { item: "Phone", qty: 2, price: 500 },
  { item: "Tablet", qty: 3, price: 300 },
  { item: "Monitor", qty: 1, price: 200 },
];

orders.map(({item,qty,price})=>{
  console.log(item,qty,price)
})