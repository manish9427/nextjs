const sortElement = (arr) => {
    return arr.sort((a,b)=>(b-a))
}

const arr = [1,3,2,1,5];
const ans = sortElement(arr)
console.log(ans)


