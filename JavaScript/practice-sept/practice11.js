const prime = (num)=>{
    if(num<=1){
        return false;
    }
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;

}
const num = 111;
const resultPrime = prime(num);
if(resultPrime){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not a prime number`);
}

const arr = [];
for (let i = 0; i < num; i++) {
  if (prime(i)) {
    arr.push(i);
  }
}
console.log(`Prime numbers less than ${num}:`, arr);
