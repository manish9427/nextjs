const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2); 
console.log(doubled)

// push , pop, shift, unshift → insert/remove
arr.push(4)
console.log(arr) // [1, 2, 3, 4]
const lastElement = arr.pop()
console.log(lastElement)
let a = arr.shift()
console.log(a)
arr.unshift(-1,0)
console.log(arr) // [-1, 0, 1, 2, 3]


// slice, splice → extract/modify
arr.splice(1,2,'a','b') // from index 1, remove 2 elements, add 'a','b'
console.log(arr) // [-1, 'a', 'b', 2, 3]
const newArr = arr.slice(1,4) // from index 1 to index 4 (not included)
console.log(newArr) // ['a', 'b', 2]


// sort, reverse, includes → search and order
const ans = arr.includes(2, 2); // array.includes(value, fromIndex);
console.log(ans)


