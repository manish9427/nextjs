const arr  = [1, 2, 3, 4, 5, 1, 2, 3];

const a = () => {
    const obj = {};
    arr.forEach((item) => {
        if (obj[item]) {
        obj[item] += 1;
    } else {
            obj[item] = 1;
        }
    });
    
    
    
    // unique value
    for (const key in obj) {
        if (obj[key] === 1) {
            console.log(arr)
        }
    }
}

a();