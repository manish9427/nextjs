const arr = [5,4,3,2,1];

// return new array

const newArr = arr.reduce((curr,acc) => curr + acc , 0);
console.log(newArr)

 arr.slice(1,2) 
 console.log(arr)

 // modify original array

arr.splice(0,2)
console.log(arr)

const arr2 = [];
arr.forEach((item) => arr2.push(item))
console.log(arr2)



