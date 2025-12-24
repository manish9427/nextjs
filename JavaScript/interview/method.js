// slice , splice
// shift, unshift, push, pop
// forEach, map, filter, reducer

const fun = (arr)=>{
    const ans = arr.slice(0,3)
    console.log(arr)
    
    const ans2 = arr.splice(2,3,'hello','world','manish','verma')
    console.log(arr)
    return {ans, ans2}
}

const arr = [1,2,3,4,5,6,7,8,9]
const arr2 = arr.sort((a,b)=>b-a)
const ans = fun(arr2)
console.log([ans])