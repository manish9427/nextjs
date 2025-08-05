const arr = [
    {firstName:"Manish" , lastName: "Verma" , age:24 },
    {firstName:"Rohit" , lastName: "Sharma" , age:25 },
    {firstName:"Virat" , lastName: "Kohli" , age:26 },
    {firstName:"Rishabh" , lastName: "Pant" , age:23 },
]

function mapAns(arr) {
    return arr.map((item) => {
        return item.age ;
    });
}

console.log(mapAns(arr));

function filterAns(arr) {
    return arr.filter((item) => {
        return item.age > 24;
    });
}

console.log(filterAns(arr));

function reduceAns(arr) {
    return arr.reduce((acc, item) => {
        return acc + item.age;
    }, 0);
}       

console.log(reduceAns(arr));

let sum  = 0;
for(let i=0;i<arr.length;i++) {

    console.log(arr[i].firstName + " " + arr[i].lastName);
     sum += arr[i].age;
     console.log(sum);
}

// Reverse
for(let i = 0 ; i<arr.length;i++){
    let ans = arr[i].firstName.split('').reverse().join('');
    console.log(ans)
}

// Using forEach
const detail = arr.forEach((item) => {
    console.log(item.firstName + " " + item.lastName);
});
console.log(detail);

// Using for of loop
for (const item of arr) {
    console.log(item.firstName + " " + item.lastName);
}













