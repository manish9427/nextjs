const primeNumber = (x) =>{
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {   
        if (x % i === 0) return false;
    }   
    return true;
}

// function primeNumber(x){
//     return x*x;
// }

let first = primeNumber(11);
console.log(first);


const PrimeNumber = function(){
    let prime = false;
    for(let i = 2, sqrt = Math.sqrt(this); i <= sqrt; i++){
        if(this % i === 0){
            prime = false;
            break;
        }
    }
    return prime;

}
let n  = 3;
const solution = PrimeNumber(n);
console.log(solution);