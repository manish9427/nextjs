// 1 . fibonacci series
// 2 . from the given array find duplicate and unique element 


// Solution 1
const fibonacci = (n)=>{
    const arr = [n]
    arr[0] = 0
    arr[1]=1

    for(let i=2;i<n;i++){
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr;
}

let num = 10;
let ans = fibonacci(num);
console.log(ans);

// Solution 2

const findDuplicateAndUnique = ()=>{
    const freq = {}
    for(let num of arr){
        freq[num]=(freq[num]||0)+1;
    }
    
    const duplicate = [];
    const unique = [];
    for(let key in freq){
        if(freq[key]>1){
            duplicate.push(Number(key))
        }else{
            unique.push(Number(key))
        }
    }
    return {duplicate,unique}
}

const arr = [10,9,8,7,6,5,1,2,3,4,5,1,2,3,4,5]
let result = findDuplicateAndUnique(arr);
console.log(result);