// setInterval clearInterval
// setTimeout clearTimeout
// debounce
// throtling


// closure

const outer = () =>{
    let count = 0;
    const inner = () =>{
        count++
        console.log(count)
    }
    return inner
}

const counter = outer()
counter()
counter()
counter()
counter()
counter()    

const fun = () =>{
    let count = 0;
    const timer = setInterval(()=>{
        console.log("Hello", ++count)
    },1000)
    return timer
}
fun()

// debounce
const debounce = (func, delay) =>{
    let timer;      
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,args)
        }       

        ,delay)
    }   
}

debounce()
