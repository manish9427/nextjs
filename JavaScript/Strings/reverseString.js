let reverseString = (str) => {
    let rev = "";
    for(let i=0;i<str.length;i++){
        // rev = str[i]+rev;
        rev = str.charAt(i) + rev;
    }
    // return rev;
    return str.split("").reverse().join("");
}
let str = "Manish Verma";
let ans = reverseString(str);
console.log(ans)


// const str = "Manish";

// const ReverseString = function(str){
//     let left = 0;
//     let right = str.length-1;

//     let arr = str.split('');
//     while(left<right){
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }

//     return arr.join('');
// }

// let ans = ReverseString(str);
// console.log(ans);