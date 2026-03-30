const str = "Manish Verma"
const sw = str.split(" ");
// console.log(sw) 
const revArr = [];
for(let word of sw ){
    let ans = word.split("").reverse().join("")
    revArr.push(ans)
}
console.log(revArr.join(" "))
