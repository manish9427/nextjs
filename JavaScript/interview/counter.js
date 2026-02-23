function createCounter() {
    let count = 0; 
    
    return {
        increment () {
        count++; 
        return count;
        },
         decrement () {
        count--; 
        return count;
        },
        reset(){
            count = 0
            return count
        },
        getCount(){
            return count
        }
        
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0
console.log(counter.increment()); // 1
console.log(counter.reset()); // 12
console.log(counter.getCount()); // 12