const arr = [ 2,1,3,6,2,4,1];
// arr.sort();

const freq = {};
for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
}

// for(let num in arr){
//     if(freq[arr[num]]){
//         freq[arr[num]] += 1;
//     }else{
//         freq[arr[num]] = 1;
//     }
// }

// for (let num of arr){
//     if(freq[num]){
//         freq[num] += 1;
//     }else{
//         freq[num] = 1;
//     }
// }

console.log(freq)

const dup = [];
const unique = [];

for(let key in freq){
    if(freq[key] > 1){
        dup.push(Number(key));
    }else{
        unique.push(Number(key));
    } 
}

console.log("dupicate --> ",dup)
console.log("unique --> ",unique)




