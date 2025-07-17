// let isValid = function(s) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };

//     for (let char of s) {
//         if (map[char]) {
//             stack.push(map[char]);
//         } else if (stack.length === 0 || stack.pop() !== char) {
//             return false;
//         }
//     }

//     return stack.length === 0;
// }

var isValid = function(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
    for(let char of s){
        if(char === '(' || char ==='{' || char === '[' ){
            stack.push(char)
        }else{
            if(stack.pop()!==map[char]){
                return false;
            }
        }
    }
    return stack.length === 0;
};
let s = "({})";
console.log(isValid(s)); 