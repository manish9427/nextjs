const Debounce = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((json)=>{
        console.log(json)
    })
    clearInterval()
}

setInterval(Debounce,1000)
