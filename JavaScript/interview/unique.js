const findUnique = (arr) =>{
    const freq={};
    for(let num of arr){
        if(freq[num]){
            freq[num] +=1
        }else{
            freq[num] = 1;
        }
    }
    console.log(freq)
    const unique = [];
    for(let key in freq){
        if(freq[key]===1){
            unique.push(Number(key))
        }
    }
    return unique;
}
const arr = [2,1,3,1,2,5,6];
const ans = findUnique(arr);
console.log(ans)
