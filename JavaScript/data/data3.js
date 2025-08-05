const orders = [
  { item: "Laptop", qty: 1, price: 1000 },
  { item: "Phone", qty: 2, price: 500 },
  { item: "Tablet", qty: 3, price: 300 },
  { item: "Monitor", qty: 1, price: 200 },
];
const cost = orders.map((item) => item.qty * item.price).filter(price => price > 100);
const totalCost = cost.reduce((acc, curr) => acc + curr, 0);
console.log(`Total cost of all orders: $${totalCost}`);