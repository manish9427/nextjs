const fibonacci = (n) =>{
    const arr = new Array(n);
    arr[0] = 0;
    arr[1] = 1;
    for(let i=2;i<arr.length;i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr;
}

console.log(fibonacci(5)) ;
