const fun = (str) => {
    return str.split(" ").reduce((longest,word)=>
        word.length>longest.length?word:longest
    ,"")
}

const str = "Hiiiiii How are Yoooooooooooooooou"
console.log(fun(str))