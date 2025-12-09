const findDuplicate = (arr) => {
    let freq = {};
    for(let num of arr){
        if(freq[num]){
            freq[num] += 1;
        }else{
            freq[num] = 1;
        }
    }
    console.log(freq)
    const duplicates = [];
    const unique = [];
    for(let key in freq){
        if(freq[key]>1){
            duplicates.push(Number(key))
        }else{
            unique.push(Number(key))
        }
    }
    return {duplicates, unique};
}

const arr = [1,3,2,1,5];
const {duplicates,unique} = findDuplicate(arr)
console.log("Duplicates:",duplicates)
console.log("Unique:",unique)


