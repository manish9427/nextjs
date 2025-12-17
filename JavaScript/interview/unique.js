const duplicate = (arr) => {
    const freq = {};
    for(let num of arr){
        if(freq[num]){
            freq[num] += 1
        }else{
            freq[num] = 1;
        }
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
    return {duplicate,unique};
}
const arr =  [1,1,3,1,6,4];
const {duplicate:a,unique} = duplicate(arr)
console.log(a) 
console.log(unique) 

