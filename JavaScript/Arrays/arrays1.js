const arr1 = [1, 2];
const arr2 = [3, 4, 5,...arr1];

const arr3 = [...arr2,...arr1]
console.log(arr3) // Output: [3, 4, 5, 1, 2, 1, 2]

const result = { arr1, arr2 };

console.log(result); // Output: { arr1: [1, 2], arr2: [3, 4, 5, 1, 2] }

function findDuplicateAndUnique(arr) {
  const duplicate = [];
  const unique = [];
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(num)) {
      duplicate.push(num);   
    } else {
      seen.add(num);
      unique.push(num);  
    }
  }
  return { duplicate, unique };
  // return {
  //   duplicate: duplicate,
  //   unique: unique
  // };
}

const arr = [1, 2, 3, 2, 4, 5, 1];
const { duplicate, unique } = findDuplicateAndUnique(arr);
console.log('Duplicate:', duplicate); // Output: Duplicate: [2, 1]
console.log('Unique:', unique);     // Output: Unique: [1, 2, 3, 4, 5]

