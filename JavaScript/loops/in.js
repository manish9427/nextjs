const obj = { name: "Manish", age: 25 };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
// Output: name: Manish, age: 25

// You can use it on arrays, but it's not recommended unless you specifically need the index as a string:
const arr = ["a", "b", "c"];
for (let i in arr) {
    console.log(i);         // Outputs: "0", "1", "2"
    console.log(arr[i]);    // Outputs: "a", "b", "c"
}
