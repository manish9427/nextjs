const fun =(str)=>{
    return str.split(" ").map(item => item.split("").reverse().join("")).join(" ")
}
let str = "hello how are you"
let ans = fun(str)
console.log(ans)