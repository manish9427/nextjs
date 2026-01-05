// setInterval clearInterval
// setTimeout clearTimeout
// debounce
// throtling


  

const fun = () => {
  const timer = setInterval(() => {
    console.log("Hello");
  }, 1000);

  // return the timer id so you can stop it later
  return timer;
};

const timerId = fun();

// stop after 5 seconds
setTimeout(() => {
  clearInterval(timerId);
  console.log("Stopped");
}, 5000);




// Closure

let i 
for(i=0;i<5;i++){
  setTimeout(()=>{console.log(i)},100)
}

