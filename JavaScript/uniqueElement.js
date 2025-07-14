const arr  = [1,1,2,4,5];
const obj = {};
const a = () => {
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

    // duplicate value
    for(let arr of Object.keys(obj)) {
        if (obj[arr] > 1) {
            console.log(`Number ${arr} appears ${obj[arr]} times`);
        }
    }
}

a();