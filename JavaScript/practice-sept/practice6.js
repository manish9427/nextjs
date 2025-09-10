const reverseSentence = (str) => {
    return str.split(" ").map(item => item.split("").reverse().join("")).join(" ");
}

let str = "Reverse Sentence";
console.log(reverseSentence(str)); 