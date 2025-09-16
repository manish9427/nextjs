const findInRange = (arr,min,max)=>{
    return arr.filter(num=>num>=min && num<=max);
}

const arr = [20,60,30,10,15];
const result = findInRange(arr,15,30);
console.log(result); // [20,30,15]

const findRangeWithIndex = (arr,min,max)=>{
    return arr.map((value,index)=>({index,value})).filter(item=>item.value>=min && item.value<=max);
}
const arr2 = [20,60,30,10,15];
const result2 = findRangeWithIndex(arr2,15,30);
console.log(result2); // [{index:0,value:20},{index:2,value:30},{index:4,value:15}]