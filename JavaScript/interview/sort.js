const sortFun = (arr) =>{
    arr.sort((a,b)=>b-a)
    return arr
}
const arr = [1,2,3,2];
const ans = sortFun(arr);
console.log(ans)