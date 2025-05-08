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