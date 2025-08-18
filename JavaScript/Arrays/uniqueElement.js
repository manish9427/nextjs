const arr  = [1, 2, 3, 4, 5, 1, 2, 3];

const uniqueElement = () => {
    const obj = {};
    arr.forEach((item) => {
        if (obj[item]) {
        obj[item] += 1;
    } else {
            obj[item] = 1;
        }
    });
    
  // Collect unique values
  const unique = [];
  for (const key in obj) {
    if (obj[key] === 1) {
      unique.push(Number(key)); // keys are strings, convert back to number
    }
  }

  console.log(unique); // Output: [4, 5]
}

uniqueElement();