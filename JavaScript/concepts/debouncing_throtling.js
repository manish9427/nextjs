function debounce(fun,del){
    let timer;
    return function(...args){{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fun.apply(this,args); 
        },del)
    }}
}


const handleResize = () => {
    console.log('Window resized:', window.innerWidth, window.innerHeight);
};

const debouncedResize = debounce(handleResize, 250);
window.addEventListener('resize', debouncedResize);