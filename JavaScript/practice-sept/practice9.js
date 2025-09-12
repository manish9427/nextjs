const orders = [
  {
    p: "100",
    n: "pencil",
    q: "2",
  },
  {
    p: "200",
    o: "pen",
    q: "1",
  },
  {
    p: "150",
    o: "eraser",
    q: "3",
  },
];

// console.log(orders)
// map
const order = orders.map((item)=>{
    let total = item.p * item.q
    return total
}).filter((item)=>item>300)
.reduce((acc, curr) => acc + curr, 0)
console.log(order)