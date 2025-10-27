let num =5;
const arr = [];
for(let i=0;i<num;i++){
    arr[0] = 0;
    arr[1] = 1;
    for(let i=2;i<num;i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
}
console.log(`fibonacci number of ${num} element: `,arr);