const debounce = (fun,delay) => {
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fun.apply(this,args)
        },delay)
    }
}

const search = (query) =>{
    console.log(`Hello World : ${query}`)
}
const searchDebounce = debounce(search,1000)

searchDebounce("J"); 

searchDebounce("Ja"); 

searchDebounce("Jav"); 

searchDebounce("Java"); 

setTimeout(()=>(searchDebounce("JavaS")),1000) 

setTimeout(()=>(searchDebounce("JavaSC")),2000) 

setTimeout(()=>(searchDebounce("JavaSCR")),3000) 

