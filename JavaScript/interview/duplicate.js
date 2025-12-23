const fun = (arr) =>{
    const freq={}
    for(let num of arr){
        if(freq[num]){
            freq[num] += 1
        }else{
            freq[num] = 1
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

    return {duplicate,unique}


}
const arr = [1,2,1,2,3,4]
const {duplicate:dup,unique:un} = fun(arr)
console.log(dup,un)