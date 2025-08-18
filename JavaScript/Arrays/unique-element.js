const arr  = [1, 2, 3, 4, 5, 1, 2, 3];

const findUniqueElement = () => {
    const freq = {};
    arr.forEach((item) => {
        if (freq[item]) {
        freq[item] += 1;
    } else {
            freq[item] = 1;
        }
    });
    console.log(freq)
    
  // Collect unique values
  const unique = [];
  for (const key in freq) {
    if (freq[key] === 1) {
      unique.push(Number(key)); // keys are strings, convert back to number
    }
  }

  console.log(unique); // Output: [4, 5]
}

findUniqueElement();


// ------------------------------------------------------Using Map for better performance

const freqMap = new Map();

// Count frequencies
arr.forEach(item => {
  freqMap.set(item, (freqMap.get(item) || 0) + 1);
});

// Print items that appear only once
for (const [key, count] of freqMap.entries()) {
  if (count === 1) {
    console.log(key); // key retains original type
  }
}