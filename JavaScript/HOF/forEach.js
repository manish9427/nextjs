const arr = [1,2,3,4,5];

let sum=0;
arr.forEach(num => {
    sum +=num;
})
console.log(sum); // 15

// forEach does not return anything
const result = arr.forEach(num => num*2);
console.log(result); // undefined

// forEach does not mutate the original array
arr.forEach((num, index, array) => {
    array[index] = num * 2;
});
console.log(arr); // [2,4,6,8,10]

// forEach can be used with objects
const obj = {a:1, b:2, c:3};
Object.keys(obj).forEach(key => {
    obj[key] = obj[key] * 2;
});
console.log(obj); // {a:2, b:4, c:6}

// forEach can be used with strings by converting to array
const str = "hello";    
[...str].forEach(char => {
    console.log(char.toUpperCase());
}); // H E L L O


// forEach can be used with Maps
const map = new Map([['a',1], ['b',2], ['c',3]]);
map.forEach((value, key) => {
    map.set(key, value * 2);
});
console.log(map); // Map(3) {'a' => 2, 'b' => 4, 'c' => 6}    

// forEach can be used with Sets
const set = new Set([1,2,3]);   
set.forEach(value => {
    console.log(value * 2);
}); // 2 4 6

// forEach can be chained with other array methods
const chainedResult = arr       
    .filter(num => num > 2) // [3,4,5]
    .map(num => num * 2)    // [6,8,10]
    .forEach(num => console.log(num)); // 6 8 10   

// forEach can take a second argument to set 'this'
const context = {
    multiplier: 3
};
arr.forEach(function(num) {
    console.log(num * this.multiplier);
}
, context); // 3 6 9 12 15

// forEach can be used with async functions (though it won't wait for them)
arr.forEach(async num => {
    const result = await new Promise(resolve => setTimeout(() => resolve(num * 2), 1000));
    console.log(result);
}); // 2 4 6 8 10 (after 1 second delay for each)
// Note: forEach does not wait for async operations to complete 
// If you need to wait, consider using a for...of loop with async/await

// forEach can be used to iterate over a NodeList
// document.querySelectorAll('div').forEach(div => {
//     div.style.backgroundColor = 'yellow';
// }
// );
// This will change the background color of all div elements to yellow

// forEach can be used to flatten an array of arrays

const nestedArr = [[1,2], [3,4], [5]];  
const flatArr = [];
nestedArr.forEach(subArr => {
    subArr.forEach(num => {
        flatArr.push(num);          
    });
});
console.log(flatArr); // [1,2,3,4,5]

// forEach can be used to create a frequency map
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const frequencyMap = {};
items.forEach(item => {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
}
);
console.log(frequencyMap); // {apple: 3, banana: 2, orange: 1}

// forEach can be used to log elements with their indices
arr.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
}
); // Index: 0, Value: 2 ... Index: 4, Value: 10

// forEach can be used to break out of a loop using exceptions
try {

    arr.forEach(num => {
        if (num === 6) {
            throw new Error('Break');
        }       
        console.log(num);
    }

    );
}   catch (e) {         
    if (e.message !== 'Break') {        
        throw e;
    }
} // 2 4
