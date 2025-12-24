const fun = (arr) =>{
    let total = 0;

    for(let item of arr){
        total += item.price * item.quantiy
    }

    let total2 = 0;
    
    arr.forEach((item) =>{
        total2 += item.price * item.quantiy
    })
    console.log(total)
    return {total,total2}
}

const arr = [
    {product:"laptop",price:50000,quantiy:2}, // 100000
    {product:"mobile",price:20000,quantiy:3}, // 60000
    {product:"tablet",price:30000,quantiy:1}, // 30000
    {product:"watch",price:10000,quantiy:4}, // 40000
    {product:"headphone",price:8000,quantiy:6}, // 48000
]
const ans = fun(arr)
console.log(ans.total,ans.total2)